module.exports = {
	helpCmdPerPage: 10, //- Number of commands per page of help command
	lyricsMaxResults: 5, //- Number of results for lyrics command (Do not touch this value if you don't know what you are doing)
	adminId: process.env.OWNER_ID || "UserId", //- Pulls from your OWNER_ID variable
	token: process.env.TOKEN || "", //- Matches your Railway 'TOKEN'
	clientId: process.env.CLIENT_ID || "", //- Matches your Railway 'CLIENT_ID'
	clientSecret: process.env.CLIENT_SECRET || "", //- Client Secret of the bot
	port: process.env.PORT || 4200, //- Railway provides the PORT automatically
	scopes: ["identify", "guilds", "applications.commands"], //- Discord OAuth2 Scopes
	inviteScopes: ["bot", "applications.commands"], // Invite link scopes
	serverDeafen: true, //- If you want bot to stay deafened
	defaultVolume: 100, //- Sets the default volume of the bot
	supportServer: "https://discord.gg/sbySMS7m3v", //- Support Server Link
	Issues: "https://github.com/SudhanPlayz/Discord-MusicBot/issues", //- Bug Report Link
	permissions: 277083450689, //- Bot Inviting Permissions
	disconnectTime: 30000, 
	twentyFourSeven: false, 
	autoQueue: false, 
	autoPause: true, 
	autoLeave: false, 
	debug: false, 
	cookieSecret: "CodingWithSudhan is epic", 
	website: "http://localhost:4200", 
	nodes: [
		{
			identifier: "Main Node", 
			host: process.env.LAVALINK_HOST || "", //- Matches your Railway 'LAVALINK_HOST'
			port: parseInt(process.env.LAVALINK_PORT) || 443, //- Matches 'LAVALINK_PORT' (usually 443 on Railway)
			password: process.env.LAVALINK_PASSWORD || "", //- Matches 'LAVALINK_PASSWORD'
			retryAmount: 200, 
			retryDelay: 40, 
			secure: process.env.LAVALINK_SECURE === "true" || true, //- Set to true for Railway HTTPS domains
		},
	],
	embedColor: "#2f3136", 
	presence: {
		status: "online", 
		activities: [
			{
				name: "Music", 
				type: "LISTENING", 
			},
		],
	},
	iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif", 
};
