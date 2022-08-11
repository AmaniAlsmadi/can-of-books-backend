'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const handleBook = require( './components/BookModule' );
const BookModel =require ('./bookModel');
const addNewBook =require('./components/addNewbook');
const deleteBook = require('./components/deletebook');
const updateBook = require('./components/updatebook');
const findBooksById = require('./components/findbooksById')

const app = express();
app.use(cors());

app.get('/',(req,res)=>{res.send('home')})
app.get('/books', handleBook );
app.post('/books', addNewBook);
app.delete('/books/:id', deleteBook);
app.put('/books/:id', updateBook);
app.get('/books/:id', findBooksById);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amani:amani@cluster0.2dg17x6.mongodb.net/?retryWrites=true&w=majority',{ useUnifiedTopology: true });

const PORT = process.env.PORT  ;
app.listen(PORT, () => console.log(`listening on ${PORT}`));