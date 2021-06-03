#### Embeds
Embeds are a nice & unique way to send messages through Discord.
Take your basic structure for this bot
```js
const Command = require('../Command.js');

module.exports = class info extends Command {
  constructor(client) {
    super(client, {
      name: 'info',
      usage: 'info',
      description: 'Example command',
      type: client.types.INFO,
    });
  }
    run(message, args) {
    const embed = new MessageEmbed()
    .setTitle("Embed")
    .setDescription("Description")
    .setTimestamp()
    .setColor('#2f3136');
    message.channel.send(embed) 
  }
}
```
A structure like this won't allow us to use embeds. Because we'll get an error saying
```
C:\Users\capnb\Documents\Weewoobot\src\commands\info\info.js:26
    const embed = new MessageEmbed();
                  ^

ReferenceError: MessageEmbed is not defined
    at HelpCommand.run (C:\Users\capnb\Documents\Weewoobot\src\commands\info\info.js:26:19)
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
const { MessageEmbed } = require('discord.js');
```
Underneath 
```js
const Command = require('../Command.js');
```

A full list of embed objects can be found below:
```
	.setColor()
	.setTitle()
	.setURL()
	.setAuthor()
	.setDescription()
	.setThumbnail()
	.addFields(
		{},
		{},
		{},
		{},
	)
	.addField()
	.setImage()
	.setTimestamp()
	.setFooter()
```

# Embed limits
There are a few limits to be aware of while planning your embeds due to the API's limitations. Here is a quick reference you can come back to:

- Embed titles are limited to 256 characters
- Embed descriptions are limited to 2048 characters
- There can be up to 25 fields
- A field's name is limited to 256 characters and its value to 1024 characters
- The footer text is limited to 2048 characters
- The author name is limited to 256 characters
- The sum of all characters in an embed structure must not exceed 6000 characters
- A bot can have one embed per message
- A webhook can have ten embeds per message

# Embed tips

Embeds spport a wide range of things, including Discord markdown and hyperlinks!
Few eamples would be:
`**bold**`
`[text](https://yourlinkcom)`
`__Underlined__`