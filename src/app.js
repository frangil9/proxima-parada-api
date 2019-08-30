const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const socketIo = require("socket.io");
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const travel = require('./travel');
const uploadRouter = require('./routes/upload-router');
const publicationRouter = require('./routes/publication-router');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/upload', uploadRouter);
app.use('/api/publications', publicationRouter);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log('socket connected', socket.id);

    socket.on('stop_current', number_stop => {
        const current = travel.find(stop => stop.number_stop === number_stop);
        const nexts_stops = travel.filter(stop => {
            return stop.number_stop >= number_stop;
        });
        const data = {
            current,
            nexts_stops
        };
        socket.emit('message', data);
    });
});

mongoose.connect(config.urlMongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Connection mongodb success'))
    .catch(err => console.log(`Error connection mongodb: ${err}`));

server.listen(config.port, () => {
    console.log(`Server running on port number: ${config.port}`);
});