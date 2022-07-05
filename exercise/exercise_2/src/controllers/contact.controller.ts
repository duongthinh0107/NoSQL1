const Contact = require('../models/contact.model');

module.exports = {
    render: async (req, res) => {
        let limit: number = 2;
        let currentPage = 1
        let offset = 0;
        if (req.query.page){
            currentPage = req.query.page
            offset = (currentPage - 1) * limit
        }
        const contacts = await Contact.find().lean().limit(limit).skip(offset).sort({date: -1});
        res.render('render', {contacts: contacts,currentPage: currentPage})
    },
    getAdd: async (req, res) => {
        res.render('create')
    },
    postAdd: async (req, res) => {
        const {name, address, email, phone} = req.body;
        console.log(req.body)
        const newUserData = {name, address, email, phone};
        const newUser = new Contact(newUserData);
        await newUser.save();
        res.redirect('/contact/')
    },
    getEdit: async (req, res) => {
        const data = await Contact.findOne({_id: req.params.id}).lean();
        res.render('edit', {contact: data})
    },
    postEdit: async (req, res) => {
        const {name, address, email, phone} = req.body;
        await Contact.findOneAndUpdate({_id: req.params.id}, {name, address, email, phone});
        res.redirect('/contact/');
    },
    delete: async (req, res) => {
        await Contact.findOneAndRemove({_id: req.params.id}).lean();
        res.redirect('/contact/')
    },
    getDetail:async  (req, res) => {
       const contact =  await Contact.findOne({_id: req.params.id})
        res.render('detail', {contact:contact})
    }
}