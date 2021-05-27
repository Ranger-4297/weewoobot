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
run(message) {
    function send(invite, generated){
        const string = `Here's server link ;) (${generated ? 'new' : 'old'} invite)`;
        return msg.author.send(`${string}\n${invite}`)
        .catch(() => msg.channel.send(`${string}\n${invite}`));
    }
    const guildID = msg.args[0];
    if(!guildID) return bot.cmdError("No GuildID provided");
    const guild = bot.guilds.cache.get(guildID);
    if(!guild) return bot.cmdError(`${guildID} is not a valid guild`);
    if(!guild.me.permissions.has("CREATE_INSTANT_INVITE")) return bot.cmdError("Bot doesn't have the permissions on that guild");
    const invites = guild.fetchInvites().catch(()=>{});
    if(invites && invites.size) return send(invites.random(), false);
    const channel = guild.channels.cache.filter(c => c.type == "text").random();
    const invite =  channel.createInvite({maxUses: 1, maxAge: 150, unique: true});
    return send(invite, true);
  }
};