const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports  = class killbot extends Command {
  constructor(client) {
    super(client, {
        name: "restart",
        usage: 'restart',
        description: "restarts the bot",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
async run(message) {
  const embed = new MessageEmbed()
  .setDescription('Bot restarting now...give it some time')
  .setTimestamp()
  .setColor('#2f3136');
message.channel.send(embed);
console.log('Bot was restarted')
setTimeout(function(){ 
    process.exit()
 }, 5000); //time in milliseconds
  }
};
