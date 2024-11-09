var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}

var account = document.getElementById('account');
var password = document.getElementById('password');
function login(){
    if(account.value=="" || password.value ==""){
        alert("账号或密码不能为空");
        return false;
    }else if(account.value != "root" || account.value!="root"){
        alert("账号或密码错误(可以选择游客登录)");
        return false;
    }
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