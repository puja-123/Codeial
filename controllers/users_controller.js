const User = require('../models/user');
module.exports.profile = function(req,res)
{
    return res.render('user_profile' , {
        title : "Profile Page"
    } );
}
//rendering the sign up page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated())
    {
       return res.redirect('/users/profile');
    }

    return res.render('user_sign_up' , {
        title : "Codial | Sign Up "
    })
}
//rendering the sign in page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated())
    {
       return res.redirect('/users/profile');
    }
    return res.render('user_sign_in' , {
        title : "Codial | Sign In "
    })
}

//get the sign up data
module.exports.create = function(req,res)
{
    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('back');
    } 
    User.findOne({email : req.body.email} , function(err ,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body ,function(err, user){
                if(err){
                console.log('error in creating user while signing up');console.log('error in finding user in signing up');
                return;
            }
            return res.redirect('/users/sign-in');
        });
        } else{
            return res.redirect('back');
        }
    })
}
//get the sign in data
module.exports.createSession = function(req,res)
{
    return res.redirect('/');
}
    //get the sign out
module.exports.destroySession = function(req,res)
{
    req.logout();
    return res.redirect('/');
}
// module.exports.resetPassword = function(req,res)
// {
//     if(req.isAuthenticated())
//     {
//        return res.redirect('/users/profile');
//     }
//     return res.render('reset_password' , {
//         title : "Codial | reset password "
//     })
// }
module.exports.verifyUser = function(req,res)
{
    return res.render('user_password_reset' , {
        title : "Codial | reset password "
    })
}