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
// import {Config} from '../config';
// import {BotInit} from "../bot/bot";
//
// export function queryMaker(message: string) {
//     const item = message.replace('/s', '-');
//     const URL = 'https://www.olx.uz/list/q-' + item;
//     console.log(URL)
//     const URLen = encodeURI(URL);
//     const optionsRequest = {
//         uri: URL,
//         headers: {
//             'User-Agent': Config.HEADERS
//         },
//     };
//     return optionsRequest;
// }


async function getHtml(item: any) {
    const { data }  =  await axios.get('https://www.olx.uz/list/q-' + item);
    return data;
}

async function cheerioLoad(item: any){
    const $ = cheerio.load(await getHtml(item));
    return $;
}


function getValuePage(link:any){
    const arrayMatch: any = link.match('\\d{1,}$');
    return arrayMatch[0];
}

async function getLinksItems(item: string){
    let arrayLink: Array<string | any>;
    let $ = await cheerioLoad(item);
    const lastPageNumber = getValuePage($('a.block').eq(-1).attr('href'));
    for (let i = 1; i <= lastPageNumber; i++){
        const selector = await cheerioLoad( `${item}/?page=${i}`);
        selector('.wrap').each((i, element) => {
            const link = selector(element).find('a.marginright5').attr('href')
            arrayLink.push(link);
            return arrayLink;
        })
        // @ts-ignore

    }

}



//_____________________________________________
async function test() {
    const  data   = await  getLinksItems('ps3')
    return data
}
(async function main() {
     console.log(await test())

})();

