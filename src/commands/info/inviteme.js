const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const disbut = require('discord-buttons')

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite Weewoo to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setColor('#2f3136')
      .setDescription("Click the button below to to invite me to your server!")
      let button = new disbut.MessageButton()
        .setStyle('url') //default: blurple
        .setLabel('Invite me') //default: NO_LABEL_PROVIDED
        .setURL('https://discord.com/api/oauth2/authorize?client_id=819584400035020860&permissions=8&scope=bot')
      message.channel.send({
        embed: embed,
        component: button
        });  }
};