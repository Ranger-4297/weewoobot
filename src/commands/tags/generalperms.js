const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports  = class generalperms extends Command {
  constructor(client) {
    super(client, {
        name: "generalperms",
        aliases: ['gen', 'roleperms', 'noperms'],
        usage: 'generalperms',
        description: "Sends the general tag",
        type: client.types.TAGS,
    });
  }
  run(message) {
    const embed = new MessageEmbed()
    .setTitle("Tag: Generalperms")
    .setDescription("To get the `Attach files` and `Embed link` permissions in <#784132359737442387>, you need one of the following roles;\n> <@&784132355459121201>\n> <@&786969179239743518>\n> Or one of our staff roles!\n\nTo get the <@&784132355459121201> role, go to either;\n> <#784132360399487066>\n> <#786941956004904991>\nAnd run `;Regular` or view our FaQ **other** page [here](https://discord.com/channels/784132355325558824/784132356457758722/814937201820958750)\n\nTo get the <@&786969179239743518> role, go to either;\n> <#784132360399487066>\n> <#786941956004904991>\nAnd run `;Booster`\n\nTo join our staff team, go to either;\n> <#784132360399487066>\n> <#786941956004904991>\nAnd run `;Staffapp` or `-apply`")
    .setTimestamp()
    .setColor('#2f3136');
    message.channel.send(embed)
  }
};