const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports  = class regular extends Command {
  constructor(client) {
    super(client, {
        name: "regular",
        aliases: ['reg'],
        usage: 'regular',
        description: "Sends the Regular tag",
        type: client.types.TAGS,
    });
  }
  run(message) {
    const embed = new MessageEmbed()
    .setTitle("Tag: Regular")
    .setDescription("The <@&784132355459121201> role is obtained by getting level **10** via <@!204255221017214977> leveling custom commands./nHaving this role shows the server that we have members who enjoy coming here and being a part of the community!\n\n> The current xp rate is;\n`Minimum XP` **=** `15`\n`Maximum XP` **=** `30`\n\n> The cooldown is\n`47` **seconds**\n\nThe Regular role gives you the following permission in <#784132359737442387>;\n`Attach files`\n`Embed link`\n\nAnd access to <#786715330784919581>")
    .setTimestamp()
    .setColor('#2f3136');
    message.channel.send(embed)
  }
};