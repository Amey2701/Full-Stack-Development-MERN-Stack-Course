// CREATE: Add a new <li> to the list
document.getElementById("createBtn").addEventListener("click", () => {
  const list = document.getElementById("list");

  // Create new element
  const li = document.createElement("li");
  li.textContent = `New Item ${list.children.length + 1}`;

  // Append it
  list.appendChild(li);
});
