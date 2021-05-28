module.exports  = class createInvite extends Command {
  constructor(client) {
    super(client, {
        name: "createinvite",
        aliases: ['crinv', 'createinv'],
        usage: 'createinvite <guildID>',
        description: "Creates an invite to a server and deletes it when you join.",
        type: client.types.OWNER,
        ownerOnly: true,
    });
  }
  async run(message, args) {
  }
};