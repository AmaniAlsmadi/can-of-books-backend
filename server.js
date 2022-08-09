'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const handleBook = require( './components/BookModule' );

const app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Book');

app.get('/books', handleBook );

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`listening on ${PORT}`));