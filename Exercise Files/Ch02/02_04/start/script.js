// JavaScript Document

// Create the game score
var myScore;

// Setup and change the game score
init(1000);
changeScore(100);
changeScore(50);
changeScore(-250);
changeScore(125);

// Function to initialize the game score in the game
function init(newScore)
{
    console.log("setting the score to " + newScore)
    myScore = newScore;
    displayScore();
}

// Function to change the score of the game
function changeScore(scoreDelta)
{
    console.log("Changing the score by " + scoreDelta);
    myScore = myScore + scoreDelta;
    displayScore();
    
}

function displayScore()
{
    console.log("Player score: " + myScore);
}