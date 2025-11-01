// ==============================
// Grab elements
// ==============================
const list = document.getElementById("list");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");

// ==============================
// CREATE: Add a new task
// ==============================
function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return; // Prevent empty input

  // Create <li> for task
  const li = document.createElement("li");
  li.textContent = taskText;

  // UPDATE: Toggle "done"
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // DELETE: Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Avoid marking done when deleting
    list.removeChild(li);
  });

  // Add delete button to <li>
  li.appendChild(delBtn);

  // Add <li> to list
  list.appendChild(li);

  // Clear input
  input.value = "";
}

// ==============================
// Event listeners
// ==============================
addBtn.addEventListener("click", addTask);

// Add task when pressing Enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// ==============================
// READ: Show tasks in console
// ==============================
showBtn.addEventListener("click", () => {
  const items = document.querySelectorAll("#list li");
  console.clear();
  console.log("Current tasks:");
  items.forEach((li, i) => {
    console.log(`${i + 1}. ${li.textContent.replace("❌", "").trim()}`);
  });
});
