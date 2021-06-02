const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');
const { MessageButton } = require('discord-buttons');

module.exports = class buttontest extends Command {
  constructor(client) {
    super(client, {
      name: 'buttontest',
      usage: 'buttontest',
      description: 'Tests a command',
      type: client.types.INFO,
      clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ADD_REACTIONS']
    });
  }
  async run(message, args) {
    let button = new MessageButton()
    .setLabel("Vote")
    .setStyle("url")
    .setURL("https://discord.com")
await message.channel.send(`test`, button);
  }
}