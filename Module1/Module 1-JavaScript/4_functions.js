function addEvent(name) {
  console.log(`Event ${name} added.`);
}
function registerUser(event) {
  console.log(`User registered for ${event}`);
}
function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}
function registrationCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = registrationCounter();
console.log(counter());