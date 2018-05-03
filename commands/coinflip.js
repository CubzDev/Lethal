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

      const number = Math.floor(Math.random() * 2) + 1;
        if (number === 1) {
        const embed = new Discord.RichEmbed()
          .setTitle('**Coinflip result:**')
          .setImage('https://i.imgur.com/EzqKNjh.png')
          .setColor(0xD4AF37)
          return message.channel.send({ embed });
        } else {
          const embed = new Discord.RichEmbed()
            .setTitle('**Coinflip result:**')
            .setImage('https://i.imgur.com/G3REour.png')
            .setColor(0xD4AF37)
            return message.channel.send({ embed });
        }

}

module.exports.help = {
	name: "coinflip"
}