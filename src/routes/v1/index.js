const express = require('express');
const app = new express()
const userRoutes = require('./user');
app.use('/user', userRoutes);

module.exports = app;