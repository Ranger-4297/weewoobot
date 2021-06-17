const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports  = class booster extends Command {
  constructor(client) {
    super(client, {
        name: "booster",
        aliases: ['serverboost', 'bost', 'boostrole'],
        usage: 'booster',
        description: "Sends the booster tag",
        type: client.types.TAGS,
    });
  }
  run(message) {
    const embed = new MessageEmbed()
    .setTitle("Tag: Staffapp")
    .setDescription("To get the <@&786969179239743518> role, you can boost our server!\nThis shows our staff team and owners we're doing a good job by supporting us\n\nYou also get prioritised suggestions in <#784132361594994701> and access to <#786715330784919581>!\n\nThe server booster role also gives access to the following permissions in <#784132359737442387>;\n`Attach files`\n`Embed link`")
    .setTimestamp()
    .setColor('#2f3136');
    message.channel.send(embed)
  }
};