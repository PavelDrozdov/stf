import fs from 'fs';
import path from 'path';
import {markdown}  from 'markdown';

import {config} from '../../config';

export async function get(req, res, next) {
	const { id } = req.params;

	fs.readFile(path.join(config.news.path, `${id}${config.news.exstention}`), config.charset, function(error, filedata) {
		if(error) {
			res.writeHead(404, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({message: `Not found`}));
		} else {
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			let params = JSON.parse(filedata.split(config.separator)[0]);
			const news = Object.assign({}, {id}, params, {
				html: markdown.toHTML(filedata.split(config.separator)[1])
			});
			res.end(JSON.stringify(news));
		}
	});
}
