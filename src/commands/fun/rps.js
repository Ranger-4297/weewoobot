const Command = require('../Command.js');
const { MessageButton, MessageActionRow } = require('discord-buttons')

module.exports = class RockPaperScissorsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'rps',
      usage: 'rps',
      description: 'Play a game of rock–paper–scissors against Weewoo!',
      type: client.types.FUN,
      examples: ['rps rock']
    });
  }
  async run(message, args, Discord, settings, fs) {
      const Rock = new MessageButton()
          .setStyle('grey')
          .setEmoji('🪨')
          .setLabel("Rock")
          .setID('rock')
      const Paper = new MessageButton()
          .setStyle('grey')
          .setEmoji('📝')
          .setLabel("Paper")
          .setID('paper')
      const Scissors = new MessageButton()
          .setStyle('grey')
          .setEmoji('✂️')
          .setLabel("Scissors")
          .setID('scissors')
      let choices = ["rock", "paper", "scissors"]
      let index = Math.floor(Math.random() * 3)
      let ai = choices[index]
      let group1 = new MessageActionRow().addComponents([Rock, Paper, Scissors]);
      message.channel.send("Rock : <:rock:850115998341529600> - Paper : 📝 - Scissors : ✂️", {
          components: [group1]
      }).then((m) => {
          const filter = (button) => button.clicker.user.id === message.author.id;
          const collector = m.createButtonCollector(filter, {
              time: 30000
          })
          collector.on('collect', async (button) => {
              switch (ai) {
                  case "rock":
                          if (button.id == "paper") m.edit("You won, you had `paper` and I had `rock`!")
                          if (button.id == "scissors") m.edit("You lost, you had `scissors` and I had `rock`!")
                          if (button.id == "rock") m.edit("We tied, you had `rock` and I had `rock`!")
                      break;
                  case "paper":
                          if (button.id == "scissors") m.edit("You won, you had `scissors` and I had `paper`!")
                          if (button.id == "rock") m.edit("You lost, you had `rock` and I had `paper`!")
                          if (button.id == "paper") m.edit("We tied, you had `paper` and I had `paper`!")
                      break;
                  case "scissors":
                          if (button.id == "rock") m.edit("You won, you had `rock` and I had `scissors`!")
                          if (button.id == "paper") m.edit("You lost, you had `paper` and I had `scissors`!")
                          if (button.id == "scissors") m.edit("We tied, you had `scissors` and I had `scissors`!")
                      break
              }
          });
          collector.on('end', (collected) => {
              if (collected.size == 0) m.edit("Time window has passed I win, I had `"+ai+"`!")
          });
      })
  }
};