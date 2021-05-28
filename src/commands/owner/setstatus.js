const Command = require('../Command.js');

module.exports  = class setstatus extends Command {
  constructor(client) {
    super(client, {
        name: "setStatus",
        aliases: ['setsat', 'status', 'set-status'],
        usage: 'setStatus <Activity: LISTENING|WATCHING|PLAYING> <Status: String>',
        description: "Sets the bot status & activity",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
  async run(message, args) {
  }
};