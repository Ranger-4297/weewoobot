const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const disbut = require('discord-buttons')

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'repository',
      aliases: ['repo'],
      usage: 'repository',
      description: 'Displays the link to the bot\'s GitHub repository.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed1 = new MessageEmbed()
      .setTitle('Repository Link')
      .setDescription("Please support me by starring & following me, feel free to contribute to any projects I own, run and contribute to!")
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    let button = new disbut.MessageButton()
      .setLabel("Repository")
      .setStyle("url")
      .setURL("https://github.com/Ranger-4297/Weewoo")
      message.channel.send({
        embed: embed1,
        component: button})
    }
};