// DELETE: Remove the first item in the list
document.getElementById("deleteBtn").addEventListener("click", () => {
  const list = document.getElementById("list");

  if (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  } else {
    alert("No more items to delete!");
  }
});
