'use strict';

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser');

/*const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');*/

const app = express();
const PORT = process.env.PORT || 3000;
// Sets server port and logs message on success

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended : true }));

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === 'say_hello') {
    res.send(req.query['hub.challenge'])
  } else {
    res.send('Access denied!!');
  }
});

app.post('/webhook', (req, res) => {
  var data = req.body;
  if (data.object == 'page') {
    data.entry.forEach(pageEntry => {
      pageEntry.messaging.forEach(messagingEvent => {
        if (messagingEvent.message) {
          console.log(messagingEvent);
          receiveMessage(messagingEvent);
        }

      })
    });
    res.sendStatus(200);
  }
});

function receiveMessage(event) {
  var senderId = event.sender.id;
  var messageText = event.message.text;
  console.log(event);
  console.log(senderId);
  console.log(messageText);
};

//app.get('/webhook', verificationController); //ruta
//app.post('/webhook', messageWebhookController);

const server = app.listen(PORT, () => {
  console.log('Express server listening on port %d', server.address().port);
});


const APP_TOKEN = 'EAABZC9Ls6FtYBAKiA1jjSj2mdSreFoEGjHX7wSNEXJpyOChdDyqbp8QJBtQTeFwyIyqgpnTOydAhfsJrg6aCBycmf1QjWvSagM0ZA75D5ihmf0XpvZB81odQyBNGppPMUTY3ZAPezTAZBCFab9Ia0v7HyIVwYhSdnqCNSdSQ7ewZDZD';



