const mongoose = require('mongoose')

const Authors = mongoose.model(
    'author',
    {
        author_name: String,
        book_name: String,
        book_year: Date
    },
    'authors'
)

const getOne = async () => {
    return Authors.findOne({_id: id});
};

const getAll = async() => {
    return Authors.find({});
};

module.exports = {
    getAll,
    getOne
};