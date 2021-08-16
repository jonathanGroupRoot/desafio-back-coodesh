const User = require("../model/User.js");
const api = require("../api/api");
const jsonwebtoken = require("jsonwebtoken");
const { api_key } = require("../key/key.json");

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
            return res.status(200).json({ Message: "Terms of service" });
        } catch (error) {
            return res.status(400).json({ Erro: error })
        }
    },  
    async generateToken(req,res) {
        try {
            const token = await jsonwebtoken.sign({}, api_key, {
                expiresIn: "60s"
            });
            return res.status(200).json({Token: token});

        }catch(error) {
            return res.status(400).json({ Erro: error });
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
    async importUsers(req, res,) {
        try {
            var { data } = await api("?results=3&noinfo");

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
    async createUser(req,res) {
        try {
            const { gender, name, location, email, login, dob, registered, phone, cell, id_, picture, nat } = req.body;

            const user = await User.create({ gender, name, location, email, login, dob, registered, phone, cell, id_, picture, nat, imported_at: new Date() });
            return res.status(200).json({User: user})

        }catch(error) {
            console.log(error)
            return res.status(400).json({ Erro: error });
        }
    },
    async updateUser(req,res) {
        try {
            const { userId } = req.params;
            const { gender, name, location, email, login, dob, registered, phone, cell, id_, picture, nat } = req.body;


            const user = await User.findByPk(userId);
            user.update({ gender, name, location, email, login, dob, registered, phone, cell, id_, picture, nat });

            return res.status(200).json({User: "Successfully updated"});
        } catch(error) {
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



