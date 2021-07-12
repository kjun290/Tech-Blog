const router = require('express').Router();
const{User} = require('../../models');

router.post('/',(req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })

    .then(dbUserData => {
        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            req.json(dbUserData);
        })
    })
    .catch(err => {
        console.log (err);
        res.status(500).json(err);
    })
});

router.post('/login', (req,res) => {
    User.findone({
        where: {
            username:req.body.username
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({message: 'NO USER FOUND'});
            return;
        }
        const validPW = dbUserData.checkPassword(req.body.password);
        if(!validPW) {
            res.status(400).json({message:'INVALID PASSWORD'});
            return;
        }
        req.session.save(() => { 
            req.session.userId = dbUserData.id;
            req.session.username - dbUserData.username;
            req.session.loggedIn = true;
            res.json({user: dbUserData, message: 'YOU ARE LOGGED IN'})
        })
    })
});

router.post('/logout', (req, res) => {
    User.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'NO USER FOUND'});
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;