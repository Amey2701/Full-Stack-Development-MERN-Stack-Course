// READ: Show all items in console
document.getElementById("readBtn").addEventListener("click", () => {
  const items = document.querySelectorAll("#list li"); // static NodeList
  console.log("Current List Items:");
  items.forEach((li, index) => {
    console.log(`${index + 1}: ${li.textContent}`);
  });
});
