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
    if(args[0]) {
      this.client.user.setPresence({ activity: { name: (args.join(" ")) , type: 'WATCHING' }, status: 'online'})
      message.channel.send("Updated the bot status")
      console.log(`Status updated: ${(args.join(" "))}`)
      }
    else if(args) {
      return this.sendErrorMessage(message, 0, ("Please give a status message"))
    }
  }
};