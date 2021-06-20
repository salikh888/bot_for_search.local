import *as dotenv from 'dotenv';
import *as path from 'path';

export class ConfigParser {

    public BOT_TOKEN!: string;
    public HEADERS!: string;


    constructor() {
        const config = dotenv.config({path: path.resolve(process.cwd(), '.env')});
        if (config.error) {
            throw Error("ENV_PARAMS_PARSE_ERROR");
        }
        console.log(config);
        Object.assign(this, config.parsed);

    }
}

export const Config = new ConfigParser();