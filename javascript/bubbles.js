// function start() {
// document.querySelector(".x1").addEventListener("click", bubblepop1);
// document.querySelector(".x2").addEventListener("click", bubblepop2);
// document.querySelector(".x3").addEventListener("click", bubblepop3);
// document.querySelector(".x4").addEventListener("click", bubblepop4);
// document.querySelector(".x5").addEventListener("click", bubblepop5);
// document.querySelector(".x6").addEventListener("click", bubblepop6);
// document.querySelector(".x7").addEventListener("click", bubblepop7);
// document.querySelector(".x8").addEventListener("click", bubblepop8);
// document.querySelector(".x9").addEventListener("click", bubblepop9);
// document.querySelector(".x10").addEventListener("click", bubblepop10);

// document.querySelector(".x1").addEventListener("animationiteration", restartbubble1);
// }

// function bubblepop1(){
//     document.querySelector(".bubble").classList.add("hidden");
// }

// function restartbubble1(){

// }


// let score, lives;
// const gameTime = 30;
// let timeLeft, gameRunning;
// let beachtrack = document.querySelector("#bg_music");
// let goodSound = document.querySelector("#sound_good");
// let badSound = document.querySelector("#sound_bad");
// let winSound = document.querySelector("#sound_win");
// let loseSound = document.querySelector("#sound_lose");

// window.addEventListener("load", title);
// window.addEventListener("load", playBeachtrack);


// function title() {
//     console.log("title");
//     hideAllScreens();
//     playBeachtrack();
//     document.querySelector("#title_screen").classList.remove("hidden");
//     document.querySelector("#play_button").addEventListener("click", start);
//     document.querySelector("#instructions_button").addEventListener("click", instruction_screen);
//     document.querySelector("#storybutton").addEventListener("click", instruction_screen);
//     document.querySelector("#soundbutton").addEventListener("click", mutingBeachtrack);
// }

// function instruction_screen() {
//     console.log("instructions_screen");
//     hideAllScreens();
//     playBeachtrack();
//     document.querySelector("#instructions_screen").classList.remove("hidden");
//     document.querySelector("#playgame_button").addEventListener("click", start);
//     document.querySelector("#titlescreen_button").addEventListener("click", title);
//     document.querySelector("#soundbutton").addEventListener("click", mutingBeachtrack);
// }

// function hideAllScreens() {
//     document.querySelector("#title_screen").classList.add("hidden");
//     document.querySelector("#instructions_screen").classList.add("hidden");
//     document.querySelector("#game_over").classList.add("hidden");
//     document.querySelector("#you_won").classList.add("hidden");
//     document.querySelector("#screen").offsetHeight;
// }


// function start() {
//     console.log("start");
//     hideAllScreens();
//     gameRunning = true;
//     score = 0;
//     lives = 3;
//     gameDuration = 30;
//     timeLeft = gameTime;
//     showTime();
//     console.log(generateRandomNumber());
//     playBeachtrack();
    
//     // good objects positions
//     document.querySelector("#a1_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#a2_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#a3_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#a4_container").classList.add("position" + generateRandomNumber());
//     // good objects fall
//     document.querySelector("#a1_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#a2_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#a3_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#a4_container").classList.add("fallDown" + generateRandomNumber());
//     // good objects click   
//     document.querySelector("#a1_container").addEventListener("click", hitShell1);
//     document.querySelector("#a2_container").addEventListener("click", hitShell2);
//     document.querySelector("#a3_container").addEventListener("click", hitShell3);
//     document.querySelector("#a4_container").addEventListener("click", hitShell4);
//     // good objects restart
//     document.querySelector("#a1_container").addEventListener("animationiteration", restartShell1);
//     document.querySelector("#a2_container").addEventListener("animationiteration", restartShell2);
//     document.querySelector("#a3_container").addEventListener("animationiteration", restartShell3);
//     document.querySelector("#a4_container").addEventListener("animationiteration", restartShell4);
//     // bad objects positions
//     document.querySelector("#b1_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#b2_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#b3_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#b4_container").classList.add("position" + generateRandomNumber());
//     // bad objects fall
//     document.querySelector("#b1_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#b2_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#b3_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#b4_container").classList.add("fallDown" + generateRandomNumber());
//     // bad objects click
//     document.querySelector("#b1_container").addEventListener("click", hitTrash1);
//     document.querySelector("#b2_container").addEventListener("click", hitTrash2);
//     document.querySelector("#b3_container").addEventListener("click", hitTrash3);
//     document.querySelector("#b4_container").addEventListener("click", hitTrash4);
//     // bad objects restart
//     document.querySelector("#b1_container").addEventListener("animationiteration", restartTrash1);
//     document.querySelector("#b2_container").addEventListener("animationiteration", restartTrash2);
//     document.querySelector("#b3_container").addEventListener("animationiteration", restartTrash3);
//     document.querySelector("#b4_container").addEventListener("animationiteration", restartTrash4);

//     document.querySelector("#score_count").textContent= + score + " / 15";
//     changeImage();
//     // sounds
//     document.querySelector("#soundbutton").addEventListener("click", mutingBeachtrack);
//     document.querySelector("#a1_container").addEventListener("click", playGoodSound);
//     document.querySelector("#a2_container").addEventListener("click", playGoodSound);
//     document.querySelector("#a3_container").addEventListener("click", playGoodSound);
//     document.querySelector("#a4_container").addEventListener("click", playGoodSound);
//     document.querySelector("#b1_container").addEventListener("click", playBadSound);
//     document.querySelector("#b2_container").addEventListener("click", playBadSound);
//     document.querySelector("#b3_container").addEventListener("click", playBadSound);
//     document.querySelector("#b4_container").addEventListener("click", playBadSound);

//     document.querySelector("#soundbutton").addEventListener("click", mutingBeachtrack);
    
// }

// function hitShell1(){
//     console.log("hitShell1");
//     document.querySelector("#a1_container").classList.add("stop");
//     document.querySelector("#a1_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#a1_sprite").addEventListener("animationend", restartShell1);
//     score++;
//     document.querySelector("#score_count").textContent= + score + " / 15";
//     if(score > 14) {
//         endGame("#you_won");
//     }
    
// }

// function hitShell2(){
//     console.log("hitShell1");
//     document.querySelector("#a2_container").classList.add("stop");
//     document.querySelector("#a2_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#a2_sprite").addEventListener("animationend", restartShell2);
//     score++;
//     document.querySelector("#score_count").textContent= + score + " / 15";
//     if(score > 14) {
//         endGame("#you_won");
//     }
    
// }

// function hitShell3(){
//     console.log("hitShell1");
//     document.querySelector("#a3_container").classList.add("stop");
//     document.querySelector("#a3_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#a3_sprite").addEventListener("animationend", restartShell3);
//     score++;
//     document.querySelector("#score_count").textContent= + score + " / 15";
//     if(score > 14) {
//         endGame("#you_won");
//     }
// }

// function hitShell4(){
//     console.log("hitShell1");
//     document.querySelector("#a4_container").classList.add("stop");
//     document.querySelector("#a4_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#a4_sprite").addEventListener("animationend", restartShell4);
//     score++;
//     document.querySelector("#score_count").textContent= + score + " / 15";
//     if(score > 14) {
//         endGame("#you_won");
//     }
// }


// function restartShell1(){
//     console.log("restartShell1");
//     document.querySelector("#a1_container").classList.value = "";
//     document.querySelector("#a1_sprite").classList.value = "";
//     document.querySelector("#a1_sprite").removeEventListener("animationend", restartShell1);
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#a1_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#a1_container").classList.add("position" + generateRandomNumber());
// }

// function restartShell2(){
//     console.log("restartShell2");
//     document.querySelector("#a2_container").classList.value = "";
//     document.querySelector("#a2_sprite").classList.value = "";
//     document.querySelector("#a2_sprite").removeEventListener("animationend", restartShell2);
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#a2_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#a2_container").classList.add("position" + generateRandomNumber());
// }

// function restartShell3(){
//     console.log("restartShell3");
//     document.querySelector("#a3_container").classList.value = "";
//     document.querySelector("#a3_sprite").classList.value = "";
//     document.querySelector("#a3_sprite").removeEventListener("animationend", restartShell3);
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#a3_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#a3_container").classList.add("position" + generateRandomNumber());
// }

// function restartShell4(){
//     console.log("restartShell4");
//     document.querySelector("#a4_container").classList.value = "";
//     document.querySelector("#a4_sprite").classList.value = "";
//     document.querySelector("#a4_sprite").removeEventListener("animationend", restartShell4);
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#a4_container").classList.add("fallDown" + generateRandomNumber());
//     document.querySelector("#a4_container").classList.add("position" + generateRandomNumber());
// }



// function hitTrash1(){
//     console.log("hitTrash");
//     document.querySelector("#b1_container").classList.add("stop");
//     document.querySelector("#b1_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#b1_sprite").addEventListener("animationend", restartTrash1);
//     lives--;
//     changeImage();
//     if(lives === 0) {
//         endGame("#game_over");
//     }  
//     // playBadSound
// }

// function hitTrash2(){
//     console.log("hitTrash");
//     document.querySelector("#b1_container").classList.add("stop");
//     document.querySelector("#b1_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#b1_sprite").addEventListener("animationend", restartTrash2);
//     lives--;
//     changeImage();
//     if(lives === 0) {
//         endGame("#game_over");
//     }  
// }

// function hitTrash3(){
//     console.log("hitTrash");
//     document.querySelector("#b1_container").classList.add("stop");
//     document.querySelector("#b1_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#b1_sprite").addEventListener("animationend", restartTrash3);
//     lives--;
//     changeImage();
//     if(lives === 0) {
//         endGame("#game_over");
//     }  
// }

// function hitTrash4(){
//     console.log("hitTrash");
//     document.querySelector("#b1_container").classList.add("stop");
//     document.querySelector("#b1_sprite").classList.add("rotateAndDisappear");
//     document.querySelector("#b1_sprite").addEventListener("animationend", restartTrash4);
//     lives--;
//     changeImage();
//     if(lives === 0) {
//         endGame("#game_over");
//     }  
// }

// function restartTrash1(){
//     console.log("restartTrash1");
//     document.querySelector("#b1_container").classList.value = "";
//     document.querySelector("#b1_sprite").classList.value = "";
//     document.querySelector("#b1_sprite").removeEventListener("animationend", restartTrash1)
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#b1_container").classList.add("fallDown" + generateRandomNumber());
//     // Random position
//     document.querySelector("#b1_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#b1_container").classList.add("fallDown" + generateRandomNumber());
// }

// function restartTrash2(){
//     console.log("restartTrash2");
//     document.querySelector("#b2_container").classList.value = "";
//     document.querySelector("#b2_sprite").classList.value = "";
//     document.querySelector("#b2_sprite").removeEventListener("animationend", restartTrash2)
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#b2_container").classList.add("fallDown" + generateRandomNumber());
//     // Random position
//     document.querySelector("#b2_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#b2_container").classList.add("fallDown" + generateRandomNumber());
// }

// function restartTrash3(){
//     console.log("restartTrash3");
//     document.querySelector("#b3_container").classList.value = "";
//     document.querySelector("#b3_sprite").classList.value = "";
//     document.querySelector("#b3_sprite").removeEventListener("animationend", restartTrash3)
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#b3_container").classList.add("fallDown" + generateRandomNumber());
//     // Random position
//     document.querySelector("#b3_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#b3_container").classList.add("fallDown" + generateRandomNumber());
// }

// function restartTrash4(){
//     console.log("restartTrash4");
//     document.querySelector("#b4_container").classList.value = "";
//     document.querySelector("#b4_sprite").classList.value = "";
//     document.querySelector("#b4_sprite").removeEventListener("animationend", restartTrash4)
//     document.querySelector("html").offsetHeight;
//     document.querySelector("#b4_container").classList.add("fallDown" + generateRandomNumber());
//     // Random position
//     document.querySelector("#b4_container").classList.add("position" + generateRandomNumber());
//     document.querySelector("#b4_container").classList.add("fallDown" + generateRandomNumber());
// }

// function changeImage() {
//     console.log("changeImage");

//     if (lives > 0) {
//         console.log("lives: " + lives);
//         document.querySelector("#health_board").classList.value = "lives_" + lives;
//     } 
// }

// function generateRandomNumber(){
//     console.log("generateRandomNumber");
//     return Math.floor(Math.random() * 14 + 1);
// }

// function endGame(endGameID){
//     gameRunning = false;
//     stopAllSounds();
//     winLoseSounds();

//     document.querySelector("#a1_container").classList.value="";
//     document.querySelector("#a2_container").classList.value="";
//     document.querySelector("#a3_container").classList.value="";
//     document.querySelector("#a4_container").classList.value="";
//     document.querySelector("#b1_container").classList.value="";
//     document.querySelector("#b2_container").classList.value="";
//     document.querySelector("#b3_container").classList.value="";
//     document.querySelector("#b4_container").classList.value="";
//     document.querySelector(endGameID).classList.remove("hidden");
//     document.querySelector("#playagain_button").addEventListener("click", restartGame);
//     document.querySelector("#titlescreen_button2").addEventListener("click", title);
//     document.querySelector("#playagain_button2").addEventListener("click", restartGame);
//     document.querySelector("#titlescreen_button3").addEventListener("click", title);

// }

// function showTime(){
//     console.log("showTime");
//     timeLeft--;
//     document.querySelector("#time_countdown").textContent = timeLeft;
//     // call to the timer
//     startTimer();

// }

// function startTimer(){
//     console.log("startTimer");
//     if (gameRunning) {
//         if (timeLeft > 0) {
//             setTimeout(showTime, 1000)
//         } else {
//             gameOver();
//         }
//     }
// }

// function winLoseSounds(){
//     if(score > 14) {
//         playWinSound();
//     } else {
//         playLoseSound();
//     }
// }

// function gameOver(){
//     console.log("gameOver");
//     if(score > 14) {
//         endGame("#you_won");
//     } else {
//         endGame("#game_over");
//     }
// }

// function restartGame() {
//     console.log("restartGame");
//     hideAllScreens();
//     start();
// }


// function playBeachtrack(){
//     console.log("playBeachtrack")
//     beachtrack.play();
//     beachtrack.addEventListener("ended", playBeachtrack);
// }

// function playGoodSound(){
//     console.log("playGoodSound")
//     goodSound.currentTime = 0;
//     goodSound.play();
// }

// function playBadSound(){
//     console.log("playBadSound")
//     badSound.currentTime = 0;
//     badSound.play();
// }

// function playWinSound(){
//     console.log("playWinSound")
//     winSound.currentTime = 0;
//     winSound.play();
// }

// function playLoseSound(){
//     console.log("playLoseSound")
//     loseSound.currentTime = 0;
//     loseSound.play();
// }

// function mutingBeachtrack() {
//     if (beachtrack.paused != true) {

//         if (beachtrack.muted === true) {
//             beachtrack.muted = false;
//             badSound.muted = false;
//             goodSound.muted = false;
//             winSound.muted = false;
//             loseSound.muted = false;
//             document.querySelector("#soundbutton").classList.value = "soundoff";
//         } else {
//             beachtrack.muted = true;
//             goodSound.muted = true;
//             badSound.muted = true;
//             winSound.muted = true;
//             loseSound.muted = true;
//             document.querySelector("#soundbutton").classList.value = "soundon";
//         }
//     }
// }

// function stopAllSounds() {
//     goodSound.pause();
//     goodSound.currentTime = 0;
//     badSound.pause();
//     badSound.currentTime = 0;
//     beachtrack.pause();
//     beachtrack.currentTime = 0;
// }