import * as cheerio from 'cheerio';
import Request  from 'request-promise';
import {Config} from '../config';
import {BotInit} from "../bot/bot";

export function queryMaker(message: string) {
    const item = message.replace('/s', '-');
    const URL = 'https://www.olx.uz/list/q-' + item;
    console.log(URL)
    const URLen = encodeURI(URL);
    const optionsRequest = {
        uri : URLen,
        headers: {
            'User-Agent': Config.HEADERS
        },
    };
    return optionsRequest;
}

export async function setHtml(options: any){
    let html = await Request(options);
    //console.log(html)
    return html;
}

export function search(body: any) {
    let metadata;
    let $ = cheerio.load(body);
    console.log($, '-------------------------')
    $('div.listContainer')
        .each(  (i, element) => {
            console.log($)

            let a = $(search(body)).prev();
            console.log(a)
            let url = a.attr('data-url');
            console.log(url, '-------------------------')
            metadata.push(url);
        });
    return metadata;
}

export async function main(message: any) {
    let options = queryMaker(message)
    let html = await setHtml(options);
    let array = search(html);
    return array;
}
(async function yy() {
    console.log(await main('ps3'));
})();
