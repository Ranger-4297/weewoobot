const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports  = class reload extends Command {
  constructor(client) {
    super(client, {
        name: "reload",
        aliases: ['restart'],
        usage: 'reload',
        description: "Reloads the bot\nRequires PM2 to reload",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
async run(message) {
  const embed = new MessageEmbed()
  .setDescription('Successfully reloaded the bot...give it some time')
  .setTimestamp()
  .setColor('#2f3136');
message.channel.send(embed);
console.log('Bot was reloaded')
setTimeout(function(){ 
    process.exit()
 }, 5000); //time in milliseconds
  }
};