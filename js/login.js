var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}



var con = document.getElementById('con')
function loadoff(){
    con.style.display="none";
}

function loadon(){
    con.style.display="flex";
}

window.onload = function(){
    loadon();
    setTimeout(loadoff,3000);
}