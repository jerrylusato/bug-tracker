const router = require('express').Router();
const Bug = require('../models/bug');

router.post('/', async (req, res) => {
    console.log(req.body);
    let bug = new Bug({
        message: req.body.message,
        stack: req.body.stack, 
        dateOccured: Number(new Date())
    });

    bug = await bug.save();
    res.send(bug);
});

router.get('/', async (req, res) => {
    const bugs = await Bug.find();
    res.send(bugs);
});

router.delete('/:id', (req, res) => {
    
});


module.exports  = router;
