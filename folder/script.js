
document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  function updateTime() {
    timeElement.textContent = Date.now();
  }

  // Update on load
  updateTime();

  setInterval(updateTime, 1000); // Update every second
});
