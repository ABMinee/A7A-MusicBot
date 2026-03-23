const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const LoadCommands = require("../util/loadCommands");

(async () => {
    // Directly pull from Railway Environment Variables
    const TOKEN = process.env.TOKEN;
    const CLIENT_ID = process.env.CLIENT_ID;

    if (!TOKEN || !CLIENT_ID) {
        console.error("Error: TOKEN or CLIENT_ID is missing in Railway Variables!");
        return;
    }

    const rest = new REST({ version: "9" }).setToken(TOKEN);
    const commands = await LoadCommands().then((cmds) => {
        return [].concat(cmds.slash).concat(cmds.context);
    });

    console.log("Deploying commands to global...");
    try {
        await rest.put(Routes.applicationCommands(CLIENT_ID), {
            body: commands,
        });
        console.log("Successfully deployed commands!");
    } catch (error) {
        console.error(error);
    }
})();
