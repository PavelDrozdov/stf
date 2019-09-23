import { events } from './_events.js';

const lookup = new Map();
events.forEach(event => {
	lookup.set(event.id, JSON.stringify(event));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { id } = req.params;
	console.log(req.params)
	console.log(lookup.has(id))
	if (lookup.has(id)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(id));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
