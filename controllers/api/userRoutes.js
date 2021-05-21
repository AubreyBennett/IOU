const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// AuthCheck
router.get('/authcheck', (req, res) => {
    console.log("We hit the route");
    res.send(req.session)
    // if (req.session.loggedIn) {
    //   res.status(200).json({loggedIn: true});
    // } else {
    //   res.status(401).json({loggedIn: false});
    // }
  });

//  find all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// find one user by id
router.get('/:id', async (req, res) => {

    try {
        const userData = await User.findByPk(req.params.id,{
            attributes: { exclude: ['password'] }
        });
        return res.status(200).json(userData);
    } catch (err) {
        return res.status(500).json(err);
    }
});



// CREATE new user
router.post('/', async (req, res) => {
    console.log('request here');
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.put('/:id', async (req, res) => {
//     try {
//         const userData = await User.update({
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             email: req.body.email,
//             password: req.body.password
//         },
//             {
//                 where: {
//                     id: req.params.id,
//                 }
//             },
//         );
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// Login 
router.post('/login', async (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    console.log("IM HEREEE");
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).json({
                message: "logged out!"
            });
        });
    } else {
        res.status(404).json({
            message: "You are not logged in!"
        });
    }
});
//   delete user
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


