const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const pkg = require(__basedir + '/package.json');
const { owner } = require('../../utils/emojis.json');
const { oneLine, stripIndent } = require('common-tags');
const disbut = require('discord-buttons')
const { MessageActionRow } = require('discord-buttons');

module.exports = class BotInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ['bot', 'bi'],
      usage: 'botinfo',
      description: 'Fetches Weewoo\'s bot information.',
      type: client.types.INFO
    });
  }
  run(message) {
    const prefix = message.client.db.settings.selectPrefix.pluck().get(message.guild.id);
    const tech = stripIndent`
      Version     :: ${pkg.version}
      Library     :: Discord.js v12.3.1
      Environment :: Node.js v12.16.3
      Database    :: SQLite
    `;
    const embed = new MessageEmbed()
      .setTitle('Weewoo\'s Bot Information')
      .setDescription(oneLine`
        Weewoo is a fully customizable Discord bot that is constantly growing,
        Originally, started as a selfhost fun-project, has become more of a full-time activity.
      `)
      .setColor('#2f3136')
      .addField('Prefix', `\`${prefix}\``, true)
      .addField('Client ID', `\`${message.client.user.id}\``, true)
      .addField(`Developer ${owner}`, '`Rhyker#1394`', true)
      .addField('Tech', `\`\`\`asciidoc\n${tech}\`\`\``)
      .addField('**Links**', '_ _');
      let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite me')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=819584400035020860&permissions=8&scope=bot')
      let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support server')
        .setURL('https://discord.gg/ekMQH384KC')
      let button3 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Repository')
        .setURL('https://github.com/Ranger-4297/Weewoo')
      let buttonRow = new MessageActionRow()
        .addComponent(button)
        .addComponent(button2)
        .addComponent(button3)
      message.channel.send({
        embed: embed,
        component: buttonRow
        });
  }
};
