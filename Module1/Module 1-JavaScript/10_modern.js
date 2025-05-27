const event = { name: "Dance Show", date: "2025-06-20" };
function showEvent({ name, date } = {}) {
  console.log(`${name} on ${date}`);
}
const newList = [...["A", "B", "C"]];
showEvent(event);