const mongoose = require('mongoose');

const init = () => {
     'mongodb+srv://ivica:xpIgLCGoRLUM14s6@javascriptakademija.st1rkky.mongodb.net/Movies?retryWrites=true&w=majority';
     mongoose.connect(dsn);
}

mongoose.connect(dsn);

mongoose.connect(init);