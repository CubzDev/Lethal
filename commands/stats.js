const Discord = require("discord.js");
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
setInterval(function() {
    upSecs = upSecs + 1
    if (upSecs >= 60) {
        upSecs = 0
        upMins = upMins + 1
    }
    if (upMins >= 60) {
        upMins = 0
        upHours = upHours + 1
    }
    if (upHours >= 24) {
        upHours = 0
        upDays = upDays + 1
    }
}, 1000)
module.exports.run = async (client, message, args) => {
    message.channel.send(`= STATISTICS =
• Bot        | ${client.user.tag}
• Developer  | Cubz#2954
• Mem Usage  | ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     | ${upDays} Day(s), ${upHours} Hour(s), ${upMins} Minute(s) and ${upSecs} Second(s)
• Users      | ${client.users.size.toLocaleString()}
• Servers    | ${client.guilds.size.toLocaleString()}
• Channels   | ${client.channels.size.toLocaleString()}`, {code: "asciidoc"});
}

module.exports.help = {
    name: "stats"
}