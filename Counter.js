// Get the current date
let lastUpdate = new Date(localStorage.getItem("lastUpdate")) || new Date();
let startDays = parseInt(localStorage.getItem("startDays")) || 0;
let currentDays = startDays;

// Function to update the counter
function updateCounter() {
    let today = new Date();
    
    // Check if a day has passed
    if (today.toDateString() !== lastUpdate.toDateString()) {
        lastUpdate = today;
        currentDays++;
        localStorage.setItem("lastUpdate", lastUpdate);
        localStorage.setItem("currentDays", currentDays);
    }

    // Display the updated counter
    document.getElementById("counter").innerText = currentDays;
}

// Function to reset the counter
function resetCounter() {
    let newStartDays = document.getElementById("startDays").value || 0;
    currentDays = parseInt(newStartDays);
    localStorage.setItem("startDays", currentDays);
    localStorage.setItem("lastUpdate", new Date());
    updateCounter();
}

// Load the stored values when the page loads
window.onload = () => {
    currentDays = parseInt(localStorage.getItem("currentDays")) || startDays;
    updateCounter();
};
