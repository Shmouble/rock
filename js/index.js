function sayHello(){
    if (navigator.cookieEnabled) {
        userName = readCookie("irock_username");        
    }
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
            if(navigator.cookieEnabled){
                writeCookie("irock_username", userName, 5*365);
            } else {
                alert('Извините, у вас недоступны куки, я вас не запомню.');
            }            
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

