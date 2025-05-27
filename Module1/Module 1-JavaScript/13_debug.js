function submitForm(data) {
  console.log("Submitting", data);
  try {
    if (!data.name) throw "Name required";
    console.log("Submitted successfully");
  } catch (e) {
    console.error("Error:", e);
  }
}
submitForm({});