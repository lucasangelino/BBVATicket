const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pending = [];
    this.assinged = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  // get top 3
  get top13() {
    return this.assinged.slice(0, 13);
  }

  createTicket = () => {
    const ticket = new Ticket(this.nextNumber);
    this.pending.push(ticket);
    return ticket;
  };

  assignTicket = (agent, desk) => {
    if (!agent) {
      throw new Error("Agent not found");
    }
    if (this.pending.length === 0) return null;

    const nextTicket = this.pending.shift();
    nextTicket.agent = agent;
    nextTicket.desk = desk;
    this.assinged.unshift(nextTicket);

    return nextTicket;
  };
}

module.exports = TicketList;
