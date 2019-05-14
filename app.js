const express = require('express');
const path = require('path');


const app = express();



//All static allocations.
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/pics', express.static(path.join(__dirname, 'pics')));
app.use('/js', express.static(path.join(__dirname, 'js')));


// Routing for the home-page.
app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'home.html'));
});


// Routing for the match-making page.
app.get('/gamepage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'gamepage.html'));
});


//Landing page.
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
});



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Engines running on port ${PORT}`));