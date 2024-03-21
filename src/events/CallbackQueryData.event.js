import { Event } from '../classes/Event.class.js';
import { Utils } from '../classes/Utils.class.js';
import questions from '../questions/questions.json' assert {type: 'json'};

export class CallbackQueryDataEvent extends Event {
    constructor() {
        super({ name: `callback_query:data` })
    }
    async execute({ ctx, client }) {
        if (ctx.update.callback_query.data === 'start') {
            // console.log(ctx, client)
            const questionList = Utils.getUniqueRandomElements({ arr: questions, amount: 20 });
            console.log(questionList);
            // client.polls.set();
        }
        await ctx.answerCallbackQuery(`Callback answer`);
        return;
    }
}