// ============ ALERT ============
function handleAlert() {
  alert("Hello! This is an alert box.");
  console.log("User closed the alert box");
  document.getElementById("result").innerText = "✅ Alert was shown.";
}

// ============ CONFIRM ============
function handleConfirm() {
  let choice = confirm("Do you want to continue?");
  if (choice) {
    console.log("User clicked OK");
    document.getElementById("result").innerText = "👍 User clicked OK.";
  } else {
    console.log("User clicked Cancel");
    document.getElementById("result").innerText = "❌ User clicked Cancel.";
  }
}

// ============ PROMPT ============
function handlePrompt() {
  let name = prompt("Enter your name:");
  if (name !== null && name.trim() !== "") {
    console.log("User entered:", name);
    document.getElementById("result").innerText = "👋 Hello, " + name + " !";
  } else if (name === "") {
    document.getElementById("result").innerText = "⚠️ You entered an empty name.";
  } else {
    console.log("User cancelled the prompt");
    document.getElementById("result").innerText = "🚫 User cancelled input.";
  }
}
