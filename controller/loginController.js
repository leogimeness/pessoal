const users = require("../database/users.json");

const loginController = {
    verifyAccount:(req,res)=>{
        let email = req.body.email;
        let password = req.body.password;

        let user = users.find(u => u.email.toLocaleLowerCase() == email.toLocaleLowerCase() && u.password == password);

        if(user == undefined){
            return res.redirect('/sign-in');
        };

        req.session.logInVerified = true;
        req.session.username = user.name;
        res.redirect('/')
        
    }

}

module.exports = loginController;