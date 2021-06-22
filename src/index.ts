// import {BotInit, init} from './bot/bot';
//
// (async function main() {
//     new BotInit();
//     console.log('bot ready');
// })();
//
//

import * as cheerio from 'cheerio';
import axios from 'axios';
import Parser from "./parser/parser";


// function normalizeQuery(item: string) {
//     return item.replace(/\s+/g, '-');
// }
//
// async function getHtml(item: string) {
//     const query = normalizeQuery(item);
//     const {data} = await axios.get('https://www.olx.uz/list/q-' + query);
//     return data;
// }
//
// async function cheerioLoad(item: any) {
//     const $ = cheerio.load(await getHtml(item));
//     return $;
// }
//
// function getValuePage(link: any) {
//     const arrayMatch: any = link.match('\\d{1,}$');
//     return arrayMatch[0];
// }
//
// async function getLinksItems(item: string) {
//     const arrayLinks: (string | undefined)[] = [];
//     let $ = await cheerioLoad(item);
//
//
//     $('.emptynew').each((i, element) => {
//         console.log($(element).find('span.marker').text() === 'Проверьте правильность написания или введите другие параметры поиска');
//
//     });
//
//
// }
//
//
// const query = {
//     city: 'tashkent',
//     item: 'ps move'
// }
//
// async function test(query: any) {
//     const data = new Parser(query)
//     return await getLinksItems('123asdasf')
// }
//
// (async function main() {
//     console.log(await test(query))
//
// })();


const query = {
    city: 'tashkent',
    item: 'ps3'
}

async function test(query: any) {
    const data = new Parser(query)
    return await data.GetLinksItems()
}

(async function main() {
    console.log(await test(query))

})();

