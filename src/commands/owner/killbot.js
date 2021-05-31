const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports  = class killbot extends Command {
  constructor(client) {
    super(client, {
        name: "killbot",
        usage: 'killbot',
        description: "Kills the bot",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
async run(message) {
  const embed = new MessageEmbed()
  .setDescription('Successfully terminated the instance of the bot...give it some time')
  .setTimestamp()
  .setColor('#2f3136');
message.channel.send(embed);
console.log('Bot was killed')
setTimeout(function(){ 
    process.exit()
 }, 5000); //time in milliseconds
  }
};
