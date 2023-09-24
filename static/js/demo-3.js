// Query Selectors
const btn = document.getElementById('send-msg');
const messageForm = document.getElementById('message-form');
const messageText = document.getElementById('message-text');
const lastMessage = document.getElementById('last-message');

const words = ["kill", "suicide", "die", "help", "depression"];

function greeting(){
  console.log("Hello World");
}

document.querySelector('#send-msg').addEventListener('click', (e) => {
  e.preventDefault();
  var message_text = messageText.value;
  messageForm.reset();

  check_words = words.some(word => message_text.includes(word));
  console.log(check_words)

  var newBubble = document.createElement('div');
  newBubble.innerHTML = '<div class="row justify-content-end"> <div class="message message-out">'+message_text+'</div> </div>'
  lastMessage.parentNode.appendChild(newBubble, lastMessage.nextSibling);

  if (check_words == false) {
      var responseBubble = document.createElement('div');
      responseBubble.innerHTML = '<div class="row justify-content-start"> <div class="message message-in">'+'what\'s on your mind?'+'</div> </div>'
      lastMessage.parentNode.appendChild(newBubble, lastMessage.nextSibling);
      setTimeout(()=> {
         lastMessage.parentNode.appendChild(responseBubble, lastMessage.nextSibling);},2000);
  }

  if (check_words == true) {
      alert_message = "Help is available. Speak with someone today. We have dialed Suicide Prevention Hotline (998) to connect you to someone."
      var notifyBubble = document.createElement('div');
      notifyBubble.innerHTML = '<div class="row justify-content-start"> <div class="message message-alert">'+alert_message+'</div> </div>'
      setTimeout(()=> {
         lastMessage.parentNode.appendChild(notifyBubble, lastMessage.nextSibling);},2500);

        let count = 1;
        setInterval(()=>{
            count++
            console.log(count);
            if (count > 6) location.replace('/call')

        },1000)
  }

});

// Functions
//function handleFormSubmit(e) {
//    e.preventDefault();
//    console.log(e);
//}
//
//// Event Listeners
//btn.addEventListener("click", handleFormSubmit());