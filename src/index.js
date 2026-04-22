document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded");

  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");

  // Safety check (prevents crashes if HTML is missing elements)
  if (!form || !taskList || !input) {
    console.error("Missing required DOM elements");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submitted");

    const taskValue = input.value.trim();
    console.log("Task:", taskValue);

    // validation
    if (taskValue === "") {
      console.log("Empty input ignored");
      return;
    }

    // create list item
    const li = document.createElement("li");
    li.textContent = taskValue;

    // add to DOM
    taskList.appendChild(li);

    // clear input
    input.value = "";
  });
});