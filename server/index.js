const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const settings = require('./database.json')
const querybuilder = require('node-querybuilder');

app.use(bodyParser.json());
app.use(cors());
global.db = new querybuilder(settings, 'mysql');

app.post('/addemail', async function (req, res) {
    if (req.body.EMAIL != undefined) {
        result = await existEmail(req.body.EMAIL);
        if (result.length > 0) {
            res.status(409).json({ "STATUS": "KO", "ERROR": "Un compte existe déjà avec cette adresse email" });
        } else {
            inputData = {
                "EMAIL": req.body.EMAIL,
            };
            try {
                result = await addEmail(inputData);
                res.status(200).json({ "STATUS": "OK" })
            } catch (err) {
                console.error(err);
                res.status(500).send('Erreur Interne');
            }
        }
    } else {
        console.log(req.body.EMAIL)
        res.status(422).json({ "STATUS": "KO", "ERROR": "Parametres post non définis" });
    }
})

function addEmail(userInfo) {
    return db.returning('ID_USER').insert('USER', userInfo);
}
    
function existEmail(email) {
    return db.select('*').where({ "EMAIL": email }).get('USER');
}


app.listen(8080);