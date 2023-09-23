const mongoose = require('mongoose')
const express = require('express');
const app = express()
require('dotenv').config()

// listen for request
// this willbe moved to env before deployment and this database user account will be deleted bdefore the repo is made public
const connection = mongoose.connect("mongodb+srv://sam:123@cluster0.n2f3tna.mongodb.net/?retryWrites=true&w=majority")
   .then((result) => { 
      console.log('Connected')
   })
   .catch((err) => console.log(err))

module.exports = mongoose