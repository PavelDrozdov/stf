import fs from 'fs';
import path from 'path';

const mainPath = path.join(__dirname, '../../../data/news');

function loadNews() {
    return new Promise ((resolve) => {
        let data = [];
        fs.readdir(mainPath, function(err, items) {
            for (var i=0; i < items.length; i++) {
                data.push(
                    Object.assign(
                        {},
                        JSON.parse(fs.readFileSync(path.join(mainPath, items[i]), "utf8")),
                        {id: items[i].replace('.json', '')},
                    )
                );
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