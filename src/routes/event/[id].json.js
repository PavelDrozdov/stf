import fs from 'fs';
import path from 'path';

import {config} from '../../config';

export async function get(req, res, next) {
	const { id } = req.params;
	fs.readFile(path.join(config.event.path, `${id}${config.event.exstention}`), config.charset, function(error, filedata) {
		if(error) {
			res.writeHead(404, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({message: `Not found`}));
		} else {
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			let params = JSON.parse(filedata);
			const news = Object.assign({}, {id}, params);
			res.end(JSON.stringify(news));
		}
	});
}
