document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have a button with the id "simulateBtn"
    const simulateBtn = document.getElementById("simulateBtn");

    simulateBtn.addEventListener('click', function() {
        // Logic for simulating a win for a team
        let teamNames = ['India', 'Pakistan', 'Sri Lanka', 'Australia', 'South Africa', 'New Zealand', 'Afghanistan', 'England', 'Netherlands', 'Bangladesh']; // Replace with actual team names
        let winningTeam = teamNames[Math.floor(Math.random() * teamNames.length)];

        alert(winningTeam + " has won the match!");
    });
});
