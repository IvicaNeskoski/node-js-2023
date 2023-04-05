
const express = require('express');
const auth = require('./handlers/auth');
const db = require('./pkg/db');
const { express = jwt}

db.init();

const api = express();
api.use(express.json());
api.use(jwt({
    algorithms: ['HS256'],
    secret: 'ice123'
}).unless({
    path: [
        '/api/v1/auth/sign-up',
        '/api/v1/auth/login',
        '/api/v1/auth/forgot-password',
        '/api/v1/auth/reset-password'
    ]
}));

api.post('/api/v1/auth/sign-up', auth.signUp);
api.post('/api/v1/auth/login', auth.login);
api.post('/api/v1/auth/forgot-password', auth.forgotPassowrd);
api.post('/api/v1/auth/reset-password', auth.resetPassowrd);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');

    }else {
        next();
    }

})

app.listen(8080, err => {
    if(err) return console.log(err);
    console.log('Server successfully started')
});

module.exports = {
    signUp,
    login
}