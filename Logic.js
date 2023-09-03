'use strict'
window.addEventListener('load',bindEvents);
window.addEventListener('load', () => {
    showPopup(true);
});

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').classList.add('show');
        document.body.classList.add('blur'); // Add blur class to body
    } else {
        document.getElementById('popup').classList.remove('show');
        document.body.classList.remove('blur'); // Remove blur class from body

        // Play the background music when the popup is hidden
        document.getElementById('bg-music').play();
    }
}
// function showPopup(bool) {
//     if (bool) {
//       document.getElementById('popup').style.visibility = 'visible'
//     } else {
//       document.getElementById('popup').style.visibility = 'hidden'
//     }
// }

// Play background music
function musicPlay(){
    var audio = document.getElementById('bg-music');
    audio.play();
}

// Pause background music
function musicPause() {
    var audio = document.getElementById('bg-music');
    audio.pause();
}

// JavaScript to add click sound to the buttons b1 to b9
function playButtonClickSound() {
    var soundEffect = document.getElementById('button-click-sound');
    soundEffect.currentTime = 0; // Reset the audio to the beginning
    soundEffect.play();
}


function playGameOverSound() {
    var soundEffect = document.getElementById('game-over-sound');
    soundEffect.currentTime = 0; // Reset the audio to the beginning
    soundEffect.play();
}



function bindEvents(){
    document.querySelector("#b1").addEventListener('click',func1);
    document.querySelector("#b1").addEventListener('click',nextTurn);
    document.querySelector("#b2").addEventListener('click',func2);
    document.querySelector("#b2").addEventListener('click',nextTurn);
    document.querySelector("#b3").addEventListener('click',func3);
    document.querySelector("#b3").addEventListener('click',nextTurn);
    document.querySelector("#b4").addEventListener('click',func4);
    document.querySelector("#b4").addEventListener('click',nextTurn);
    document.querySelector("#b5").addEventListener('click',func5);
    document.querySelector("#b5").addEventListener('click',nextTurn);
    document.querySelector("#b6").addEventListener('click',func6);
    document.querySelector("#b6").addEventListener('click',nextTurn);
    document.querySelector("#b7").addEventListener('click',func7);
    document.querySelector("#b7").addEventListener('click',nextTurn);
    document.querySelector("#b8").addEventListener('click',func8);
    document.querySelector("#b8").addEventListener('click',nextTurn);
    document.querySelector("#b9").addEventListener('click',func9);
    document.querySelector("#b9").addEventListener('click',nextTurn);
    document.querySelector("#Reset").addEventListener('click',Rfunc);
    
}

function nextTurn(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    //Checking For Player 1
    if((b1=='o'||b1=='O') && (b2=='o'||b2=='O') && (b3=='o'||b3=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(39vw, 2.25vw) rotate(0deg)";
        document.querySelector(".line").style.width = "19.5vw";
    }

    else if((b1=='o'||b1=='O') && (b4=='o'||b4=='O') && (b7=='o'||b7=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(35.15vw, 7vw) rotate(90deg)";
        document.querySelector(".line").style.width = "12.75vw";
    }
    
    else if((b4=='o'||b4=='O') && (b5=='o'||b5=='O') && (b6=='o'||b6=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(39vw, 7.15vw) rotate(0deg)";
        document.querySelector(".line").style.width = "19.5vw";
    }

    else if((b7=='o'||b7=='O') && (b8=='o'||b8=='O') && (b9=='o'||b9=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(39vw, 12vw) rotate(0deg)";
        document.querySelector(".line").style.width = "19.5vw";
    }

    else if((b2=='o'||b2=='O') && (b5=='o'||b5=='O') && (b8=='o'||b8=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(42.35vw, 7vw) rotate(90deg)";
        document.querySelector(".line").style.width = "12.75vw";
    }

    else if((b3=='o'||b3=='O') && (b6=='o'||b6=='O') && (b9=='o'||b9=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(49.65vw, 7vw) rotate(90deg)";
        document.querySelector(".line").style.width = "12.75vw";
    }

    else if((b1=='o'||b1=='O') && (b5=='o'||b5=='O') && (b9=='o'||b9=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(38vw, 7vw) rotate(35deg)";
        document.querySelector(".line").style.width = "21.15vw";
    }

    else if((b3=='o'||b3=='O') && (b5=='o'||b5=='O') && (b7=='o'||b7=='O')){
        document.getElementById("result").innerText = "Player 1 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 1 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(38vw, 7.25vw) rotate(325deg)";
        document.querySelector(".line").style.width = "21.15vw";
    }

    //Checking For Player 2
    else if((b1=='x'||b1=='X') && (b2=='x'||b2=='X') && (b3=='x'||b3=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(39vw, 2.25vw) rotate(0deg)";
        document.querySelector(".line").style.width = "19.5vw";
    }

    else if((b1=='x'||b1=='X') && (b4=='x'||b4=='X') && (b7=='x'||b7=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(35.15vw, 7vw) rotate(90deg)";
        document.querySelector(".line").style.width = "12.75vw";
    }
    
    else if((b4=='x'||b4=='X') && (b5=='x'||b5=='X') && (b6=='x'||b6=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(39vw, 7.15vw) rotate(0deg)";
        document.querySelector(".line").style.width = "19.5vw";
    }

    else if((b7=='x'||b7=='X') && (b8=='x'||b8=='X') && (b9=='x'||b9=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(39vw, 12vw) rotate(0deg)";
        document.querySelector(".line").style.width = "19.5vw";
    }

    else if((b2=='x'||b2=='X') && (b5=='x'||b5=='X') && (b8=='x'||b8=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(42.35vw, 7vw) rotate(90deg)";
        document.querySelector(".line").style.width = "12.75vw";
    }

    else if((b3=='x'||b3=='X') && (b6=='x'||b6=='X') && (b9=='x'||b9=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(49.65vw, 7vw) rotate(90deg)";
        document.querySelector(".line").style.width = "12.75vw";
    }

    else if((b1=='x'||b1=='X') && (b5=='x'||b5=='X') && (b9=='x'||b9=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(38vw, 7vw) rotate(35deg)";
        document.querySelector(".line").style.width = "21.15vw";
    }

    else if((b3=='x'||b3=='X') && (b5=='x'||b5=='X') && (b7=='x'||b7=='X')){
        document.getElementById("result").innerText = "Player 2 WON";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        musicPause();
        window.alert("**Player 2 WON**");
        playGameOverSound();
        document.querySelector(".line").style.transform = "translate(38vw, 7.25vw) rotate(325deg)";
        document.querySelector(".line").style.width = "21.15vw";
    }

    else if((b1=='X'||b1=='O') && (b2=='X'||b2=='O') && (b3=='X'||b3=='O') && (b4=='X'||b4=='O') && (b5=='X'||b5=='O') && (b6=='X'||b6=='O') && (b7=='X'||b7=='O') && (b8=='X'||b8=='O') && (b9=='X'||b9=='O')) {
        document.getElementById("result").innerText = "Match TIE";
        musicPause();
        window.alert("**Match TIE**");
        playGameOverSound();
    }

    else{
            // Here, Printing Result
            if (flag == 1) {
                document.getElementById('result').innerText = "Player O Turn";
            }
            else {
                document.getElementById('result').innerText = "Player X Turn";
            }
    }

}

// Reset function
function Rfunc(){
    location.reload();
    document.getElementById("b1").value='';
    document.getElementById("b2").value='';
    document.getElementById("b3").value='';
    document.getElementById("b4").value='';
    document.getElementById("b5").value='';
    document.getElementById("b6").value='';
    document.getElementById("b7").value='';
    document.getElementById("b8").value='';
    document.getElementById("b9").value='';
}

var flag = 1;
function func1() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
 
function func2() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
 
function func3() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
 
function func4() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
 
function func5() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
 
function func6() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
 
function func7() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
 
function func8() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
 
function func9() {
    playButtonClickSound();
    if (flag == 1) {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
