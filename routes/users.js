const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/users_controller');
router.get('/profile' , passport.checkAuthentication , usersController.profile);

router.get('/sign-up' , usersController.signUp);
router.get('/sign-in' , usersController.signIn);

router.post('/create' , usersController.create);

//use passport as s middleware to aunthenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRediect : 'users/sign-in'},
), usersController.createSession);

router.get('/sign-out' , usersController.destroySession);

// router.get('/reset_password' , usersController.resetPassword);
router.post('/verify', passport.authenticate(
    'local',
    {failureRediect : 'users/sign-in'},
), usersController.verifyUser);
module.exports = router ;
