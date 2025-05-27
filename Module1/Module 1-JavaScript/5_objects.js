function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};
const myEvent = new Event("Tech Talk", "2025-07-05", 25);
console.log(Object.entries(myEvent));