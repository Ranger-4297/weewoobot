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
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
  •
  <a href="#license">License</a>
  •
  <a href="#credits">Credits</a>
</p>

## About

Weewoo is an open source customizable Discord bot. The codebase also serves as a base framework to easily create Discord bots of all kinds.

If you liked this repository, feel free to leave a star ⭐ to help promote Weewoo!

## Features

**110+** commands and counting across **8** different categories!

  * **Administration:** A huge amount of settings to customize with commands like `setprefix`, `setwelcomemessage`, and `setverificationrole`
  * **Moderation:** Commands such as `warn`, `ban`, & `mute` to assist your moderation team
  * **Fun & Games:** Tons of fun commands like `trivia`, `meme`, `emojify`, and a variety of animal pic commands like `cat`, `dog`, and `fox`
  * **Information:** Commands like `userinfo` and `serverinfo` for general utility

  * **Color:** Change your Discord color with commands like `color`, `createcolor` and `randomcolor`
  * **Owner:** Owner specific commands like `eval` and `setstatus`
  * **Miscellaneous:** All other commands like `feedback` and `bugreport`

Weewoo also comes packed with a variety of features, such as:

  * **Auto role** assignment
  * Server **verification** via reactions
  * **Welcome messages** and **farewell messages**
  * **Logging** for mod commands and various events
  * A **starboard** -WIP
  * Per **command disabling**
  * And much more! There are over **30+** settings to tweak!


## Installation

You can add Weewpp to your server with [this](https://discord.com/api/oauth2/authorize?client_id=819584400035020860&permissions=8&scope=bot) link! Alternatively, you can clone this repo and host the bot yourself.

### Steps:
First off make sure [node.js](https://nodejs.org) & [git](https://git-scm.com) are installed
```
git clone https://github.com/Ranger-4297/Weewoo.git
```
After cloning, run:
```
npm install
```

You have to create a `config.json` file in order to run the bot (you can use the example file provided as a base). Your file should look something like this:
```
{
  "token": "your_token_here",
  "ownerId": [ "your_ID_here", ]
  "bugReportChannelId": "bug_report_channel_ID_here",
  "feedbackChannelId": "feedback_channel_ID_here",
  "serverLogId": "server_log_ID_here",
  "apiKeys": {
    "catApi": "your_API_key_here",
    "googleApi": "your_API_key_here"
  }
}
```
Visit the Discord [developer portal](https://discordapp.com/developers/applications/) to create an app and use the client token you are given for the `token` option. `ownerId` is your own Discord snowflake (ID). `bugReportChannelId`, `feedbackChannelId`, and `serverLogId` should be set to respective text channels on your own server. To get keys for supported APIs, vist:

  * [TheCatAPI](https://thecatapi.com/)
  * [Google APIs](https://console.developers.google.com/apis/) -Nide sote. You'll want the Youtube API V3

After your `config.json` file is built, you have enable Intents on your Discord [developer portal](https://discordapp.com/developers/applications/). You can find these intents under the "Bot" section, and there are two ticks you have to switch on. For more information on Gateway Intents, check out [this](https://discordjs.guide/popular-topics/intents.html#the-intents-bit-field-wrapper) link.

Final step. Go to the `botinfo.js` command (`src/commands/info/botinfo.js`) line `34:42` and change the snowflake to your own. (Needed due to the fact that this bot uses an array 7 has multiple (2) owners.)

Once done, feel free to launch Weewoo using the command `pm2 start app.js` or `node app.js`. If you need additional help setting up, join the [Weewoo Support Server](https://discord.gg/ekMQH384KC)!

**Important Note:** Do not use Heroku to host Weewpp! Weewoo uses SQLite as its database which backs up its data store on disk. Heroku clears its contents often, so your database will be wiped. Read more [here](https://devcenter.heroku.com/articles/sqlite3).

### Emojis

If you are **self-hosting** Weewoo, you may notice that the emojis for certain commands are not displaying. This is because Weewoo uses **custom emojis** for a variety of it's commands. These emojis will have to be added to your own server, and you will have to change the corresponding IDs in the `emojis.json` util if you would like to use them. Or, you can replace the emojis in `emojis.json` with ones you already have access to.


## To-do/planned

Weewoo is in a continuous state of development. New features/updates may come at any time. Some pending ideas are:

  * Music
  * Automod
  * Stream alerts
  * Custom tag/reaction system
  * Leveling
  * Advanced modlogs

## License

Released under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.

## Credits

* **Sebastian Battle** - *Initial work* - [github](https://github.com/sabattle)
* **Kyle Glaws** - [github](https://github.com/krglaws)
* **CommradeFido#5286** - *All art and graphics*
* **Red Discord Bot** - *Initial trivia* - [github](https://github.com/Cog-Creators/Red-DiscordBot/blob/V3/develop/README.md#join-the-community)
* **Threebow** - *Ideas and tutorials* - [github](https://github.com/Threebow)