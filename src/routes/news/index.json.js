import fs from 'fs';
import path from 'path';
import {config} from '../../config';

function loadNews() {
    return new Promise ((resolve, reject) => {
        let data = [];
        fs.readdir(config.news.path, function(error, items) {
            if(error) {
                reject(error);
            } else {
                for (var i=0; i < items.length; i++) {
                    let filedata = fs.readFileSync(path.join(config.news.path, items[i]), config.charset);
                    let params = filedata.split(config.separator)[0];

                    data.push(Object.assign(
                        {},
                        JSON.parse(params, config.charset),
                        {id: items[i].replace(config.news.exstention, '')},
                    ));
                }
                resolve(JSON.stringify(data));
            }
        });
    })
}

export async function get(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

    res.end(await loadNews());
}
