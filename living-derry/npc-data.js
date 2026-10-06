// Residents of the street, autumn 1957. All original characters (not from the novel).
// Positions are in neighborhood-scene metres: near sidewalk z≈8.2, road z≈9–18.4,
// far sidewalk z≈19.2, front walk of the Victorian at x≈-4.7.
// route: waypoints [x, z, dwellSeconds, activity]; shelter: where they go when it rains.
export const RESIDENTS = [
	{
		id: 'mailman', name: 'Abel Tibbetts', role: 'Mail carrier', tint: '#3d4a5c', accent: '#2a2a2a', scale: 1.0, speed: 1.15,
		route: [[-24, 8.2, 2, 'idle'], [-14, 8.2, 4, 'agree'], [-4.7, 8.2, 5, 'idle'], [-4.7, 6.2, 3, 'idle'], [-4.7, 8.2, 0, 'walk'], [6, 8.2, 4, 'idle'], [18, 8.2, 3, 'idle']],
		shelter: [-6.2, 5.2],
		talk: {
			first: ['Afternoon. Nothing for your house today, I\'m afraid.', 'Fourteen years on this route and the mail\'s never once been late. Rain or no rain.'],
			again: ['Back again? I haven\'t got any more letters in this bag than I had five minutes ago.'],
			rain: ['Gutters are running fast. Mind your shoes near the drains, they back up something awful.'],
			choices: [
				{ label: 'Ask about the neighbors', lines: ['Mrs. Pelletier gets more catalogs than anyone in Derry. Never orders a thing. Just likes the pictures, I think.'], gesture: 'agree' },
				{ label: 'Ask about the drains', lines: ['Town says they\'ll fix them in the spring. Town said that last spring too.', 'Funny thing. You can hear water down there even when it hasn\'t rained.'], gesture: 'headShake', memory: 'heard-drains' },
			],
		},
	},
	{
		id: 'edna', name: 'Edna Pelletier', role: 'Neighbor', tint: '#7a4b4b', accent: '#e7dcc6', scale: .94, speed: .85,
		route: [[-13, 4.2, 9, 'idle'], [-11, 4.6, 6, 'idle'], [-13, 4.2, 0, 'walk']],
		shelter: [-12.5, 2.2],
		talk: {
			first: ['Oh! You startled me. I was trying to get this wash in before the weather turns.', 'You\'re the one who keeps walking up and down. Lost something, dear?'],
			again: ['Still here? Well, make yourself useful and tell me if those clouds look like rain to you.'],
			rain: ['Too late for the laundry now. It\'ll smell like the river for a week.'],
			choices: [
				{ label: 'Offer to help', lines: ['That\'s sweet. No, no, I\'ve done it forty years. I\'ll do it forty more.'], gesture: 'agree', memory: 'helped-edna' },
				{ label: 'Ask about the boy across the street', lines: ['Danny Royce? He\'s harmless. Spends too much time down in the Barrens, if you ask me. Nothing good ever came up out of there.'], gesture: 'headShake' },
			],
		},
	},
	{
		id: 'danny', name: 'Danny Royce', role: 'Neighborhood kid', tint: '#8a6a2e', accent: '#33465c', scale: .74, speed: 1.45,
		route: [[-20, 19.2, 1, 'idle'], [10, 19.2, 3, 'idle'], [15, 19.2, 2, 'agree'], [-8, 19.2, 0, 'walk']],
		shelter: [-2, 22.5],
		talk: {
			first: ['You got any comic books? I\'ll trade you. I\'ve got two Captain Marvels, only one of them\'s got a ripped cover.', 'My mom says I\'m not supposed to talk to people I don\'t know. You don\'t count. You live here, right?'],
			again: ['You came back! Okay, okay. Wanna hear a secret?'],
			rain: ['Rain\'s the best. You can race paper boats all the way down the whole street.'],
			choices: [
				{ label: 'Hear the secret', lines: ['There\'s a place down by the stream where if you yell, something yells back. And it isn\'t an echo, because it says different words.'], gesture: 'agree', memory: 'danny-secret' },
				{ label: 'Tell him to head home', lines: ['Yeah, yeah. Everybody says that. Nobody ever says why.'], gesture: 'headShake' },
			],
		},
	},
	{
		id: 'hollis', name: 'Hollis Gage', role: 'Retired millworker', tint: '#4b4a40', accent: '#9a8f78', scale: .97, speed: .6,
		route: [[-3.2, 3.4, 20, 'sad'], [-3.6, 4.6, 8, 'idle']],
		shelter: [-3.2, 3.0],
		talk: {
			first: ['Built half the porches on this street, me and my brother. That was before the war.', 'You\'re new. I can always tell the new ones. You look at the town like you\'re reading it.'],
			again: ['Sit a while if you want. Porch steps don\'t charge rent.'],
			rain: ['Rain like this, the whole town sounds like it\'s breathing. Always has.'],
			choices: [
				{ label: 'Ask about Derry', lines: ['Good town, mostly. People here are kind enough. They just don\'t look too close at things.', 'Every so often a bad year comes round. Then folks forget it, quick as you like.'], gesture: 'headShake', memory: 'hollis-history' },
				{ label: 'Ask about the mill', lines: ['The old ironworks was before my time. I worked the one by the canal. Loud as the end of the world, and I miss it every day.'], gesture: 'agree' },
			],
		},
	},
	{
		id: 'rose', name: 'Rose Kimball', role: 'Teacher', tint: '#4d5f4a', accent: '#c9b48c', scale: .93, speed: 1.05,
		route: [[18, 19.2, 3, 'idle'], [6, 19.2, 0, 'walk'], [6, 13.5, 0, 'walk'], [6, 8.2, 2, 'idle'], [-9, 8.2, 5, 'idle'], [6, 8.2, 0, 'walk'], [6, 19.2, 0, 'walk']],
		shelter: [8.5, 22.5],
		talk: {
			first: ['Good afternoon. I teach fifth grade at Derry Elementary, so if you\'re hoping to be anonymous on this street, I\'m afraid it\'s too late.', 'I\'m walking the long way. It\'s a nicer day than the forecast promised.'],
			again: ['We keep running into each other. Derry is a small town that pretends to be a big one.'],
			rain: ['I should have trusted the forecast. I never do.'],
			choices: [
				{ label: 'Ask about her class', lines: ['Thirty-one children, thirty-one opinions about long division. I love every one of them on Fridays.'], gesture: 'agree' },
				{ label: 'Ask if anything odd has happened lately', lines: ['Odd? No. Well. Two of my students have stopped walking home along the canal. Both of them told me the same reason, and neither would tell me what it was.'], gesture: 'headShake', memory: 'rose-odd' },
			],
		},
	},
];
