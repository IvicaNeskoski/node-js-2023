

const blogpost = require('../models/blogpost')

const create = async (req, res )=> {
    try{
        
            let data= {
                ...req.body,
                publish_date: new Date()
            };
        
       await blogpost.getOne(req.params.id);
        return res.render('form_edit_post', {data});
    }catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}

const update = async (req, res )=> {
    try{
        
            let data= {
                ...req.body,
                publish_date: new Date()
            };
        
       await blogpost.updateOne(req.params.id, data);
       res.render('form_edit_post', {data});
    }catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    update,
    create
}