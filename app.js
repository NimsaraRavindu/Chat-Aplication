// This variable and function were for a two-user chat.
// In the AI chat function below, the user is *always* "me"
// and the AI is "saman", so this dropdown is not currently used.
/*
let user = "me";

function selectChatUser() {
    user = document.getElementById('cmbUser').value;
}
*/

// This was the old function for user-to-user chat.
// It is overwritten by the new AI chat function below.
/*
function getText() {
    let text = document.getElementById('textBox').value;
    let chatContainer = document.getElementById('chatContainer');

    let newBubble = document.createElement('div');
    let bubbleClass = user === "me" ? "me-bubble" : "saman-bubble";
    newBubble.className = bubbleClass;
    newBubble.textContent = `${user}: ${text}`;

    chatContainer.appendChild(newBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
}
*/


// This is the active function that sends your message to the AI
function getText() {
   let userText = document.getElementById('textBox').value;

    // Don't send an empty message
    if (userText.trim() === "") {
        return;
    }

   let chatContainer = document.getElementById('chatContainer');

    // 1. Create the user's bubble (as "me")
   let newBubble = document.createElement('div');
   let bubbleClass = "me-bubble"; // User is always "me-bubble" (right side)
    
    // **FIX:** Added "chat-bubble" base class for correct styling
   newBubble.className = "chat-bubble " + bubbleClass; 
   newBubble.textContent = `${userText}`;
   chatContainer.appendChild(newBubble);

    // Clear the input box after sending
    document.getElementById('textBox').value = "";
  
    // Scroll to the bottom
   chatContainer.scrollTop = chatContainer.scrollHeight;
   
    // 2. Prepare the API request for the AI
   const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   
   const raw = JSON.stringify({
     "contents": [
       {
         "parts": [
           {
             "text": userText
           }
         ]
       }
     ]
   });
   
   const requestOptions = {
     method: "POST",
     headers: myHeaders,
     body: raw,
     redirect: "follow"
   };
   
    // 3. Send the request and get the AI response
   fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBnazpTD5d8LInP8Q886CMVgGc-iWU", requestOptions)
     .then((response) => response.json())//not text but json
     .then((result) => {
        // 4. Create the AI's bubble (as "saman")
      console.log(result.candidates[0].content.parts[0].text)
      let aiBubble = document.createElement('div');  
      let bubbleClass1 = "saman-bubble"; // This class aligns it to the left
        
        // **FIX:** Added "chat-bubble" base class for correct styling
      aiBubble.className = "chat-bubble " + bubbleClass1;

      var md = window.markdownit();
      let aiText = result.candidates[0].content.parts[0].text;
        
        // Render the AI's response as Markdown and put it in the bubble
      aiBubble.innerHTML = md.render(aiText);
      chatContainer.appendChild(aiBubble);

        // Scroll to the bottom again to show the new AI message
        chatContainer.scrollTop = chatContainer.scrollHeight;
   })
   .catch((error) => console.error(error));
}
