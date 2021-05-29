const Command = require('../Command.js');

module.exports  = class Setstatus extends Command {
  constructor(client) {
    super(client, {
        name: "setstatus",
        aliases: ['setsat', 'status', 'set-status'],
        usage: 'setStatus <status>',
        description: "Sets the bots status",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
  async run(message, args) {
    //ARGUMENT
    if(!args) {
      this.client.user.setPresence({ activity: { name: (args.join(" ")) , type: 'WATCHING' }, status: 'online'})
      message.channel.send("Updated the bot status")
    }
    else {
      return message.channel.send("Please give status message")
      }
  }
};