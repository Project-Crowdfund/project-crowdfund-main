/**
 * This file is meant to initialize the program.
 */

import { Intents } from 'discord.js';
import { config } from 'dotenv';

import Client from './src/Client';

config();
let TOKEN: any = process.env.TOKEN;

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS
    ]
}, TOKEN);

client.start();
