const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const disbut = require('discord-buttons')
const { MessageActionRow } = require('discord-buttons');

module.exports  = class restart extends Command {
  constructor(client) {
    super(client, {
        name: "restart",
        usage: 'restart',
        description: "restarts the bot",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
async run(message) {
    const questionembed = new MessageEmbed()
  .setDescription("Are you sure you want to restart the bot?")
  .setTimestamp()
  .setColor('#2f3136');

    const cancelembed = new MessageEmbed()
  .setDescription("Cancelling the restart")
  .setColor('2f3136')

    const restartembed = new MessageEmbed()
  .setDescription("Restarting now. Please wait...")
  .setColor('#2f3136');

  let button = new disbut.MessageButton()
  .setStyle('red')
  .setLabel('Cancel')
  .setID('cancel_Restart')
    let button2 = new disbut.MessageButton()
  .setStyle('green')
  .setLabel('Restart')
  .setID('confirm_Restart')
    let buttonRow = new MessageActionRow()
  .addComponent(button)
  .addComponent(button2)
      message.channel.send({ embed: questionembed, component: buttonRow });
    this.client.on('clickButton', async (button) => {
      button.defer()
      if (button.id === 'cancel_Restart') {
        button.message.edit({ embed: cancelembed })
      }
      if (button.id === 'confirm_Restart') {
        button.message.edit ({ embed: restartembed});
        console.log('Bot was restarted')
        setTimeout(function(){ 
        process.exit()
        }, 5000); //time in milliseconds
      }
    });
  }
};