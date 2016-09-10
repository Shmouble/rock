function sayHello(){
    alert("Hello, I'm your pet rock!");
}

var userName;

function touchRock(){
    userName = prompt("Как вас зовут?", "Введите ваше имя.");
    
    if(userName){
        alert("Рад вас видеть, " + userName + ".");
        document.getElementById("rockImg").src = "img/rock-happy.png";
        setTimeout("sadFace()", 300000);
    }
}

function sadFace(){
    document.getElementById('rockImg').src = 'img/rock-lonely.png';
    alert("Мне скучно!");
}