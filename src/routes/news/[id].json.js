import fs from 'fs';
import path from 'path';
const mainPath = path.join(__dirname, '../../../data/news');

export async function get(req, res, next) {
	const { id } = req.params;

	fs.readFile(path.join(mainPath, `${id}.json`), "utf8", function(error, data) {
		if(error) {
			res.writeHead(404, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({message: `Not found`}));
		} else {
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			const news = Object.assign({}, {id}, JSON.parse(data, "utf8"));
			res.end(JSON.stringify(news));
		}
	});
}
