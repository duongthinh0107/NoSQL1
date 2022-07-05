const User = require('../models/users.model');

module.exports = {
    render: async (req, res) => {
        const users = await User.find().lean().sort({date: -1});
        res.render('render', {users: users})
    },
    getAdd: async (req, res) => {
        res.render('create')
    },
    postAdd: async (req, res) => {
        const {name, number, email, phone} = req.body;
        console.log(req.body)
        const newUserData = {name, number, email, phone};
        const newUser = new User(newUserData);
        await newUser.save();
        res.redirect('/user/')
    },
    getEdit: async (req, res) => {
        const data = await User.findOne({_id:req.params.id}).lean();
        res.render('edit', {user:data})
    },
    postEdit: async (req, res) => {
        const {name,number,email,phone} = req.body;
        await User.findOneAndUpdate({_id:req.params.id},{name,number,email,phone});
        res.redirect('/user/');
    },
    delete: async (req, res) => {
        await User.findOneAndRemove({_id: req.params.id}).lean();
        res.redirect('/user/')
    }
}