// JavaScript Document

var knowJavascript = true;
console.log("The variable knowJavascript is equal to " + knowJavascript + " and is a " + typeof knowJavascript);

if (knowJavascript)
{
    console.log("I know javascript!");
}

var myValue = 5;
console.log("myValue is equal to 5");

if (myValue == 5)
{
    console.log("This condition (myValue == 5) is true. ");
}

var myValue = 5;
console.log("myValue is equal to 5");

if (myValue < 5)
{
    console.log("This condition (myValue < 5) is true.");
} else {
    console.log("This condition (myValue < 5 is false.)");
}

var myValue = 5;
console.log("myValue is equal to 5");

if (myValue != 5)
{
    console.log("This condition (myValue != 5) is true.");
} else if (myValue > 5)
{
    console.log("This condition (myValue > 5) is true");
} else {
    console.log("All conditions are false.");
}

var myValue = 5;
console.log("myValue is equal to 5");

if (myValue >= 1)
{
    console.log ("This condition (myValue >= 1) is true");

    if (myValue <= 5)
    {
        console.log ("This condition (myValue <= 5) is true");
    }
}