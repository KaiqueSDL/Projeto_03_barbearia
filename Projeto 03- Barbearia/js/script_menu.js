


var btnmenu = document.getElementById("btnmenu");
var navegacao = document.getElementById("navegacao");
var icon_menu = document.getElementById("icon_menu");


btnmenu.onclick = function(){
    if(navegacao.style.right == "-250px"){
        navegacao.style.right = "0";
        icon_menu.src = "img/close.png";
    }else{
        navegacao.style.right = "-250px";
        icon_menu.src = "img/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true
    });
