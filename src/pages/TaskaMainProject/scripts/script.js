// Sidebar
const nav = document.getElementById("nav");
// Logo
const logo = document.getElementById("logo");

// Header
const header = document.getElementById("header");
// Folders
const folders = document.getElementById("folders");
// Search-Box
const input_box = document.getElementById("input_box");
// Input
const main_input = document.getElementById("main_input");

// Main
const main = document.getElementById("main");

// Daily
const dailyPart = document.getElementById("dailyPart");
const daily = document.getElementById("daily");

// Weekly
const weeklyPart = document.getElementById("weeklyPart");
const weekly = document.getElementById("weekly");

// Monthly
const monthyPart = document.getElementById("monthyPart");
const monthly = document.getElementById("monthly");

// Tabs
const personalTab = document.getElementById("personal");
const schoolTab = document.getElementById("school");
const workTab = document.getElementById("work");
const longTermTab = document.getElementById("Long-term");

// Containers
const tasksContainer = document.querySelector(".tasks");
const schoolContainer = document.querySelector(".tasks_school");
const tasksWork = document.getElementById("tasks_work");
const tasksLongTerm = document.getElementById("tasks_long_term");

// School
schoolTab.addEventListener("click", function () {
  tasksContainer.style.display = "none";
  tasksWork.style.display = "none";
  tasksLongTerm.style.display = "none";
  schoolContainer.style.display = "flex";
});

// Personal
personalTab.addEventListener("click", function () {
  schoolContainer.style.display = "none";
  tasksWork.style.display = "none";
  tasksLongTerm.style.display = "none";
  tasksContainer.style.display = "flex";
});

// Work
workTab.addEventListener("click", function () {
  schoolContainer.style.display = "none";
  tasksContainer.style.display = "none";
  tasksLongTerm.style.display = "none";
  tasksWork.style.display = "flex";
});

// Long-Term
longTermTab.addEventListener("click", function () {
  schoolContainer.style.display = "none";
  tasksContainer.style.display = "none";
  tasksWork.style.display = "none";
  tasksLongTerm.style.display = "flex";
});
