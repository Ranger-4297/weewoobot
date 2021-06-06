const Command = require('../Command.js');
const { ChaosWords } = require("weky")
var randomWords = require('random-words');

module.exports = class Chaoswords extends Command {
    constructor(client) {
      super(client, {
        name: 'chaoswords',
        aliases: ['chaos'],
        usage: 'chaoswords',
        description: 'Stuff',
        type: client.types.FUN
      });
    }
    async run(message) {
  const words = randomWords(2) //generating 2 words
      await new ChaosWords({
    message: message,
    maxTries: 4, //max number  of user's tries (ends when reach limit)
    charGenerated: 20, //length of sentence (small length might throw error)
    words: words, //words (array) => ['word']
    embedTitle: 'Chaos words!', //understable
    embedFooter: 'Find the words in the sentence!',
    embedColor: 'RANDOM'
    }).start()
    //Errors or questions => https://discord.gg/2EZSpxNB5z (Official weky npm support)
  }
}