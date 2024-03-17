const users = []

function userJoin(id, name, room) {
    const user = { id, name, room }
    users.push(user)
    return user;
}

function getCurrentUser(id) {
    return users.find(user => user.id == id)
}

function userLeave(id) {
    const index = users.findIndex(user => user.id == id)
    const user = users[index]
    if(index !== -1 ){
        return users.splice(index, 1)[0]
    }
}

function getroomUsers(room){
    return users.filter(user=> user.room == room)
}


module.exports = {
    getCurrentUser,
    userJoin,
    userLeave,
    getroomUsers
}