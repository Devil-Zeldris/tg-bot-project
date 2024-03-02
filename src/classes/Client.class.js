import { Bot } from "grammy";
import { Register } from "./Register.class.js";

export class Client extends Bot {
    constructor({ token }) {
        super(token);
    }
    async login() {
        const register = new Register({ client: this })

        await register.getEvents();
        await register.getCommands();
        this.catch(error => {
            const { ctx } = error;

            console.log(`Error while handling update ${ctx.update.update_id}`);

            if (error instanceof GrammyError) return console.error(`[GRAMMY_ERROR]`, error);
            if (error instanceof HttpError) return console.error(`[HTTP_ERROR]`, error);

            return console.error(`[UNKNOWN_ERROR]`, error);
        });

        await this.start();
        console.log(`[INIT]`, `All systems initiated.`);
        return this
    }
}