const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

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
    const embed = new MessageEmbed()
      .setTitle('GitHub Link')
      .setDescription(oneLine`
        Click [here](https://github.com/Ranger-4297) to to visit my GitHub account!
        Please support me by starring following me, and feel free to contribute to any projects!
      `)
      .addField('Other Links',
      '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=819584400035020860&permissions=8&scope=bot) | ' +
      '[Support Server](https://discord.gg/ekMQH384KC)'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
