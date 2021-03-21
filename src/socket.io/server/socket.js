// libraries
import * as events from './events';

let socket;

export default obj => {
  if (socket === undefined) socket = obj;

  // log connection
  console.log('socket.io - connection');

  Object.keys(events).forEach(event => {
    socket.on(event, events[event]);
  });
};
