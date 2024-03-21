import { InlineKeyboard } from "grammy";
import { Command } from "../classes/Command.class.js";

export class StartCommand extends Command {
    constructor() {
        super({ name: 'start' })
    }
    async execute({ ctx, client }) {
        const buttons = new InlineKeyboard().text('start').text('cancel');
        return ctx.reply('Test message', { reply_markup: buttons });
    };
}