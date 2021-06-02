const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');
const { MessageButton } = require('discord-buttons');

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['gh', 'repo'],
      usage: 'github',
      description: 'Displays the link to the owners\'s GitHub account.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed1 = new MessageEmbed()
      .setTitle('GitHub Link')
      .setDescription(oneLine`
        Please support me by starring & following me, feel free to contribute to any projects I own, run and contribute to!
      `)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    let button = new MessageButton()
      .setLabel("GitHub")
      .setStyle("url")
      .setURL("https://github.com/Ranger-4297")

      message.channel.send ({ embed: embed1, button })
    }
};