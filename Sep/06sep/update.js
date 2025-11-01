let colorIndex = 0;
const colors = ["highlight-yellow", "highlight-red", "highlight-black"];

// UPDATE: Cycle colors on list items
document.getElementById("updateBtn").addEventListener("click", () => {
  const items = document.querySelectorAll("#list li");

  if (items.length === 0) {
    alert("No items to update!");
    return;
  }

  // Remove old highlight classes
  items.forEach(li => li.classList.remove(...colors));

  // Add a new highlight class to the current item
  items[colorIndex % items.length].classList.add(colors[colorIndex % colors.length]);

  colorIndex++;
});
