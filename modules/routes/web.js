const express = require('express');
const router = express.Router();

// Controllers
const userController = require(`${config.path.controller}/user`);
const contactController = require(`${config.path.controller}/contact`);


router.post('/contact', contactController.contactPost);
router.put('/account', userController.ensureAuthenticated, userController.accountPut);
router.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
router.post('/signup', userController.signupPost);
router.post('/login', userController.loginPost);
router.post('/forgot', userController.forgotPost);
router.post('/reset/:token', userController.resetPost);
router.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
router.post('/auth/facebook', userController.authFacebook);
router.get('/auth/facebook/callback', userController.authFacebookCallback);
router.post('/auth/google', userController.authGoogle);
router.get('/auth/google/callback', userController.authGoogleCallback);
router.post('/auth/github', userController.authGithub);
router.get('/auth/github/callback', userController.authGithubCallback);

module.exports = router;