const PAGE_ACCESS_TOKEN = process.env.PAGE_ACESS_TOKEN;

app.get('/webhook', (req, res) => {
  
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
  
  
})

function handleMessage(sender_psid, received_message) {

  let response;

  // Check if the message contains text
  if (received_message.text) {    

    // Create the payload for a basic text message
    response = {
      "text": `You sent the message: "${received_message.text}". Now send me an image!`
    }
  }  
  
  // Sends the response message
  callSendAPI(sender_psid, response);    
}


// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}



function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }
}
