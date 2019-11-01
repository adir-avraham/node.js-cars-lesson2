const express = require('express');
const api = express()
const port = 2000;

const cars = require('./cars.json')


api.listen(port, (err)=>{
    if (err) console.log(err.message);
    console.log(`API is listening to port: ${port}`);
})


api.get('/cars', (req, res, next)=> {

    return res.send(`Array of cars: ${JSON.stringify(cars)}`)
})