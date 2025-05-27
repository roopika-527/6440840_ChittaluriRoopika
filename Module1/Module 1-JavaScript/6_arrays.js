let events = ["Music Fest", "Art Fair"];
events.push("Book Reading");
let musicEvents = events.filter(e => e.includes("Music"));
let cards = events.map(e => `Event: ${e}`);
console.log(cards);