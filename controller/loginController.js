const users = require("../database/usuarios.json");
const admUsers = require('../database/admUsers.json')

const loginController = {
    verifyAccount:(req,res)=>{
        let {email,password} = req.body

        let user = users.find(u => u.email.toLocaleLowerCase() == email.toLocaleLowerCase() && u.password == password);

        if(user == undefined){
            return res.redirect('/sign-in');
        };

        req.session.logInVerified = true;
        req.session.username = user.firstName;
        res.redirect('/')
        
    },
    verifyAdmAccount:(req,res) =>{
        let {email,password} = req.body

        console.log(email)
        console.log(password)

        let admUser = admUsers.find(a => a.email == email && a.password == password)

        console.log(admUser)

        if(admUser == undefined){
            return res.redirect('/adm/login')
        };

        req.session.admLogVerifier = true;
        req.session.admName = admUser.nome

        res.redirect('/adm')
    },
    logout:(req,res) =>{
        
        req.session.destroy((err) => {
            if (err) {
              console.log(err);
            } else {
              // redirect the user to the sign-in page
              res.redirect('/sign-in');
            }
          });
    }

}

module.exports = loginController;