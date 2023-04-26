const users = require("../database/usuarios.json");
const admUsers = require('../database/admUsers.json')

const { Clients, Admins } = require('../models')

const loginController = {
    verifyAccount: async (req, res) => {
        const { email, password } = req.body

        try {
            const user = await Clients.findOne({
                where:{
                    email: email.toLocaleLowerCase(),
                    passcode: password
                }
            })

            if (user == undefined) {
                return res.redirect('/sign-in');
            }
    
            req.session.logInVerified = true;
            req.session.username = user.first_name;
            res.redirect('/');

        } catch (error) {   
            console.error(error);
        }

    },
    verifyAdmAccount: async (req, res) => {
        let { email, password } = req.body

        try {
            const admUser = await Admins.findOne({
                where:{
                    email: email.toLocaleLowerCase(),
                    passcode: password
                }
            })

            if (admUser == undefined) {
                return res.redirect('/adm/login')
            };
    
            req.session.admLogVerifier = true;
            req.session.admName = admUser.first_name
    
            res.redirect('/adm')
        
        } catch (error) {
            console.error(error);
        }

      
    },
    logout: (req, res) => {

        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                // res.redirect('/sign-in?logOutMessage=You have been logged out successfully.');
                res.redirect('/sign-in?logOut=true');
            }
        });
    }

}

module.exports = loginController;