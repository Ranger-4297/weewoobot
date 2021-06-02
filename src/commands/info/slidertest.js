const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = class slidertest extends Command {
  constructor(client) {
    super(client, {
      name: 'slidertest',
      usage: 'slider',
      description: 'Tests a command',
      type: client.types.INFO,
      clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ADD_REACTIONS']
    });
  }
  async run(message, args) {
    let embed1 = new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription("Help menu 1")
  
  let embed2 = new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription("Help menu 2")
  
  let embed3 = new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription("Help menu 3")
  
  message.channel.createSlider(message.author.id, [embed1, embed2, embed3])
  }
}