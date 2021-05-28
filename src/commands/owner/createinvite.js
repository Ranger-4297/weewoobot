const { Message } = require('discord.js');
const Command = require('../Command.js');

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
    function send(invite, generated){
        const string = `Here's server link ;) (${generated ? 'new' : 'old'} invite)`;
        return message.author.send(`${string}\n${invite}`)
        .catch(() => message.channel.send(`${string}\n${invite}`));
    }
    const guildID = args[0];
    if(!guildID) return this.sendErrorMessage(message, 0, 'No GuildID provided');
    const guild = this.client.guilds.cache.get(guildID);
    if(!guild) return this.sendErrorMessage(message, 0, `${guildID} is not a valid guild`);
    if(!guild.me.permissions.has("CREATE_INSTANT_INVITE")) return this.sendErrorMessage(message, 0, 'Bot doesn\'t have the permissions on that guild');
    const invites = guild.fetchInvites().catch(()=>{});
    if(invites && invites.size) return send(invites.random(), false);
    const channel = guild.channels.cache.filter(c => c.type == "text").random();
    const invite = await channel.createInvite({maxUses: 1, maxAge: 150, unique: true});
    return send(invite, true);
  }
};