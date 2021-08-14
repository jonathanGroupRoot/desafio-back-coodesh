const User = require("../model/User.js");
const api = require("../api/api");

module.exports = {
    async getMessage(req, res) {
        try {
            return res.status(200).json({ Message: "REST Back-end Challenge 20201209 Running" });
        } catch (error) {
            return res.status(400).json({ Erro: error })
        }
    },
    async termsServices(req,res) {
        try {
            return res.status(200).json({ Message: "Termos de Serviço" });
        } catch (error) {
            return res.status(400).json({ Erro: error })
        }
    },  
    async listenUser(req, res) {
        try {
            const user = await User.findAndCountAll({ limit: 10 });
            return res.status(200).json({ User: user });
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async findUser(req, res) {
        try {
            const { userId } = req.params;

            const user = await User.findByPk(userId);

            return res.status(200).json({ User: user });
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async createUser(req, res,) {
        try {
            var { data } = await api("?results=25&noinfo");

            for (var i = 0; i < data.results.length; i++) {

                var user = await User.bulkCreate([{
                    gender: data.results[i].gender,
                    name: data.results[i].name,
                    location: data.results[i].location,
                    email: data.results[i].email,
                    login: data.results[i].login,
                    dob: data.results[i].dob,
                    registered: data.results[i].registered,
                    phone: data.results[i].phone,
                    cell: data.results[i].cell,
                    id_: data.results[i].id,
                    picture: data.results[i].picture,
                    nat: data.results[i].nat,
                    imported_at: new Date()
                }]);
            }
            if (res !== undefined) {
                return res.status(200).json({User: user})
            }

        } catch (error) {
            return res.json({ Erro: error });
        }
    },
    async deleteUser(req, res) {
        try {
            const { userId } = req.params;

            const user = (await User.findByPk(userId)).destroy();
            return res.status(200).json({ User: "Successfully deleted" });

        } catch (error) {
            return res.json({ Erro: error });
        }
    }
}



