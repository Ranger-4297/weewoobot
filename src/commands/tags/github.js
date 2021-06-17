const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const disbut = require('discord-buttons')

module.exports  = class github extends Command {
  constructor(client) {
    super(client, {
        name: "github",
        aliases: ['gh'],
        usage: 'github',
        description: "Sends the GitHub tag",
        type: client.types.TAGS,
    });
  }
  run(message) {
    const embed = new MessageEmbed()
    .setTitle("Tag: GitHub")
    .setDescription("In this server, we use a range of different custom features and logs\nAswell as our own bot, whose open sourced.\n\nSome of these feature have been shared to the public including our <#787957898872487956> system!\n\nIf you'd like to take a look at them, you can find them at below.\n\nIf you have any questions, features, updates or bugs with them, make a `pull request` or `issue` and we'll take a look!")
    .setTimestamp()
    .setColor('#2f3136');
    let button1 = new disbut.MessageButton()
      .setLabel("GitHub")
      .setStyle("url")
      .setURL("https://github.com/Ranger-4297")
    let button2 = new disbut.MessageButton()
      .setLabel("Weewoo source")
      .setStyle("url")
      .setURL("https://github.com/Ranger-4297/Weewoo")
    let button3 = new disbut.MessageButton()
      .setLabel("YAGODB CCs")
      .setStyle("url")
      .setURL("https://github.com/Ranger-4297/Dynamic-YAGPDB-ccs")
      message.channel.send({
        embed: embed,
        buttons: [
        button1, button2, button3
        ]
    });
  }
};