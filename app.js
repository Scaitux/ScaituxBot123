const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('Type || ^^help ', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
