const events = [
  { name: "Yoga Class", date: "2025-06-10", seats: 0 },
  { name: "Cooking Class", date: "2025-07-01", seats: 10 }
];

events.forEach(event => {
  if (event.date >= "2025-06-01" && event.seats > 0) {
    console.log(`Available: ${event.name}`);
  }
});

try {
  let register = (seats) => {
    if (seats <= 0) throw "Event full";
    return "Registered";
  };
  console.log(register(0));
} catch (e) {
  console.error("Registration failed:", e);
}