//Declare variables
var user = {
    username:'',
    password:'', 
};

let userCount = 0;
var userArray = [];

//Start button
function toLogin() {
    userArray = JSON.parse(localStorage.getItem("usersSave") || "[]");
    console.log("loaded userArray: " + userArray);
    window.location.replace("login.html");
}

function toHome() {
    window.location.replace("intro.html");
}

function printUserInfo() {
    console.log("Username: " + user.username);
    console.log("Password: " + user.password);
}

function register() {
    //Pull info
    const username = document.getElementById("username");
    let userValue = username.value;
    const password = document.getElementById("password");
    let passValue = password.value;
    let state = false;
    let passState = false;


    //Empty message box
    document.getElementById("usertaken").innerHTML = "";

    //Password length too short
    if(passValue.toString().length < 8) {
        console.log("password too short!");
        document.getElementById("usertaken").innerHTML = "Password is too short. Please enter again.";
        passState = true;
    }

    //Check through array if username taken
    for(i = 0; i < userCount; i++) {
        //Input matches current iterated array username
        if((userValue.toString().toLowerCase() === userArray[i].username.toLowerCase()) && (userValue != "")) {
            console.log("erruser: " + userArray[i].username.toLowerCase().toString());
            state = true;
            document.getElementById("usertaken").innerHTML = "Username is taken. Please enter a different username and try again.";
        }
    }
    if((state === false)) {
        if(passState === false) {
            //Assign info
            let newUser = {
                username: userValue.toString(),
                password: passValue.toString(),
            };
            userArray.push(newUser);
            userCount++;
            alert("Account successfully registered"); 
            
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }

    }

    //userCount
    console.log("userCount: " + userCount);
    
    localStorage.setItem("usersSave", JSON.stringify("userArray"));

    //Print Array
    console.log(userArray);
}
const loginButton = document.getElementById("submitl");
const loginForm = document.getElementById("login-form");

function login() {
    const username = document.getElementById("usernamel");
    let userValue = username.value;
    const password = document.getElementById("passwordl");
    let passValue = password.value;
    let loginErrorMsg = document.getElementById("login-error-msg");
    let errPass = false;

    //Empty message box
    document.getElementById("login-error-msg").innerHTML = "";
    console.log("Username: " + userValue);
    console.log("Password: " + passValue);

    if(userCount < 1) {
        errPass = true;
    }
    for(var i = 0; i < userCount; i++) {
        if(userValue.toString() === userArray[i].username.toString()) {
            console.log("username found from array.");

            console.log("Printing whole array");
            console.log(userArray);

            console.log("Printing each username value and its respective password");
            for(u = 0; u < userCount; u++) {
                console.log(userArray[i].username + "." + userArray[i].password);
            }

            if(passValue.toString() === userArray[i].password.toString()) {
                errPass = false;
            }
            else {
                errPass = true;
            }
        }
        else {
            errPass = true;
        }
    }
    if(errPass === false) {
        localStorage.setItem("usersSave", JSON.stringify(userArray));
        window.location.replace("character.html");
    }
    else if (errPass === true){
        document.getElementById("login-error-msg").innerHTML = "Invalid login. Please try again!";
        document.getElementById("login-error-msg").style.opacity = 1;
    }
}

function passFormatIn() {
    document.getElementById("password-format").classList.toggle("password-format1");
    document.getElementById("password-format").classList.remove("password-format2");
}
function passFormatOut() {
    document.getElementById("password-format").classList.toggle("password-format2");
    document.getElementById("password-format").classList.remove("password-format1");

    setTimeout(checkPass, 0);
}

function checkPass() {
    let password = document.getElementById("password");
    let passValue = password.value;
    //Check password length
    if(passValue.toString().length < 8) {
        document.getElementById("rpassword").innerHTML = "Password length: " + passValue.toString().length + "/8";
        document.getElementById("rpassindicator").style.color = "red";
        document.getElementById("rpassindicator").style.backgroundColor = "red";
    }
    else { 
        document.getElementById("rpassword").innerHTML = "Password length: " + passValue.toString().length + "/8";
        document.getElementById("rpassindicator").style.color = "green";
        document.getElementById("rpassindicator").style.backgroundColor = "green";
    }
}