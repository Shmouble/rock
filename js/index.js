function sayHello(){
    userName = readCookie("irock_username");
    if(userName){
        alert("Привет " + userName + ", я скучал.");
    } else {
        alert("Hello, I'm your pet rock!");        
    }   
}

var userName;

function touchRock(){
    if(userName){
        alert("Мне нравится внимание, " + userName + ". Спасибо.");
    } else {
        userName = prompt("Как вас зовут?", "Введите ваше имя.");
        if (userName){
            alert("Рад встрече, " + userName + "!");
            writeCookie("irock_username", userName, 5*365);
        }
    }
    document.getElementById("rockImg").src = "img/rock-happy.png";
    setTimeout("sadFace()", 300000);
}

function sadFace(){
    document.getElementById('rockImg').src = 'img/rock-lonely.png';
    alert("Мне скучно!");
}

function resizeRock(){
    document.getElementById("rockImg").style.height = (document.body.clientHeight- 100)*0.75;
}

