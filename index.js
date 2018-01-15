'use strict';

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser');
 
const app=express();
const PORT= process.env.PORT || 3000;
// Sets server port and logs message on success

const server = app.listen(PORT, () => {
    console.log('Express server listening on port %d', server.address().port);
});