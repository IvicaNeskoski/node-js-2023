const author = require('../pkg/author');

const getAll = async (req, res) => {
    try{
        let data = await author.getAll();
        res.send(data).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try{
        let data = await author.getOne(req.params.id);
        res.send(data).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    getAll,
    getOne
};