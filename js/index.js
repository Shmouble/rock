function sayHello(){
    alert("Hello, I'm your pet rock!");
}

var userName;

function touchRock(){
    userName = prompt("Как вас зовут?", "Введите ваше имя.");
    
    if(userName){
        alert("Рад вас видеть, " + userName + ".");
        document.getElementById("rockImg").src = "img/rock-happy.png";
    }
}