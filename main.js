import anime from "animejs";
import levelData from "./data";

const $ = (el) => document.querySelector(el);

function html(strings, ...values) {
	return strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "");
}

function genGlobalFn(fn) {
	let id = "_" + Math.random().toString(36).substring(2, 15);
	window[id] = fn;
	return id + "()";
}

const local = (key) => localStorage.getItem(key) || "";
const setlocal = (key, value) => localStorage.setItem(key, value);

/**
 * Start the app
 */

const appData = {
	appRoot: $("#app"),
	user: {
		level: -1,
	},
	templates: {
		start: () =>
			html`
				<h1>
					<code>
						<span class="gray">/</span>regex<span class="gray">/g</span> Hero
					</code>
				</h1>

				<p>Learn, Practice Regex</p>

				<button onclick=${genGlobalFn(startGame)} class="mt-2">Start</button>
			`,
		level: (title, content, level, expected) =>
			html`
				<div class="level-parent">
					<span class="level">Level ${level}</span>
					<h1 class="level-title">${title}</h1>
					<p class="level-desc">${content.replaceAll("\n", "<br>")}</p>

					<div class="runner">
						<div class="runner-left">
							<h2 class="runner-subheading">Regex Runner</h2>
							<input
								type="text"
								placeholder="Enter regex and click run or press enter"
								class="runner-input"
							/>
							<input type="checkbox" class="runner-checkbox" name="global" />
							<input type="checkbox" class="runner-checkbox" name="multiline" />
							<input
								type="checkbox"
								class="runner-checkbox"
								name="ignore case"
							/>
							<button class="runner-run" onclick=${genGlobalFn(runRegex)}>
								Run
							</button>
						</div>

						<div class="runner-right">
							<h2 class="runner-subheading">Results</h2>
							<pre class="runner-result"></pre>
							<div>
								Expected:
								${expected.length > 1
									? "One of: " +
									  expected.map((e) => `<code>${e}</code>`).join(", ")
									: expected[0]}
							</div>
						</div>
					</div>
				</div>
			`,
		winModal: () =>
			html`
				<div class="overlay"></div>
				<div class="modal">
					<h1>You Win!</h1>
					<p>You have completed this level.</p>
					<button onclick=${genGlobalFn(nextLevel)} class="mt-2">
						Next Level
					</button>
				</div>
			`,
	},
};

/**
 * Utils
 */
const root = () => appData.appRoot;

function template(name, ...args) {
	return appData.templates[name](...args);
}

if (local("user")) {
	appData.user = JSON.parse(local("user"));
} else {
	setlocal("user", JSON.stringify(appData.user));
}

function updateUserData(key, value) {
	appData.user[key] = value;
	setlocal("user", JSON.stringify(appData.user));
}

function getUserData(key) {
	return appData.user[key];
}

function slideUp(complete) {
	anime({
		targets: root(),
		translateY: "-100%",
		duration: 1000,
		easing: "easeInOutQuint",
		complete: complete,
	});
}

function slideDown(complete) {
	anime({
		targets: root(),
		translateY: "0",
		duration: 1000,
		easing: "easeInOutQuint",
		complete: () => {
			if (complete) {
				complete();
			}
			root().style.transform = "";
		},
	});
}

/**
 * UI
 */
function startGame() {
	/**
	 * If the user has not started the game yet,
	 */
	if (getUserData("level") === -1) {
		slideUp(() => {
			updateUserData("level", 0);
			startGame();
			slideDown();
		});
	} else {
		/**
		 * If the user has started the game already, play the level
		 */
		const level = getUserData("level");

		/**
		 * Render the level
		 */
		let expected = levelData[level].expected || [];
		expected = typeof expected === "string" ? [expected] : expected;

		root().innerHTML = template(
			"level",
			levelData[level].title,
			levelData[level].desc,
			level + "",
			expected
		);

		const input = $(".runner-input");

		input.addEventListener("keyup", (e) => {
			if (e.key === "Enter") {
				runRegex();
			}
		});
	}
}

/**
 * Next Level
 */
function nextLevel() {
	anime({
		targets: [$(".overlay"), $(".modal")],
		opacity: 0,
		duration: 1000,
		easing: "easeInOutQuint",
		complete: () => {
			slideUp(() => {
				const level = getUserData("level");

				updateUserData("level", level + 1);

				startGame();

				slideDown();
			});
		},
	});
}

function runRegex() {
	const input = $(".runner-input");
	const result = $(".runner-result");

	const regex = input.value;
	const str = "Hello World";

	const global = $(".runner-checkbox[name=global]").checked;
	const multiline = $(".runner-checkbox[name=multiline]").checked;
	const caseInsensitive = $(".runner-checkbox[name='ignore case']").checked;

	const regexp = new RegExp(
		regex,
		`${global ? "g" : ""}${multiline ? "m" : ""}${caseInsensitive ? "i" : ""}`
	);
	const matches = str.match(regexp);

	let expected = levelData[getUserData("level")].expected;
	expected = typeof expected === "string" ? [expected] : expected;

	const passed = expected.includes(JSON.stringify(matches));

	if (passed) {
		anime({
			targets: result,
			borderColor: ["#272727", "#00ff00", "#272727"],
			duration: 1000,
			easing: "easeOutQuint",

			complete: () => {
				anime({
					targets: result,
					scale: [1, 1.5, 1],
					backgroundColor: "#000",
					duration: 2000,
					easing: "easeOutQuint",
				});

				root().innerHTML += template("winModal");

				setTimeout(() => {
					const overlay = $(".overlay");
					const modal = $(".modal");

					anime({
						targets: overlay,
						opacity: [0, 1],
						duration: 400,
						easing: "easeOutQuint",

						complete: () => {
							anime({
								targets: modal,
								opacity: [0, 1],
								translateX: ["-50%", "-50%"],
								translateY: ["-50%", "-50%"],
								scale: [1, 1.5, 1],
								duration: 1000,
								easing: "easeOutQuint",
							});
						},
					});
				}, 400);
			},
		});
	} else {
		anime({
			targets: result,
			borderColor: ["#272727", "#ff0000", "#272727"],
			duration: 1000,
			easing: "easeOutQuint",
		});
	}

	result.innerHTML = JSON.stringify(matches);
}

if (appData.user.level < 0) root().innerHTML = template("start");
else startGame();
