import * as cheerio from 'cheerio';
import axios from 'axios';
import {Config} from '../config';
// import {BotInit} from "../bot/bot";

export function queryMaker(message: string) {
    const item = message.replace('/s', '-');
    const URL = 'https://www.olx.uz/list/q-' + item;
    console.log(URL)
    const URLen = encodeURI(URL);
    const optionsRequest = {
        uri: URL,
        headers: {
            'User-Agent': Config.HEADERS
        },
    };
    return optionsRequest;
}


async function getHtml(item: any) {
    let html = await axios.get('https://www.olx.uz/list/q-' + item);

    return html;
}

function parser(html: any) {
    let $ = cheerio.load(html);

    return $;
}

function pageNumbers($: any) {

    const pageNumbers = $('span.item fleft').eq(-2).text();
    return pageNumbers;
}

function test() {
    console.log(pageNumbers(parser(getHtml('ps3'))))
}

test()

// export function search(html: any) {
//     let metadata;
//     let $ = cheerio.load(html);
//     console.log($.html(), '-------------------------')
//     $('h3.lheight22 margintop5')
//         .each(  (i, element) => {
//             console.log($)
//
//             let a = $(search(html)).prev();
//             console.log(a)
//             let url = a.attr('href');
//             console.log(url, '-------------------------')
//             metadata.push(url);
//         });
//     return metadata;
// }
//
// export async function main(message: any) {
//     let options = queryMaker(message)
//     let html = await getHtml(options);
//     let array = search(html);
//     return array;
// }
// (async function yy() {
//     console.log(await main('ps3'));
// })();
