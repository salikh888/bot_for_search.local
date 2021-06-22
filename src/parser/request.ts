import axios from 'axios';
import Utils from "./utils";
import {Query} from "./inteface";


export default class Request {

    static async GetHTML(queryParams: Query, pageCount: number) {
        let URL: string;
        if (pageCount > 0) {
            URL = `https://www.olx.uz${Utils.queryMayker(queryParams.city, queryParams.item)}/?page=${pageCount}`;
        }
        URL = `https://www.olx.uz${Utils.queryMayker(queryParams.city, queryParams.item)}`

        const { data } = await axios.get(URL);
        return data;
    }

}

