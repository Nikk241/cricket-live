document.addEventListener("DOMContentLoaded", () => {
    const alertButton = document.getElementById("live-updates-button");
    const updatesContainer = document.getElementById("updates-container");
  
    alertButton.addEventListener("click", () => {
      // Clear previous updates
      updatesContainer.innerHTML = "";
  
      // Create dummy entries
      const updates = [
        "Match 1: Team A vs Team B - Score: 150/5 (20 overs)",
        "Match 2: Team C vs Team D - Score: 170/8 (20 overs)",
        "Match 3: Team E vs Team F - Score: 140 all out (19 overs)"
      ];
  
      // Append each update to the updates container
      updates.forEach(update => {
        const updateElement = document.createElement("p");
        updateElement.textContent = update;
        updatesContainer.appendChild(updateElement);
      });
    });
  });
  