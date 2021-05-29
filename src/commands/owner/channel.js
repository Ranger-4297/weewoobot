const Command = require('../Command.js');

module.exports  = class Setstatus extends Command {
  constructor(client) {
    super(client, {
        name: "channel",
        usage: 'create channel',
        description: "creates a channel",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
  run(message,) {
    message.guild.channels.create('new-general', { reason: 'Needed a cool new channel' })
  }
};