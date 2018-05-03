const Discord = require('discord.js');
const economy = require('discord-eco');
const parsems = require('parse-ms');

module.exports.run = async (client, message, args) => {

	if(!message.member.hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send('**You need the role `' + modRole + '` to use this command...**'); // Run if they dont have role...

        // Check if they defined an amount
        if (!args[0]) return message.channel.send(`**You need to define an amount.**`);

        // args[0] is a number
        if (isNaN(args[0])) return message.channel.send(`**The amount has to be a number.**`);

        let defineduser = message.mentions.users.first() || message.author;

        economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => {
            message.channel.send(`**User defined had ${args[0]} added/subtracted from their account.**`);
        });


}

module.exports.help = {
	name: "add"
}