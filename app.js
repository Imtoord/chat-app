const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const { fromatMessage } = require('./utils/messages')
const {
    getCurrentUser,
    userJoin,
    userLeave,
    getroomUsers
} = require('./utils/users')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


io.on('connection', socket => {

    // room
    socket.on('chatroom', ({ username, room }) => {
        
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        //send meggage to front this user
        socket.emit('message', fromatMessage(user.name, 'wellcom to chat👋'));

        // Broadcast when a user connect all usesr except this user
        socket.broadcast.to(user.room).emit("message", fromatMessage(user.name, " has joined the chat 👋"))

        // room info
        io.to(user.room).emit('roomUers',{
            users: getroomUsers(user.room),
            room: user.room
        })
    })



    // catch data forn form - listening 
    socket.on('chatmsg', chatmsg => {
        const user = getCurrentUser(socket.id)

        io.to(user.room).emit('message', fromatMessage(user.name, chatmsg))
    })

    // when user disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id) 
        // message for all users
        if(user){
            io.to(user.room).emit('message', fromatMessage(user.name, 'user left chat 🙋‍♂️'))
        }
    })

})


const port = process.env.PORT || 3001
server.listen(port, () => {
    console.log('server runing in port 3001')
})