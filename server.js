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

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});