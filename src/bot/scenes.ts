import {BaseScene} from 'telegraf-ts';
import { Keyboards } from './keyboards'


export class ScenesGenerator {

    SettingScene() {
        const setting = new BaseScene('setting');
        setting.enter(async ctx => {
            try {
                await ctx.reply('Настройки', )
                // await ctx.reply('Настройки', { reply_markup: Keyboards.inlineSetting() })
            }catch (e) {
                throw e
            }

        });
        setting.on('text', async (ctx: any) => {
            try {
                console.log('assas')
                console.log(ctx.message.text)
                if ( ctx.message.text === 'exit' ) {
                    await ctx.scene.leave();
                } else if (ctx.message.text === 'time') {
                    await ctx.scene.enter('time');
                } else {
                    await ctx.scene.reenter();
                }
            } catch (e) {
                throw e
            }

        });
        setting.on('message', async ctx => {
            try {
                await ctx.scene.reenter();
            }catch (e) {
                throw e
            }

        });

        return setting;
    }

    SettingTimeScene() {
        const settingTimeScene = new BaseScene('time');
        settingTimeScene.enter(async ctx => {
            await ctx.reply('Введите id кассы');
        });
        settingTimeScene.on('text', async (ctx: any) => {

            if (ctx.message.text === 'time') {
            //todo
            // вход в функцию для сохранения времени
                await ctx.reply('Done');
                await ctx.scene.leave();
            } else if (ctx.message.text === 'back') {
                await ctx.scene.leave();
            } else if (ctx.message.text === "done") {
                await ctx.scene.enter('done');
            } else {
                await ctx.scene.reenter();
            }
        });
        settingTimeScene.on("message", async ctx => {
            await ctx.scene.reenter();
        });

        return settingTimeScene;
    }

    // UnsetMaintenanceScene() {
    //     const unsetmaintenance = new BaseScene('unsetmaintenance');
    //     unsetmaintenance.enter(async ctx => {
    //         await ctx.reply('Введите id кассы');
    //     });
    //     unsetmaintenance.on('text', async (ctx: any) => {
    //         const id = ctx.message.text;
    //         if (ctx.message.text === '🔍 search') {
    //
    //             await ctx.reply('Done');
    //             await ctx.scene.leave();
    //         } else if (ctx.message.text === '🔍 search') {
    //             await ctx.scene.enter('search');
    //         } else if (ctx.message.text === "🚸 maintenance") {
    //             await ctx.scene.enter('maintenance');
    //         } else {
    //             await ctx.scene.reenter();
    //         }
    //     });
    //     unsetmaintenance.on("message", async ctx => {
    //         await ctx.scene.reenter();
    //     });
    //     return unsetmaintenance;
    // }
}