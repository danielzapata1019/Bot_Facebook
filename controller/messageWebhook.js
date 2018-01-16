'use strict'

const request = require('request')
const processMessage = require('../helpers/processMessage');

module.exports=(req,res)=>{
    var data=req.body;  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
  
      // Iterates over each entry - there may be multiple if batched
      data.entry.forEach(function(entry) {
        
        var pageId=entry.id;
        var timeOfEvent = entry.time;
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);
      });
  
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }

  };

