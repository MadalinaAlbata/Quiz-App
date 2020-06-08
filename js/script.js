var logIn = document.getElementById("login"); //form
var signup = document.getElementById("signup"); //form
var logIn1 = document.getElementById("login1"); //form
var signup1 = document.getElementById("signup1"); //form
var form = document.getElementById("main"); //the div which contains the form
var btn_signin = document.getElementById("btn_signin"); //button sign in
var btn_signup = document.getElementById("btn_signup"); //button
var buttons = document.getElementById("buttons");

var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");


/*function register() {

    form.style.webkitAnimationName = "hideSignIn";

    signup.style.transform = "rotateY(0deg)";
    logIn.style.left = "-400px";
    signup.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    form.style.webkitAnimationName = "hideSignUp";
    logIn.style.backfaceVisibility = "hidden";
    logIn.style.animationDuration = "1s";
    form.style.transform = "rotateY(0deg)";
    signup.style.transform = "rotateY(180deg)";
    logIn.style.left = "50px";
    signup.style.left = "-400px";
    btn.style.left = "0px";
}*/

function register() {
    btn.style.left = "50%";
    logIn.style.left = "-550px";
    signup.style.left = "40px";
}

function login() {

    btn.style.left = "0%";
    logIn.style.left = "40px";
    signup.style.left = "550px";

}

function register1() {
    btn1.style.left = "50%";
    logIn1.style.left = "-550px";
    signup1.style.left = "40px";

}

function login1() {

    btn1.style.left = "0%";
    logIn1.style.left = "40px";
    signup1.style.left = "550px";
    //  setTimeout(document.location.href = "header.php", 10000);


}