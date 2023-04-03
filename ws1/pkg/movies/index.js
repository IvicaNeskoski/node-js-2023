const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movie',
    {
        
        title: String,
        realese_date: Date
    },
    'movies'
);

const getAll = async () => {
    return Movie.find({});
}

const getOne = async (id) => {
    return Movie.findOne({_id: id});
}

const create = async (req, res) => {
    let movie = new Movie(data);
    return movie.save();
}

const updateOne = async (id, data) => {
    return Movie.updateOne({_id: id}, data);
}

const remove = async (id) => {
    return Movie.deleteOne({_id: id});
}

module.exports = {
    getAll,
    getOne,
    create,
    updateOne,
    remove
};