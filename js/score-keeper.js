"use strict";

const maxScore = document.getElementById("max-score");
const maxGoals = document.getElementById("max-goals");
const teamA = document.getElementById("teamA-score");
const teamB = document.getElementById("teamB-score");
const resetScore = document.getElementById("reset");
const teamAScored = document.getElementById("plus-A");
const teamBScored = document.getElementById("plus-B");

let scoreA = 0;
let scoreB = 0;
let winningScore = 25;

teamA.textContent = `Team A: ${scoreA}`;
teamB.textContent = `Team B: ${scoreB}`;
maxScore.textContent = `First to ${winningScore}`;
maxGoals.value = winningScore;

teamAScored.addEventListener("click", function(){
    if (scoreA < winningScore && scoreB < winningScore) {
        console.log("Team A scored!");
        scoreA++;
        teamA.textContent = `Team A: ${scoreA}`;
        if (scoreA === winningScore) {
            console.log("Team A wins!");
            teamAScored.disabled = true;
            teamBScored.disabled = true;
        }
    }
    
});

teamBScored.addEventListener("click", function(){
    if (scoreA < winningScore && scoreB < winningScore) {
        console.log("Team B scored!");
        scoreB++;
        teamB.textContent = `Team B: ${scoreB}`;
        if (scoreB === winningScore) {
            console.log("Team B wins!");
            teamAScored.disabled = true;
            teamBScored.disabled = true;
        }
    }
});

function resetGame() {
    scoreA = 0;
    scoreB = 0;
    teamA.textContent = `Team A: ${scoreA}`;
    teamB.textContent = `Team B: ${scoreB}`;
    teamAScored.disabled = false;
    teamBScored.disabled = false;
}

resetScore.addEventListener("click", function(){
    resetGame();
});

maxGoals.addEventListener("change", function(e){
    console.log("Max goals changed to:", e.target.value);
});
