function format(str) {
	return  str.replace(
		/\*([^\*]+)\*/g,
		(_, p1) => `<code>${p1}</code>`
	).replace(/\!([^\!]+)\!/g, (_, p1) => `<strong>${p1}</strong>`);
}

export default {
	0: {
		title: "Hello World",
		desc: format(
			`!Welcome to the game!, In this level you need to select *Hello* from the string *Hello Worl*`
		),
		expected: '["Hello"]',
	},
	1: {
		title: "Groups",
		desc: format(
			`You must select *ll* from the string *Hello World* \n Groups look like this: */(group)(another-group)/*`
		),
		expected: ['["ll","l","l"]', '["l","l"]'],
	},
};
