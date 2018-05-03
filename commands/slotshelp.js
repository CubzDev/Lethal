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

	if (!message.member.roles.find("name", commands)) return message.channel.send('**You need the `' + commands + '` role to use this command...**');

      let Embed = new Discord.RichEmbed()
        .setTitle('Slots Help')
        .setColor(0xD4AF37)
        .addField('**2 in a row**', 'Win 20 tokens.', true)
        .addField('**3 In a row**', 'Win 40 tokens.', true)
        .addField(`**3 '🍌' in a row**`, "Jackpot | 80 tokens", true)
        .addField(`All the fruits in the game: `, `🍎, 🍆, 🍇, 🍌, 🍒, 🍓, 🍈, 🌽, 🌶️, 🥒, 🍄, 🍉, 🍑, 🍍, 🥝, 🍊, 🍅`, true)

      message.channel.send(Embed)

}

module.exports.help = {
	name: "slotshelp"
}