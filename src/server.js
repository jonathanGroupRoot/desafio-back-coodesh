const app = require("./app");


//Connection DB
require ("./database/index.js");


var cron = require("node-cron");

const { importUsers } = require("./controllers/UserController.js");

cron.schedule('00 20 * * * ', () => {
 importUsers()
},{ scheduled: true, timezone: "America/Sao_Paulo"});

app.listen(3000, () => {
    console.log("Server is running 3000");

});

module.exports = app;