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