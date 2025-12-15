var x = 100; // initial x position
var y = 100; // initial y position
var changex = 5; // change in x position
var changey = 9;
var intervalID; // variable to store the interval ID

function start() 
{
    document.getElementById("startButton").disabled = true; // disable start button
    document.getElementById("stopButton").disabled = false; // enable stop button
    intervalID=setInterval(moveBall,25); // call moveBall function to start moving the ball
}

function stop() 
{
    document.getElementById("startButton").disabled = false; // enable start button
    document.getElementById("stopButton").disabled = true; // disable stop button
    clearInterval(intervalID); // stop moving the ball
}

function moveBall()
{
    var image = document.getElementById("ball"); // get the ball image element
      image.style.top = y + "px"; // update the y position
    image.style.left= x + "px"; // update the x position
    if (x + image.width >  window.innerWidth || x <= 0) // check for horizontal boundaries
    {
        horzSound = new sound("assets/sideBoing.mp3");  
        horzSound.play();   
        changex=-changex; // reverse horizontal direction
    }
    if (y + image.height >  window.innerHeight || y <= 0) // check for vertical boundaries
    {
       
        vertSound = new sound("assets/bottomBoing.mp3");  
        vertSound.play();
        changey=-changey; // reverse vertical direction
    }
    x += changex; // update x position
    y += changey; // update y position
}

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    { this.sound.play();}
 
}
