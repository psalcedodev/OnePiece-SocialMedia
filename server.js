const WebSocket = require("ws");
const express = require("express");
const cors = require("cors");

//!EXPRESS
const app = express();
app.use(express.static("public"));
app.use(cors);

const port = process.env.PORT || 8080;
var server = app.listen(port, () =>
    console.log(`Server listening on port: ${port}`)
);

//!WebSocket
const wss = new WebSocket.Server({ server: server });
var myClients = [];

wss.on("connection", function (wsclient) {
    myClients.push({
        client: wsclient,
        name: "Client",
        position: myClients.length + 1,
    });
    wsclient.on("message", function (message) {
        console.log("received: " + message);
        // @ts-ignore

        var data = JSON.parse(message);
        // let Post = new User.User({
        //     username: data.username,
        //     userPost: data.message,
        //     userPostTime: data.time,
        // });
        // Post.save().then(function (message) {});
        wss.clients.forEach(function (oneClient) {
            oneClient.send(JSON.stringify(data));
        });
        //* Broadcast to all clients, from server to each client
    });
    //wsclient.send("Welcome, I'm the server");
});
