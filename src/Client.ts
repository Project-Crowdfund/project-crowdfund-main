/**
 * This is the primary class which handles the Discord Client instance
 * provided by the discord.js library.
 */

import Discord from 'discord.js';

interface ClientOptions {
    intents: number[];
}

class Client extends Discord.Client {
    constructor({ intents }: ClientOptions, token: string) {
        super({
            intents: intents
        });
        this.login(token);
    }

    public start(): void {
    }
}

export default Client;
