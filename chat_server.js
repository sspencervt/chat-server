//setup requirements
const http = require('http');
const mime = require('mime-types');
const port = process.env.PORT || 5000;

const Assistant = require('./lib/assistant')
// const Message = require('./lib/message.js')
const House = require('./lib/house.js')
const Room = require('./lib/room.js')


// let messages = [];
let chatHouse = new House()
// let messages = new Message()

http.createServer(handleRequest).listen(port);
console.log("listening on port:" + port);

function handleRequest(request, response) {
    console.log('request.url = ' + request.url);
    
    let assistant = new Assistant(request, response);
    let path = assistant.path;


    try {
        if (path === '/') {
            assistant.sendFile('index.html');
        } else {
            let [base, room] = path.slice(1).split('/')
            if (path === '/chat' && )
        }
        
        
        if (path === '/chat') {
            console.log('Parsing the POST');
            if (request.method === 'GET') {
                console.log('Parsing the GET')
                let data = JSON.stringify(messages);
                let type = mime.lookup('json');
                assistant.finishResponse(type, data);
            } else if (request.method === 'POST') {
                assistant.parsePostParams((params) => {
                    let message = {
                        name: 'Anonymous',
                        body: params.body,
                        when: new Date().toISOString()
                    }

                    chatHouse.sendMessageToRoom(room, message.body)

                    messages.push(message);
                    let data = JSON.stringify(messages);
                    let type = mime.lookup('json');
                    assistant.finishResponse(type, data);
                })
            } else {
                assistant.sendError(405, "Method not allowed")
            }
        } else {
            let fileName = path.slice(1);
            assistant.sendFile(fileName);
        }
    } catch (error) {
        assistant.sendError(404, "Error: " + error.toString());
    }
}
