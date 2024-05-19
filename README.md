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
