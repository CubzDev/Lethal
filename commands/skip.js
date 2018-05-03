const Discord = require('discord.js');
const economy = require('discord-eco');
const moment = require('moment');
const parsems = require('parse-ms');
const fs = require('fs')
const ms = require('ms');
const ytdl = require('ytdl-core');
const queue = new Map();

const client = new Discord.Client();
const modRole = 'Administrator';
const memberRole = 'Member';
const user = 'User';
const Ambassador = 'Ambassador';
const commands = 'Ambassador';
const dev = 'Developer';

module.exports.run = async (client, message, args) => { 
	const serverQueue = queue.get(message.guild.id);
 	if (!serverQueue) {
    	message.channel.send("There is nothing that I can skip!");
    if (!message.member.voiceChannel) return message.channel.send("You are not in a voice channel, so you cannot stop the music!")
   		serverQueue.connection.dispatcher.end();
    return undefined;
	}

	function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

const dispatcher = serverQueue.connection.playStream(ytdl(songs.url))
      .on("end", () => {
        console.log("Song ended!")
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error =>  console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	}
}
module.exports.help = {
	name: "COMMAND"
}