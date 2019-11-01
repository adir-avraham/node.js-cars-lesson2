const express = require('express');
const api = express()
const port = 2000;

const cars = require('./cars.json')

const wrtie = require('./wrtieTofile')


api.listen(port, (err)=>{
    if (err) console.log(err.message);
    console.log(`API is listening to port: ${port}`);
})


api.get('/cars', (req, res, next)=> {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();  
    const seconds = d.getSeconds();
    const time = `Time: ${hours}:${minutes}:${seconds}`
    const url = `  URL: ${req.protocol}://${req.get('host')}${req.originalUrl}`
    wrtie.writeToFile("log.txt", time, url)
    return res.send(`Array of cars: ${JSON.stringify(cars)}`)
})

