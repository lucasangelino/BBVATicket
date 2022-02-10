const TicketList = require("./ticketList");

class Sockets {
  constructor(io) {
    this.io = io;

    // Socket List instance
    this.ticketList = new TicketList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Nuevo cliente conectado");
      socket.on("get-ticket", (_, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });
    });
  }
}

module.exports = Sockets;
