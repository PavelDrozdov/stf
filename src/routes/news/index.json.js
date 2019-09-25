import fs from 'fs';
import path from 'path';
import {config} from '../../config';

const mainPath = path.join(__dirname, '../../../data/events');

function loadNews() {
    return new Promise ((resolve) => {
        let data = [];
        fs.readdir(config.path.news, function(err, items) {
            for (var i=0; i < items.length; i++) {
                let filedata = fs.readFileSync(path.join(config.path.news, items[i]), config.charset);
                let params = filedata.split(config.separator)[0];

                data.push(Object.assign(
                    {},
                    JSON.parse(params, config.charset),
                    {id: items[i].replace(config.fileExstention, '')},
                ));
            }
            resolve(JSON.stringify(data));
        });
    })
}

export async function get(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

    res.end(await loadNews());
}