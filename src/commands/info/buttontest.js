const Command = require('../Command.js');
const disbut = require('discord-buttons')
const { MessageActionRow } = require('discord-buttons');


module.exports = class buttontest extends Command {
  constructor(client) {
    super(client, {
      name: 'buttontest',
      usage: 'buttontest',
      description: 'Tests a command',
      type: client.types.INFO,
      clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ADD_REACTIONS']
    });
  }
  async run(message, args) {
    let button = new disbut.MessageButton()
    .setStyle('red') //default: blurple
    .setLabel('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawwwwwwwwwwwwwwwwwwwwwwwwwwwwooooo') //default: NO_LABEL_PROVIDED
    .setID('click_to_function') //note: if you use the style "url" you must provide url using .setURL('https://example.com')

    let button2 = new disbut.MessageButton()
    .setStyle('url') //default: blurple
    .setLabel('My Second Button!') //default: NO_LABEL_PROVIDED
    .setURL('https://npmjs.com/discord-buttons') //note: if you use other style you must provide id using .setID('myid')

    let buttonRow = new MessageActionRow()
      .addComponent(button)
      .addComponent(button2)
    message.channel.send(
      'Hey, i am powered by https://npmjs.com/discord-buttons', 
      {component: buttonRow }
      );
  }
}