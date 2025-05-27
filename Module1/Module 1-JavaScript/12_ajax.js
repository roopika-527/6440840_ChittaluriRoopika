function registerUser(data) {
  console.log("Sending data...", data);
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" }
    })
    .then(res => res.json())
    .then(json => console.log("Success:", json))
    .catch(err => console.error("Error:", err));
  }, 1000);
}
registerUser({ name: "John", event: "Tech Talk" });