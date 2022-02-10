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
      socket.on("get-ticket", (_, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });
      socket.on(
        "get-next-ticket",
        ({ agente: agent, escritorio: desk }, callback) => {
          const newTicket = this.ticketList.assignTicket(agent, desk);
          callback(newTicket);
          this.io.emit("ticket-assigned", this.ticketList.top13);
        }
      );
    });
  }
}

module.exports = Sockets;
