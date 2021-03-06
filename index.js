const express = require('express');
const app = express();

/**
 * Import Routes
 */
const authRoute = require('./routes/auth');

/**
 * Route Middlewares
 */
app.use('api/user', authRoute);

/**
 * Start server
 */
app.listen(3000, () => console.log('Up and running!'));