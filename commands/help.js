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

	const embed = new Discord.RichEmbed()
        .setTitle('J4F Commands: ')
        .setColor(0xD4AF37)
          .setDescription('**Prefix:** \`$\`')
          .addField('**Utility Commands:**', '\`$balance\`|\`$daily\`|\`$help\`| \`$pay\`|\`$poll\`| \`$report\`|\n\`$scrim\`|\`$battletag\`|\`$serverstats\`|\`$gamebeek\`|', true)
          .addField('**Fun Commands:**', '\`$8ball\`|\`$avatar\`|\`$cat\`|\`$coinflip\`|\`$define\`|\n\`$doggo\`|\`$joke\`|\`$ping\`|\`$poke\`|\`$slots\`|\n\`$slotshelp\`|\`$weather\`|\`$yesno\`|')
          .addField('**Admin Commands:**', '\`$add\`|\`$addrole\`|\`$ban\`|\`$clear\`|\`$kick\`|\n\`$tempmute\`|\`$warn\`|\`$warnlvl\`|')
          .setThumbnail(client.user.displayAvatarURL)
          .addField('For any help, join my discord channel!', '[\`Click here\`](https://discord.gg/SzGQW6p)', true)
          .setTimestamp();

        message.author.send({ embed });
        message.channel.send(':white_check_mark:** | I\'ve sent you al my commands.**')

}

module.exports.help = {
	name: "help"
}