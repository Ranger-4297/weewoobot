const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const disbut = require('discord-buttons')

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Weewoo\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setDescription('Click the button below to join the Weewoo Support Server!')
      .setColor('#2f3136');
    let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support server')
      .setURL('https://discord.gg/ekMQH384KC')
    message.channel.send({
      embed: embed,
      component: button
    });
  }
};
