const Command = require('../Command.js');

module.exports  = class killbot extends Command {
  constructor(client) {
    super(client, {
        name: "killbot",
        aliases: ['kill'],
        usage: 'killbot',
        description: "kills the instance of the bot running",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
async run(message) {
  message.channel.send("Bot was killed successfully"),
  console.log('Bot was killed')
setTimeout(function(){ 
    process.exit()
 }, 5000); //time in milliseconds
  }
};