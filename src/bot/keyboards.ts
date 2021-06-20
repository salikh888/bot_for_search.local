export class Keyboards {

    static inlineSetting() {
        return {
            inline_keyboard: [
                [
                    {
                        text: 'time',
                        callback_data: 'time'
                    },
                    {
                        text: 'exit',
                        callback_data: 'exit'
                    }
                ]
            ]
        }
    }
}
