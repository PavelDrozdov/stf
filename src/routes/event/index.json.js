import fs from 'fs';
import path from 'path';
import {config} from '../../config';

function loadEvents() {
	return new Promise ((resolve, reject) => {
        let data = [];
        fs.readdir(config.event.path, function(error, items) {
            if(error) {
                reject(error);
            } else {
                for (var i=0; i < items.length; i++) {
                    let filedata = fs.readFileSync(path.join(config.event.path, items[i]), config.charset);

                    data.push(Object.assign(
                        {},
                        JSON.parse(filedata, config.charset),
                        {id: items[i].replace(config.event.exstention, '')},
                    ));
                }
                resolve(JSON.stringify(data));
            }
        });
    })
}

export async function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(await loadEvents())
}