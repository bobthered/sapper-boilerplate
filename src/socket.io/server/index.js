import socketio from 'socket.io';
import socket from './socket';

export default {
  init: server => {
    const io = socketio(server);

    // listen for socket.io connection
    io.on('connection', socket);
  },
};
