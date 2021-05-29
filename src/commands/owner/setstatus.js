const Command = require('../Command.js');

module.exports  = class Setstatus extends Command {
  constructor(client) {
    super(client, {
        name: "setstatus",
        aliases: ['setsat', 'status', 'set-status'],
        usage: 'setStatus <Activity: LISTENING|WATCHING|PLAYING> <Status: String>',
        description: "Sets the bots status & activity",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
  async run(message, args) {
  }
};