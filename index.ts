/**
 * This file is meant to initialize the program.
 */

import { Intents } from 'discord.js';
import { config } from 'dotenv';

import Client from './src/Client';

config();

/**
 * Scope for initiating the Discord Client and it's various modules. 
 */
{
    let TOKEN: any = process.env.TOKEN;
    if (!TOKEN) throw new ReferenceError([
        'Token not specified/found. Please set TOKEN in \'.env\' file in root directory.',
        'If your issue is unrelated to this, please make an issue at the respective git repository, or make a pull request to fix it.'
    ].join('\n'));

    const client = new Client({ intents: [ Intents.FLAGS.GUILDS ] }, TOKEN);

    client.start();
}
