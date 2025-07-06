const express = require('express');
const app = express();
const cors = require('cors');


app.get('/', (req,res)=>{
    res.send("Welcome to the backend developed by SATYA");
})

app,get('/jokes',cors(),  (req,res)=>{
    const jokes = [
        {
            id: '1',
            title: 'Doctor Joke',
            content: 'Why did the doctor carry a red pen? In case he needed to draw blood!'
        },
        {
            id: '2',
            title: 'Math Joke',
            content: 'Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else!'
        },
        {
            id: '3',
            title: 'Programming Joke',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
            id: '4',
            title: 'Science Joke',
            content: 'Why can’t you trust an atom? Because they make up everything!'
        },
        {
            id: '5',
            title: 'History Joke',
            content: 'Why was the history book so sad? Because it had too many dates!'
        }
    ]
    res.send(jokes);
})


app.get('/user_information', (req, res)=>{
    const userInformation = [
        {
            id: '1',
            name : 'Satya',
            age: 25,
            email: 'satyatechgeek@gmail.com',
            address: 'Yello Living, Bangalore, India'
        },
        {
            id: '2',
            name : 'John',
            age: 30,
            email: 'john.doe@example.com',
            address: '123 Elm St, Springfield, USA'
        },
        {
            id: '3',
            name : 'Alice',
            age: 28,
            email: 'alice@example.com',
            address: '456 Oak St, Metropolis, USA'
        }

        
    ]
    res.send(userInformation);
})



app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running on port 3000");
})