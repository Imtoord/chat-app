const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const leave_btn = document.querySelector('#leave-btn');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const msg = document.getElementById('msg');
const room_name = document.getElementById('room-name');
const usersList = document.getElementById('users');


const socket = io()

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
})


// send name and room to server
socket.emit("chatroom", { username, room })

// reseiving message from server
socket.on('message', msg => {
  outputmessage(msg)
  chatMessages.scrollTo = chatMessages.scrollHeight
})

// send message to server
chatForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const chatmsg = msg.value
  socket.emit('chatmsg', chatmsg)
  msg.value = ''
  msg.focus()
})

function outputmessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.user;
  p.innerHTML += `<span> : ${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  chatMessages.append(div)
}

socket.on('roomUers', ({ users, room }) => {
  room_name.innerHTML = room
  usersList.innerHTML = ''

  for (const user of users) {
    const li = document.createElement('li')
    li.innerHTML = user.name
    usersList.append(li);
  }
})

leave_btn.addEventListener('click', () => {
  console.log("object123");
  window.location = '../index.html';
})