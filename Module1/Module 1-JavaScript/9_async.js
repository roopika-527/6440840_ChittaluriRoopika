fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log("Fetched Events:", data))
  .catch(err => console.error("Error:", err));

async function fetchEvents() {
  console.log("Loading...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log("Async Events:", data);
}
fetchEvents();