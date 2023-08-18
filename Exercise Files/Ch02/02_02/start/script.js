// JavaScript Document

// create the game score
var myScore;  

// setup ad change the game score
init();
changeScore();

// function to initialize th game score in the game
 function init()
{
    myScore = 1000;
}

// function to change the score of the game
function changeScore()
{
    myScore = myScore + 100;
    console.log("player score: " + myScore);
}
