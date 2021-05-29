const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

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
  const embed = new MessageEmbed()
  .setDescription('Successfully killed the running instance')
  .setTimestamp()
  .setColor('#2f3136');
message.channel.send(embed);
console.log('Bot was killed')
setTimeout(function(){ 
    process.exit()
 }, 5000); //time in milliseconds
  }
};