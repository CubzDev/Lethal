const Discord = require('discord.js');
const economy = require('discord-eco');
const moment = require('moment');
const parsems = require('parse-ms');
const fs = require('fs')
const ms = require('ms');
let cooldown = new Set();
let cdseconds = 1800;

const client = new Discord.Client();
const modRole = 'Administrator';
const memberRole = 'Member';
const user = 'User';
const Ambassador = 'Ambassador';
const commands = 'Ambassador';
const dev = 'Developer';

module.exports.run = async (client, message, args) => {

	if(cooldown.has(message.author.id)) {
        message.delete();
        return message.reply(":warning: **You have to wait 30 minutes before you can play again!.** :warning:")
      }
      if(!message.member.hasPermission("CREATE_INSTANT_INVITE")){
        cooldown.add(message.author.id);
      }

      if (!message.member.roles.find("name", commands)) return message.channel.send('**You need the `' + commands + '` role to use this command...**');

      economy.fetchBalance(message.author.id + message.guild.id).then((i) => {
        if (i.money < 10)  {
          message.channel.send('**You need atleast 10 tokens to play!**');
          return;
        } else {
          economy.updateBalance(message.author.id + message.guild.id, -10);

          let slots = ["🍎", "🍆", "🍇", "🍌", "🍒", "🍓", "🍈", "🌽", "🌶️", "🥒", "🍄", "🍉", "🍑", "🍍", "🥝", "🍊", "🍅"];

          let result1 = Math.floor((Math.random() * slots.length));
          let result3 = Math.floor((Math.random() * slots.length));
          let result2 = Math.floor((Math.random() * slots.length));

          const embed = new Discord.RichEmbed()
          .setTitle('🎰 Slots 🎰')
          .addField('Result:', slots[result1] + slots[result2] + slots[result3])
          .setColor(0xD4AF37)
          .setTimestamp()
          message.channel.send({ embed })

          if (slots[result1] == "🍌" && slots[result2] == slots[result1] && slots[result3] == slots[result1]) {
            economy.updateBalance(message.author.id + message.guild.id, parseInt(80));
            const embed = new Discord.RichEmbed()
            .setTitle('**♣️ You won the jackpot! ♣️**')
            .setColor(0xD4AF37)
            .setTimestamp()
            message.channel.send({ embed })
            return;
          }

          if (slots[result1] === slots[result2] && slots[result3] === slots[result1]) {
            economy.updateBalance(message.author.id + message.guild.id, parseInt(40));
            const embed = new Discord.RichEmbed()
            .setTitle('**🎇 You won 4 tokens 🎇**')
            .setColor(0xD4AF37)
            .setTimestamp()
            message.channel.send({ embed })
            return;
          }

          if (slots[result1] === slots[result2] || slots[result2] === slots[result3]) {
            economy.updateBalance(message.author.id + message.guild.id, parseInt(20));
            const embed = new Discord.RichEmbed()
            .setTitle('**✔️ You win ✔️**')
            .setColor(0xD4AF37)
            .setTimestamp()
            message.channel.send({ embed })
            return;
          }
          if (slots[result1] !== slots[result2] || slots[result2] !== slots[result3]) {
            const embed = new Discord.RichEmbed()
            .setTitle('**⛔ You lost ⛔**')
            .setColor(0xD4AF37)
            .setTimestamp()
            message.channel.send({ embed })
          }
        }
      });
    }

module.exports.help = {
	name: "slots"
}