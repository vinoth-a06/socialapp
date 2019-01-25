const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB config 
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose
    .connect(db)
    .then(() => console.log('success'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world!!!'));

// Routes 
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.port || 7000;

app.listen(port, () => console.log(`server is running on port ${port}`));