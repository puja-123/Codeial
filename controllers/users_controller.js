module.exports.profile = function(req,res)
{
    return res.render('user_profile' , {
        title : "Profile Page"
    } );
}
module.exports.signUp = function(req,res){
    return res.render('user_sign_up' , {
        title : "Codial | Sign Up "
    })
}
//rendering the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in' , {
        title : "Codial | Sign In "
    })
}

//get the sign up data
module.exports.create = function(req,res)
{
    //TODO LATER
}
//get the sign in data
module.exports.createSession = function(req,res)
{
    //TODO LATER
}