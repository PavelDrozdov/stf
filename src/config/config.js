import path from 'path';

export const config = {
    path: {
        news: path.join(__dirname, '../../../data/news'),
    },
    fileExstention: '.md',
    charset: 'utf8',
    separator: '$[===]',
}