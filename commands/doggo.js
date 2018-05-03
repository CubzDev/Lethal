const Discord = require("discord.js");
const superagent = require('superagent');
let cooldown = new Set();
let cdseconds = 600;

module.exports.run = async (bot, message, args) => {
if(cooldown.has(message.author.id)) {
        message.delete();
        return message.reply(":warning: **You have to wait 10 minutes before you can use this command again!.** :warning:")
      }
      if(!message.member.hasPermission("ADMINISTRATOR")){
        cooldown.add(message.author.id);
      }

	
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setDescription('Doggo:dog:')
  .setColor('#9ed0ed')
  .setImage(body.url);
   message.channel.send(dogembed);
}

module.exports.help = {
  name: "doggo"
}