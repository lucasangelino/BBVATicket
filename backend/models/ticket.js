const crypto = require("crypto");

class Ticket {
  constructor(lastNumber) {
    this.id = crypto.randomUUID();
    this.number = lastNumber;
    this.desk = null;
    this.agent = null;
  }
}

module.exports = Ticket;
