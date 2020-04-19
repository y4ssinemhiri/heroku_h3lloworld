const PAGE_ACCESS_TOKEN = process.env.PAGE_ACESS_TOKEN;

app.get('/webhook', (req, res) => {
  
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

})

// Handles messages events
function handleMessage(sender_psid, received_message) {

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  
}
