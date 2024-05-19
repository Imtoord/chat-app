<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat App Documentation</title>
</head>
<body>
    <h1>Simple Chat App Documentation</h1>

    <h2>Overview</h2>
    <p>This project is a simple chat application built using Node.js, Express, and Socket.io. Users can join chat rooms, send messages, and see real-time updates when users join or leave the chat.</p>

    <h2>Setup Instructions</h2>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/your-username/simple-chat-app.git
cd simple-chat-app</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the server:</strong>
            <pre><code>npm start</code></pre>
            <p>By default, the server will run on port <code>3001</code>.</p>
        </li>
    </ol>

    <h2>Main File: <code>index.js</code></h2>
    <pre><code>/* Your main file code here */</code></pre>

    <h2>Utilities</h2>

    <h3>Messages: <code>utils/messages.js</code></h3>
    <pre><code>/* Your messages utility code here */</code></pre>

    <h3>Users: <code>utils/users.js</code></h3>
    <pre><code>/* Your users utility code here */</code></pre>

    <h2>Routes</h2>
    <h3>Chatroom Events</h3>
    <ul>
        <li><strong>Connection Event:</strong>
            <pre><code>socket.on('connection', socket => { ... })</code></pre>
            <p>Handles a new client connection.</p>
        </li>
        <li><strong>Join Chatroom:</strong>
            <pre><code>socket.on('chatroom', ({ username, room }) => { ... })</code></pre>
            <p>Handles a user joining a specific chat room.</p>
        </li>
        <li><strong>Send Message:</strong>
            <pre><code>socket.on('chatmsg', chatmsg => { ... })</code></pre>
            <p>Handles sending a message to the chat room.</p>
        </li>
        <li><strong>User Disconnect:</strong>
            <pre><code>socket.on('disconnect', () => { ... })</code></pre>
            <p>Handles a user disconnecting from the chat room.</p>
        </li>
    </ul>

    <h2>Public Directory</h2>
    <p>Place your client-side code (HTML, CSS, JS) inside the <code>public</code> directory to serve it statically.</p>
</body>
</html>
