/* eslint-disable no-undef */
const connectToMongo = require("./db");
connectToMongo();
const express = require('express')
const app = express()
const port = 5000;
const auth = require("./router/auth");
const notes = require("./router/notes")

app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/note', notes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

