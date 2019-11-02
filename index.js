const express = require('express');
const api = express();
const port = 5000;

const cars = require('./cars.json');

const wrtie = require('./wrtieTofile');

const read = require('./readFromFile');




api.listen(port, (err)=>{
    if (err) console.log(err.message);
    console.log(`API is listening to port: ${port}`);
})


api.get('/cars', (req, res)=> {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();  
    const seconds = d.getSeconds();
    const time = ` Time: ${hours}:${minutes}:${seconds} `;
    
    const url = ` URL: ${req.protocol}://${req.get('host')}${req.originalUrl} `;
    
    wrtie.writeToFile("log.txt", time, url);
    
    return res.send(`Array of cars: ${JSON.stringify(cars)}`);
})


api.get('/logs', (req, res)=>{
    const { mode } = req.query;
    switch (mode) {       
        
        case "file":
        return res.download("C:\\Adir\\Jonh Bryce\\Adir avraham\\06 - Node.js\\Lesson2\\Homework\\cars\\log.txt");
    
        case "content": 
        const c = read.readFromFile("log.txt")
        return res.send(c)
                       
        default:   
        return res.send("Error: mode should be 'file' or 'content'...")
            
    }
  
})


api.get('/cars/:Name', (req, res) =>{
  const selectedCars = cars.filter(car => car.Name.includes(req.params.Name))  
  if (!selectedCars || selectedCars === []) res.status(404).send("The car wasn't found")
 
  res.send(`Array of selected cars: ${JSON.stringify(selectedCars)}`)  
  

})