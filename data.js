function format(str) {
	return str
		.replace(/\*([^\*]+)\*/g, (_, p1) => `<code>${p1}</code>`)
		.replace(/\!([^\!]+)\!/g, (_, p1) => `<strong>${p1}</strong>`)
		.replace(/\_([^\_]+)\_/g, (_, p1) => `<em>${p1}</em>`)
		.replace(
			/\[([^\]]+)\]\(([^\)]+)\)/g,
			(_, p1, p2) => `<a href="${p2}">${p1}</a>`
		)
		.replace(/\#([^\#]+)\#/g, (_, p1) => `<h3>${p1}</h3>`);
}

export default {
	0: {
		title: "Hello World",
		desc: format(
			`!Welcome to the game!, You will learn something about regex and solve a problem based on it. So let's get started.
			# The problem #
			You need to select the word  *Hello* from *Hello World*. In regex, we can type *Hello* to select the word *Hello*. Now type the regex and click on *Run*.

			`
		),
		input: "Hello World",
		expected: '["Hello"]',
	},
	1: {
		title: "Numbers",
		desc: format(
			`Congratulations, you have solved the first level. Now, let's learn the numbers.
			# The problem #
			You need to select all the numbers from *199,300,195*. In regex, we use *[0-9]* or *\\d* to select a number. Because we want to select all the numbers, we need to make this global.
			`
		),
		input: "199,300,195",
		expected: ['["1","9","9","3","0","0","1","9","5"]'],
	},
	2: {
		title: "Non-Numbers",
		desc: format(
			`In regex, we use *[^0-9]* or *\\D* to select a non-number.
			# The problem #
			You need to select all the non-numbers from *199,300,195*
			`
		),
		input: "199,300,195",
		expected: ['[",",","]'],
	},
	3: {
		title: "Letters",
		desc: format(
			`In regex, we use *[a-z]* or *\\w* to select a letter.
			# The problem #
			You need to select all the letters from *my age is 14 and not 42 nor 56. Thank*
			`
		),
		input: "my age is 14 and not 42 nor 56. Thank",
		expected: [
			'["m","y","a","g","e","i","s","1","4","a","n","d","n","o","t","4","2","n","o","r","5","6","T","h","a","n","k"]',
		],
	},
	4: {
		title: "Non-Letters",
		desc: format(
			`In regex, we use *[^a-z]* or *\\W* to select a non-letter.
			# The problem #
			You need to select all the non-letters from *yudfk$%54g*451*
			`
		),
		input: "yudfk$%54g*451*",
		expected: ['["$","%","*","*"]'],
	},
	5: {
		title: "Spaces",
		desc: format(
			`# The problem #
			You need to select all the spaces from * he llo wo Rld*. In regex, we use *\\s* to select spaces.
			`
		),
		input: " he llo wo Rld",
		expected: ['[" "," "," "," "]'],
	},
	6: {
		title: "Escaped Characters",
		desc: format(
			`# The problem #
			You need to select *\\s* from *45\\s&4*. We can use a backslash to escape a character. Like this: *\\$* selects *$*
			`
		),
		input: "45\\s&4",
		expected: ['["\\\\s"]'],
	},
	7: {
		title: "Groups",
		desc: format(
			`
			Groups are used to select multiple characters. For example, if we want to select the values inside the brackets *hey {select}*, we can use a group. Like this: *{(\\w+)}* selects *select*.
			`
		),
		input: "hey {select}",
		expected: [],
	},
};
