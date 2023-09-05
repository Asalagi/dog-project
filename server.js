require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dog = require('./model/dog-model');
const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get('/dogs', async (req, res) => {
    try {
        const response = await dog.getDogs();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/register', async (req, res) => {
    try {
        const response = await dog.createDogs(req.body)
        res.status(200).json({
            success: true,
            message: 'Registration successful',
            member: response,
        });
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: 'Registration failed',
            error: error.message,
        });
    };
});

app.get('/dogs/:id', async (req, res) => {
    try {
        const dogId = req.params.id;
        const response = await dog.getDogById(dogId);

        if(response) {
            res.status(200).send(response);
        } else {
            res.status(404).send('Dog not found');
        }
    } catch (error) {
        res.status(500).send(error)
    }
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});