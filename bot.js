const Discord = require('discord.js')
const bot = new Discord.Client({
        intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES,
            Discord.Intents.FLAGS.GUILD_VOICE_STATES,
            Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
        ]
    })
bot.on('messageCreate', message=>{
  if(message.content == 'test') {
    message.reply('เทส')
  }
})
bot.login('token')