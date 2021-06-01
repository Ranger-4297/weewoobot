const Command = require('../Command.js');

module.exports  = class Setstatus extends Command {
  constructor(client) {
    super(client, {
        name: "setstatus",
        aliases: ['setsat', 'status', 'set-status'],
        usage: 'setstatus <activity> <status>',
        description: "Sets the bots presence. Valid activities are: LISTENING|WATCHING|PLAYING",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
  async run(message, args) {
    //ARGUMENT
    if(args[0]) {
      this.client.user.setPresence({ activity: { type: (args[0]), name: (args.slice(1).join(' ')), }, status: 'online'})
      message.channel.send("Updated the bot status")
      // to do: Embed the above & below error
      console.log(`Presence updated: Activity: ${(args[0])}, Status: ${(args.slice(1).join(' '))}`)
      }
    else if(args) {
      return this.sendErrorMessage(message, 0, ("Please give a valid activity and/or status"))
    }
  }
};