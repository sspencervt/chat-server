let Room = require('./room.js')
let Message = require('./message.js')

module.exports = class House {
    constructor() {
        this.allRooms = [];
        
    }

    roomWithId(roomId) {
        let roomFound = this.allRooms.find((room) => {
            return room.id === roomId
        })
        if (roomFound) {
            return roomFound
        } else {
            let newRoom = new Room(roomId);
            this.allRooms.push(newRoom);
            return newRoom;
        } 
        
    }
    
    allRoomIds() {
        let roomIdList = [];
        for (var element in this.allRooms) {
            roomIdList.push(this.allRooms[element].id)
        }
        return roomIdList
    }
    sendMessageToRoom(roomId, message) {
        let newMessage = new Message(message)
        this.roomWithId(roomId).messages.push(newMessage)
        
    }
}