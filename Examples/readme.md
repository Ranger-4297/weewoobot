<h1 align="center">
  <br>
  <a href="https://github.com/Ranger-4297/Weewoo"><img src="https://cdn.discordapp.com/avatars/819584400035020860/2f99eb14c9fd0fd0650d731648041b35.png"></a>
  <br>
  Weewoo Discord
  <br>
</h1>

<h3 align=center>A fully customizable bot built with <a href=https://github.com/discordjs/discord.js>discord.js</a></h3>


<div align=center>

  <a href="https://discord.gg/ekMQH384KC">
    <img src="https://discordapp.com/api/guilds/784132355325558824/widget.png?style=shield" alt="shield.png">
  </a>

  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.3.1-blue.svg?logo=npm" alt="shield.png">
  </a>

  <a href="https://github.com/Ranger-4297/weewoobot/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-GNU%20GPL%20v3-green" alt="shield.png">
  </a>

</div>

<p align="center">
  <a href="#about">About</a>
  •
  <a href="#examples">Examples</a>
  •
  <a href="#license">License</a>
  •
  <a href="#credits">Credits</a>
</p>

## About

Here you can find examples on code snippets where the official sites don't make it understandable.
If you liked this repository, feel free to leave a star ⭐ to help promote Weewoo!

## Examples

### Before we begin
If you plan to use [discord buttons](https://www.npmjs.com/package/discord-buttons) and [discord sliders](https://www.npmjs.com/package/discord-slider)
On `app.js` make sure to change 
```js
const client = new Client(config, { ws: { intents: intents } });
```
To
```js
const client = new Client(config, { ws: { intents: intents } });
require('discord-slider')(client)
require('discord-buttons');
```

**Embeds** [Embeds](https://github.com/Ranger-4297/weewoobot/blob/main/Examples/embeds.md)  
**Buttons** [Discord-buttons](https://github.com/Ranger-4297/weewoobot/blob/main/Examples/discord-buttons.md)
**Sliders** [Discord-sliders](https://github.com/Ranger-4297/weewoobot/blob/main/Examples/discord-sliders.md)
---

## License

Released under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.

## Credits

* **Sebastian Battle** - *Initial work* - [github](https://github.com/sabattle)
* **Kyle Glaws** - [github](https://github.com/krglaws)
* **CommradeFido#5286** - *All art and graphics*
* **Red Discord Bot** - *Initial trivia* - [github](https://github.com/Cog-Creators/Red-DiscordBot/blob/V3/develop/README.md#join-the-community)
* **Threebow** - *Ideas and tutorials* - [github](https://github.com/Threebow)
