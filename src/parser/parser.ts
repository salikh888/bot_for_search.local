import * as cheerio from 'cheerio';
import Request from './request';
import { Query } from './inteface';


export default class Parser {

    query: Query;

    constructor(query: Query) {
        this.query = query;
    }

    async GetLinksItems() {
        let nothing: string = '';
        const arrayLinks: (string | undefined)[] = [];

        let $ = await this.cheerioLoad(this.query, 0);
        $('.emptynew').each((i, element) => {
            nothing = $(element).find('span.marker').text();
        });

        if (nothing === 'Проверьте правильность написания или введите другие параметры поиска') {
            return nothing;
        }

        if ($('a.block').eq(-1).attr('href') === 'javascript:void(0);') {
            $('.wrap').each((i, element) => {
                const link = $(element).find('a.marginright5').attr('href');
                arrayLinks.push(link);
            });
        } else {
            const lastPageNumber = this.getValuePage($('a.block').eq(-1).attr('href'));
            for (let i = 1; i <= lastPageNumber; i++) {
                const selector = await this.cheerioLoad(this.query, i);
                selector('.wrap').each((i, element) => {
                    const link = selector(element).find('a.marginright5').attr('href');
                    arrayLinks.push(link);
                });
            }
        }

        return arrayLinks;
    }

    private async cheerioLoad(query: Query, i: number) {
        const $ = cheerio.load(await Request.GetHTML(query, i));
        return $;
    }

    private getValuePage(link: any) {
        const arrayMatch: any = link.match('\\d{1,}$');
        return arrayMatch[0];
    }
}