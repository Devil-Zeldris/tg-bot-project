import { readdir } from 'node:fs/promises';
import * as Commands from '../commands/index.js';
import * as Events from '../events/index.js';

export class Register {
    constructor({ client }) {
        this.client = client;
    }
    async #getFilesLinks({ path }) {
        const files = await readdir(path, { withFileTypes: true });
        const paths = files.filter(path => !path.isDirectory()).map(file => `${file.path}/${file.name}`);
        return paths;
    };

    async getEvents() {
        const events = Object.keys(Events)
        if (!events.length) return console.log(`[REGISTER]`, `No found events`);

        for (const Event of Object.values(Events)) {
            const event = new Event();

            this.client.on(event.name, async ctx => event.execute({ ctx, client: this.client }))
            console.log(`[EVENT]`, `Event ${event.name} is loaded`)
        }
        console.log(`[REGISTER]`, `Loaded ${events.length} events`)
        return this;

    }

    async getCommands() {
        const { length } = Object.keys(Commands);

        if (!length) return console.log(`[REGISTER]`, `No found commands`);

        for (const Command of Object.values(Commands)) {

            const command = new Command();

            this.client.command(command.name, async ctx => command.execute({ ctx, client: this.client }));
            console.log(`[COMMAND]`, `Command '${command.name}' is loaded`);
        }
        console.log(`[REGISTER]`, `Loaded ${Object.keys(Commands).length} commands`)
        return this;
    }

    async getCallbackQuerries() { }
}