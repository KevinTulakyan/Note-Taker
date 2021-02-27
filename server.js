const express = require('express');
const fs = require('fs')
const path = require('path');
const testNotes = require('./db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(testNotes);
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});