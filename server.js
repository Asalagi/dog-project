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
            success: false,
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

app.put('/dogs/:id', async (req, res) => {
    try {
        const dogId = req.params.id;
        const existingDog = await dog.getDogById(dogId);

        if(!existingDog) {
            return res.status(404).send('Dog not found');
        }

        const updatedDog = {
            name: req.body.name || existingDog.name,
            breed: req.body.breed || existingDog.breed,
            color: req.body.color || existingDog.color,
            sex: req.body.sex || existingDog.sex,
            birthday: req.body.birthday || existingDog.birthday,
        };

        const response = await dog.updateDogs(dogId, updatedDog);

        res.status(200).json({
            success: true,
            message: 'Dog has been updated',
            updatedDog: response,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Update failed',
            error: error.message,
        });
    }
});

app.delete('/dogs/:id', async (req, res) => {
    try {
        const dogId = req.params.id;
        const deletedDogs = await dog.deleteDogs(dogId);

        if(deletedDogs) {
            res.status(200).json({
                success: true,
                message: 'Dog has successfully been deleted',
                deletedDogs,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Dog not deleted',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error has happened when trying to delete this dog',
            error: error.message,
        });
    }
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});
