import { InlineKeyboard, Keyboard } from 'grammy';
import { Command } from '../classes/index.js';

export class StartCommand extends Command {
    constructor() {
        super({ name: 'start' })
    }
    async execute({ ctx, client }) {
        return;
    };
}