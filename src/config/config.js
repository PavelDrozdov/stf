import path from 'path';

export const config = {
    news: {
        exstention: '.md',
        path: path.join(__dirname, '../../../data/news'),
    },
    event: {
        exstention: '.json',
        path: path.join(__dirname, '../../../data/events'),
    },
    charset: 'utf8',
    separator: '$[===]',
}
