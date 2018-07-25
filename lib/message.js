module.exports = class Message {
    constructor(message) {
        this.when = new Date();
            if (message !=  undefined) {
                this.author = message.author || 'anonymous'
                this.body = message.body || ''
            } else {
                this.author = 'anonymous'
                this.body = ''
                }
            }
        }