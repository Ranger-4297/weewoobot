const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports  = class staffapp extends Command {
  constructor(client) {
    super(client, {
        name: "staffapp",
        aliases: ['application', 'staffrole', 'modrole'],
        usage: 'staffapp',
        description: "Sends the staff application tag",
        type: client.types.TAGS,
    });
  }
  run(message) {
    const embed = new MessageEmbed()
    .setTitle("Tag: Staffapp")
    .setDescription("Dynamics staff applications are now permanently open!\nApplications are not accepted nor denied unless a new staff member is needed.\n\nOnce it has been decided that a new member is needed. Staff consultants & owners will go through all applicants and pick out the best. Then the remaining applications will be streamed to a staff voicechat for the rest of the team to decide.\n\nTo apply for our staff team, go to <#784132360399487066> or <#786941956004904991> and run the `-Apply` command.")
    .setTimestamp()
    .setColor('#2f3136');
    message.channel.send(embed)
  }
};