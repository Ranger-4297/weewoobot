const Command = require('../Command.js');

module.exports = class calculator extends Command {
  constructor(client) {
    super(client, {
      name: 'calculator',
      aliases: ['calc', 'cal'],
      usage: 'calculator',
      description: 'Gives you a culculator.',
      type: client.types.FUN
    });
  }
  async run(message) {
    const { Calculator } = require('weky')
    await Calculator(message)  
  }
};