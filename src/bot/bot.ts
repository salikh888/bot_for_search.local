// import Telegraf, {Markup, session, Stage} from 'telegraf-ts';
// import {Config} from '../config';
// import {ScenesGenerator} from './scenes'
// import {main} from "../parser/script";
//
//
// const usersContextData = {};
//
// // export function init() {
// //
// //     const bot = new Telegraf(Config.BOT_TOKEN);
// //     const scenes = new ScenesGenerator();
// //     const setting = scenes.SettingScene;
// //     const settingTime = scenes.SettingTimeScene;
// //
// //
// //
// //
// //     const stage = new Stage([setting(), settingTime()]);
// //
// //
// //     const keyboards = Markup.keyboard(
// //         [
// //             ['⚙ Настройки']
// //         ]
// //     ).resize();
// //
// //     bot.use(session());
// //
// //     // @ts-ignore
// //     bot.use(stage.middleware());
// //
// //
// //     bot.command("start", (ctx: any) => {
// //         console.log("start");
// //
// //
// //         ctx.reply("hello",{reply_markup: keyboards});
// //     });
// //
// //     bot.on("message", async (ctx: any) => {
// //
// //         // TODO
// //         // Отлавливать сообщения от поьзователей, сохранять контекст
// //         // В зависимости от нажатой кнопки взывать сотвствующую функцияю
// //         // console.log(ctx.message.text);
// //
// //         if (ctx.message.text === "⚙ Настройки") {
// //             await ctx.scene.enter('setting');
// //
// //         }
// //
// //     });
// //
// //     bot.launch();
// // }
//
// export function init() {
//
//     const bot = new Telegraf(Config.BOT_TOKEN);
//
//     bot.command("start", (ctx: any) => {
//         console.log("start");
//         ctx.reply("hello");
//     });
//
//     bot.on("message", async (ctx: any) => {
//         let message = ctx.message.text;
//         console.log(message);
//         // ctx.reply(queryMaker(message));
//         let arrayParams: any = await main(message);
//         if ('https://www.kinopoisk.ru/undefined' === 'https://www.kinopoisk.ru/' + arrayParams[0]) {
//             ctx.reply('Упс что то пошло не так');
//         } else {
//             ctx.reply('https://www.kinopoisk.ru/' + arrayParams[0]);
//         }
//     });
//
//     bot.launch();
// }
// export class BotInit{
//    private bot: any;
//
//     constructor() {
//         this.bot = new Telegraf(Config.BOT_TOKEN);
//     }
//
//
//     Launch(){
//         this.bot.launch();
//     }
//
//     Command(){
//        this.bot.command("start", (ctx: any) => {
//             console.log("start");
//             ctx.reply("hello");
//         });
//     }
//
// }