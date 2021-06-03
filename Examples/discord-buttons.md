#### Discord buttons
Discord buttons are a great way to add functions & games to yout discord bot, without the use of emeoji's!

For buttons's to work you first need absolutely need to require it in the main file (`app.js`)
To do this we change
```js
const client = new Client(config, { ws: { intents: intents } });
```
To
```js
const client = new Client(config, { ws: { intents: intents } });
require('discord-slider')(client)
require('discord-buttons');
```

As for an example when trying to use buttons
```js
const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class link extends Command {
  constructor(client) {
    super(client, {
      name: 'link',
      usage: 'link',
      description: 'Displays a link to Discord',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed1 = new MessageEmbed()
      .setTitle('Link')
      .setDescription(oneLine`
        Imagine going to discord.com
      `)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('#2f3136');
    let button = new MessageButton()
      .setLabel("Link1")
      .setStyle("url")
      .setURL("https://discord.com")
      message.channel.send ({ embed: embed1, button })
    }
};
```
A structure like this won't allow us to use embeds. Because we'll get an error saying
```
C:\Users\capnb\Documents\Weewoobot\src\commands\info\buttontest.js:21
    let button = new MessageButton()
                 ^

ReferenceError: MessageButton is not defined
    at GitHubCommand.run (C:\Users\capnb\Documents\Weewoobot\src\commands\info\buttontest.js:21:18)
    at module.exports (C:\Users\capnb\Documents\Weewoobot\src\events\message.js:52:24)
    at Client.emit (node:events:365:28)
    at MessageCreateAction.handle (C:\Users\capnb\Documents\Weewoobot\node_modules\discord.js\src\client\actions\MessageCreate.js:31:14)
    at Object.module.exports [as MESSAGE_CREATE] (C:\Users\capnb\Documents\Weewoobot\node_modules\discord.js\src\client\websocket\handlers\MESSAGE_CREATE.js:4:32)
    at WebSocketManager.handlePacket (C:\Users\capnb\Documents\Weewoobot\node_modules\discord.js\src\client\websocket\WebSocketManager.js:384:31)
    at WebSocketShard.onPacket (C:\Users\capnb\Documents\Weewoobot\node_modules\discord.js\src\client\websocket\WebSocketShard.js:444:22)
    at WebSocketShard.onMessage (C:\Users\capnb\Documents\Weewoobot\node_modules\discord.js\src\client\websocket\WebSocketShard.js:301:10)
    at WebSocket.onMessage (C:\Users\capnb\Documents\Weewoobot\node_modules\ws\lib\event-target.js:132:16)
    at WebSocket.emit (node:events:365:28)
```
This is because we haven't declared it with a constant. To do this, all we need to do is add
```js
const { MessageButton } = require('discord-buttons')
```
Underneath 
```js
const Command = require('../Command.js');
```

You can find proper documentation for discord buttons [here](https://www.npmjs.com/package/discord-buttons) and [here](https://discord-buttons.js.org)

## Examples
Examples for buttons I've used can be found below:

- Repository command
```js
const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons')

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'repository',
      aliases: ['repo'],
      usage: 'repository',
      description: 'Displays the link to the bot\'s GitHub repository.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed1 = new MessageEmbed()
      .setTitle('Repository Link')
      .setDescription("Please support me by starring & following me, feel free to contribute to any projects I own, run and contribute to!")
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    let button = new MessageButton()
      .setLabel("Repository")
      .setStyle("url")
      .setURL("https://github.com/Ranger-4297/Weewoo")
      message.channel.send ({ embed: embed1, button })
    }
};
```

- Multiple buttons
```js
const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine, stripIndent } = require('common-tags');
const disbut = require('discord-buttons')

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['commands', 'h'],
      usage: 'help',
      type: client.types.INFO,
      examples: ['help']
    });
  }
  run(message) {

    const embed1 = new MessageEmbed()
    .setColor("#2f3136")
    .setTitle("Test embed")

      let button = new disbut.MessageButton()
      .setStyle('url') //default: blurple
      .setLabel('Invite me') //default: NO_LABEL_PROVIDED
      .setURL('https://discord.com/api/oauth2/authorize?client_id=819584400035020860&permissions=8&scope=bot')
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support server')
      .setURL('https://discord.gg/ekMQH384KC')
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Repository')
      .setURL('https://github.com/Ranger-4297/Weewoo')
      message.channel.send({
        embed: embed1,
        buttons: [
        button, button2, button3
        ]
    });
  }
}
```
