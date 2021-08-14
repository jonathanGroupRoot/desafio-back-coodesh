const app = require("./app");


//Connection DB
require ("./database/index.js");


var cron = require("node-cron");

const { createUser } = require("./controllers/UserController.js");

cron.schedule('52 17 * * * ', () => {
 createUser()
},{ scheduled: true, timezone: "America/Sao_Paulo"});

app.listen(3000, () => {
    console.log("Server is running 3000");

});

module.exports = app;