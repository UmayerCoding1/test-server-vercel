const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('all is ok in the server')
});


app.get('/milon', (req,res)=> {
    res.send({
        name: 'milon',
        age: 24
    })
});

app.get('/umayer', (req,res)=> {
    res.send({
        name: 'Umayer',
        age: 19
    })
});
app.get('/akib', (req,res)=> {
    res.send({
        name: 'Akib',
        age: 21
    })
});



app.listen(port, () => {
    console.log(`PORT:${port}`);
    
})