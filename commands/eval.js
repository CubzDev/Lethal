const Discord = require('discord.js');

const dev = 'Developer';

module.exports.run = async (client, message, args) => {

	if (args[0] === 'client.token') return message.channel.send(`\`\`\`x1\nDon't think so.\n\`\`\``)

	if(message.author.id !== '267744059865432064') return message.channel.send("**This is a developer command only!**")
	try {
		var code = args.join(" ");
		var evaled = eval(code);

		if (typeof evaled !== "string")
			evaled = require("util").inspect(evaled);

		message.channel.send(`\`\`\`${clean(evaled)}\`\`\``);
	} catch(err) {
		message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``)
	}
}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}


module.exports.help = {
	name: "eval"
}