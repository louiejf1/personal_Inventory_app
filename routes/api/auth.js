const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require('../../controllers/middleware/auth')
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User')

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => { //res.send('Auth route'));
    try {
        const user = await (User.findById(req.user.id)).select('-password') //-password removes pw 
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});
// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
    '/',
    [
        check('email', 'Please enter valid email').isEmail(),
        check(
            'password',
            'Please is required'
        ).exists(),
    ],
    async (req, res) => {
        //console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // See if user exists
            let user = await User.findOne({ email: email });
            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] });

            }


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
