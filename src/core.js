import 'dotenv/config';
import { Client } from './classes/Client.class.js';

const client = new Client({ token: process.env.TOKEN });

client.login().then(() => console.log(`[START]`, `Bot is started`)).catch(error => console.log(error));