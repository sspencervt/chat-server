module.exports = class Room {
    constructor(id, name) {
    
        if (id == undefined || id == '') {
            throw ('room id required') 
        } else if (id.match(/[A-Z]/g) || id.match(/\s/g) || id.match(/\W+/g)) {
            throw ('room id must contain only lowercase letters')
        } else {
            this.id = id
        } 
        if (!name) {
            this.name = id.charAt(0).toUpperCase() + id.substr(1)
        } else {
            this.name = name
        }
       this.messages = []
    } 

    sendMessage(message) {
        this.messages.push(message)
    }
    messageCount() {
        return this.messages.length;
    }
    messagesSince(time) {
        let messagesToReturn = []
        for (let message of this.messages) {
            if (message.when > time) {
                messagesToReturn.push(message)
            }
        }
        return messagesToReturn
    }
}