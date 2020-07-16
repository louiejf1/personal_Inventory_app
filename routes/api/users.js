const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please enter valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        //console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // See if user exists
            let user = await User.findOne({ email: email });
            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'User already exists' }] });
            }
            // Get users gravatar
            const avatar = gravatar.url(email, {
                s: '200', //size
                r: 'pg', //rating
                d: 'mm', //default
            });

            user = new User({
                name,
                email,
                avatar,
                password,
            });

            // Encrypt password using bcript
            const salt = await bcrypt.genSalt(10); //10 rounds per documentation

            user.password = await bcrypt.hash(password, salt); //hash changes pw to encrypt

            await user.save(); //await since its a promis instead of using .then

            //Return jsonwebtoken -- allows users to sign in right away after registering
            //res.send('User registered');
            const payload = {
                //payload is whats also used in jwt
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'), //pass in secret
                { expiresIn: 360000 },//session, since dev, added more time so wont keep expiring
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                });
        } catch (err) {
            console.error(err.message);
            res.status(500).set('Server error');
        }
    }
);

module.exports = router;