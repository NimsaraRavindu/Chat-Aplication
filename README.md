Here is a complete `README.md` file for your project. It explains what the app does, how to set it up, and (most importantly) clearly states that the API key needs to be replaced.

You can copy and paste the text below into a file named `README.md` in your project's root directory.

-----

# Gemini AI Chat Application

This is a simple, responsive, single-page chat application. It features a clean UI built with Bootstrap and connects directly to the Google Gemini AI API. Users can type a message, which is sent to the `gemini-1.5-flash` model, and the AI's response is then rendered back into the chat window, complete with Markdown formatting.

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/22d31bb4-04e2-4697-b3bf-0e5b09bc4358" />


-----

## 🚀 Features

  * **Clean, Responsive UI:** Built with Bootstrap 5 for a modern look on all devices.
  * **Modern Chat Bubbles:** Messages are styled into "me" (right-aligned, blue) and "AI" (left-aligned, gray) bubbles.
  * **Direct AI Connection:** Uses the `fetch` API to send user input directly to the Google Gemini API.
  * **Markdown Rendering:** The AI's response is parsed using `markdown-it.js`, so it correctly displays bold text, lists, code blocks, and other formatting.
  * **Auto-Scrolling:** The chat window automatically scrolls to the bottom to show the latest message.

-----

## 🛠️ Technologies Used

  * **HTML5**
  * **CSS3** (`style.css`)
  * **Bootstrap 5.3** (for layout, components, and styling)
  * **JavaScript (ES6+)** (`app.js` for DOM manipulation and API calls)
  * **Google Gemini API** (for generative AI responses)
  * **markdown-it.js** (for rendering Markdown in the chat)

-----

## How to Run

This is a static website and requires no complex build process.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate to the folder:**
    ```bash
    cd your-repository-name
    ```
3.  **Configure Your API Key** (See the critical section below).
4.  **Open the file:**
    Simply open the `index.html` file in any modern web browser (like Chrome, Firefox, or Edge).

-----

## ⚠️ IMPORTANT: API Key Configuration

The Google AI API key included in this project's `app.js` file is for demonstration only. **It has been intentionally expired and will not work.**

To make this application function, you **must** replace it with your own valid Google AI API key.

### Steps to get your key:

1.  Go to the **[Google AI Studio](https://aistudio.google.com/app/apikey)**.

2.  Sign in and create a new API key.

3.  Open the `app.js` file in your code editor.

4.  Find the `fetch` call (around line 90):

    ```javascript
    // This key is EXPIRED and WILL NOT WORK
    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBnazpTD5d8LInP8Q886CMVgGc-igJBUWU", requestOptions)
    ```

5.  **Replace** the expired key (`AIzaSy...`) with your new API key:

    ```javascript
    // Replace YOUR_NEW_KEY_HERE with the key you just generated
    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_NEW_KEY_HERE", requestOptions)
    ```

> **Security Warning:** This method of placing the API key in the client-side JavaScript is fine for personal testing or development. **Never** do this for a public website. Your key will be stolen. For a production app, you must use a backend server (like Node.js or Python) to securely store your key and make the API call.
