const moment = require('moment')

const fromatMessage = (user, text)=>{
    return {
        user,
        text,
        time: moment().format('h:mm:a')
    }
}

module.exports = {
    fromatMessage
}