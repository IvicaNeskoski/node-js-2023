const bcrypt = require('bcryptjs');
const user = require('../pkg/user');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try{
        // proveri dali password i password confirm se isti
        if(
            req.body.password.trim().lenght === 0 ||
            req.body.password !== req.body.password_confirm
        ) {
            return res.status(400).send('Bad Request');
        }

        //proveri dali emailot postoi vo db
        if(req.body.email.lenght !== 0) {
            let user = await user.getUserByEmail(req.body.email);
            if(user) {
                return res.status(409).send('User already exist');
            }

            req.body.password = bcrypt.hashSync(req.body.password);
            let newUser = await user.create(req.body);
            return res.status(201).send(newUser);
        } else{
            return res.status(400).send('Bad Request');
        }
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    };
};

const login = async (req, res) => {
    try{
        //  proverka dali korisnikot so dadeniot email postoi
        let user = await user.getUserByEmail(req.body.email);
        if( !user) { 
            return res.status(400).send('Bad Request. Bad login credentials');
        }

        // proveri dali passwordite soodvetstuvaat
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send('Bad Request. Bad login credentials');
        }

        // generiraj payload

        let payload = {
            uid: user._id,
            email: user.imail,
            full_name: user.full_name
        };

        let token = jwt.sign(payload, 'ice123');
        return res.status(200).send({token});
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};