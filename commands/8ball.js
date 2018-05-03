const Discord = require('discord.js');
const economy = require('discord-eco');
const moment = require('moment');
const parsems = require('parse-ms');
const fs = require('fs')
const ms = require('ms');

const client = new Discord.Client();
const modRole = 'Administrator';
const memberRole = 'Member';
const user = 'User';
const Ambassador = 'Ambassador';
const commands = 'Ambassador';
const dev = 'Developer';

module.exports.run = async (client, message, args) => {

	if (!message.member.roles.find("name", commands)) return message.channel.send('**You need the `' + commands + '` role to use this command...**');// Run if they dont have role...

      if(!args[0]) return message.reply("Please ask a question")
      let replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", " 	Concentrate and ask again", "Outlook not so good", "Better not tell you now", "Signs point to yes", "Most likely", "Reply hazy, try again"];

      let result = Math.floor((Math.random() * replies.length));
      let question = args.slice(0).join(" ");
      let ballembed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor(0xD4AF37)
      .addField(":8ball:Question", question)
      .addField(":8ball:Answer", replies[result]);
      message.channel.send(ballembed)

}

module.exports.help = {
	name: "8ball"
}
