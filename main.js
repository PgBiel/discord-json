const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", (message) => {
	if(message.content.toUpperCase().includes("JSON")) {
		const reactions = ["💯", "🇯", "🇸", "🇴", "🇳", "👌"];

		function react() {
			if(reactions.length === 0) { return; }
			message.react(reactions[0])
			.then(() => {
				reactions.shift();
				react();
			})
			.catch((err) => {
				console.error("ERROR REACTING FeelsBadMan");
			});
		}
		react();
	}
});

bot.login(config.token);