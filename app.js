const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('Type || ^^help ', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', msg => {
  if (msg.content === '^^ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === '^^invite') {
    msg.reply('***Invite Link, Last Night Bot. https://discordapp.com/oauth2/authorize?client_id=451975364122509312&scope=bot&permissions=8***');
  }
});

client.on('message', message => {	
    if(message.content.startsWith('/mass')) {    
	if(message.author.id === "252492632402558976" ||
message.author.id === "252492632402558976"){        
       let args = message.content.split(" ").slice(1);         
	   var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
	if(!args[1]) {  }  
	if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', message => {
if (message.content === '^^help') {
    var embed = new Discord.RichEmbed()
//    .setTitle("") embed.setThumbnail(message.guild.iconURL)
       embed.addField('Info', 'Server de discord al fondatorului meu LN | - Sk3yToX.#9074 : https://discord.gg/KYEK8AC')
        .setColor('ff0000')
    message.channel.send(embed);
}
})

client.on('message', message => {
if (message.content === '^^serverinfo') {
    Promise.all([
        message.react('ðŸ˜Ž'),
        message.react('ðŸ¤‘'),
    ])
        .catch(() => console.error('One of the emojis failed to react.'))
    var embedserverinfo = new Discord.RichEmbed()
    .setTitle("")
    .setThumbnail(message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("Nume Server", message.guild.name)
        .addField("ID Server", message.guild.id)
        .addField("Nivel Securitate", message.guild.verificationLevel)
        .addField("Fondator", message.guild.owner)
        .addField("Data Fondarii server-ului", message.guild.createdAt)
        .addField("Membrii+Boti", message.guild.memberCount)
        .addField("Canale", message.guild.channels.size)
        .addField("eu-central", message.guild.region)
        .setColor('#026bff')
    message.channel.send(embedserverinfo);
}
})

client.on('message', message => {
if (message.content.toLowerCase().startsWith('^^ban')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.channel.send("`Scuze, dar nu ai acces la comanda de Ban.!`");
  if(!member) return message.channel.send("Ai uitat sa mentionezi cui vrei sa ii dai Ban!`");
  if(!member.kickable)  return message.channel.send("`Aceasta persoana nu poate fi data afara de pe server!`");
  if(!reason) return message.channel.send("`Ai uitat sa pui motivul pentru care ii dai Ban lui " + member.tag + " !`");
  member.ban(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Ban : ${error}**`));
  message.channel.send(`**${member.user.tag}** a fost banat de **${message.author.tag}** Motivul: ${reason}`);
}
})

client.on('message', message => {
  if (message.content === '^^avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.login(process.env.BOT_TOKEN);
