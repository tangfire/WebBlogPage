window.onload=function(){
    setTimeout(getpre,1000);
    timer=setInterval(getpre,3000);
    var pics=new Array();
    var dots=new Array();
    var banner=document.getElementById('banner');
    for(var i=1;i<=5;i++){
        var lbli=document.createElement('li');
        var lbimg=document.createElement('img');

        lbimg.src="../image/pics0"+i+".jpg";
        lbimg.style.width="750px"
        lbimg.style.height="421px"
        lbli.appendChild(lbimg);

        banner.appendChild(lbli);
        pics.push(lbli);
        pics[pics.length-1].style.left="0px";

        /*
        init
        pics[0] -> 3
        pics[1] -> 4
        pics[2] -> 5 left
        pics[3] -> 1 show
        pics[4] -> 2 right

        init -> 点左边图像 -> getnext
        pics[0] -> 2
        pics[1] -> 3
        pics[2] -> 4 left
        pics[3] -> 5 show
        pics[4] -> 1 right

        init -> 点右边图像 -> getpre
        pics[0] -> 4
        pics[1] -> 5
        pics[2] -> 1 left
        pics[3] -> 2 show
        pics[4] -> 3 right

        */

        lbimg.onmouseenter=function(){
            clearInterval(timer);
        }
        lbimg.onmouseleave=function(){
            timer=setInterval(getpre,3000);
        }    
        var bottomdot=document.createElement("div");
        bottomdot.style.left=140*(i+1)+"px";
        bottomdot.name=i;
        dots.push(bottomdot);
        banner.appendChild(bottomdot);

        if(i>3){
            lbli.id=i-3;
        }else{
            lbli.id=i+2;     
        }
        
    }


var len=pics.length-1;
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;



function getnext(){
    var give_up=pics[len];
    pics.pop();
    pics.unshift(give_up);
    for(var i=0;i<pics.length;i++){
        pics[i].style.zIndex=i;
        pics[i].style.transform="scale(1)";
    }
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;

    dotmov();
    pics[len-2].onclick=function(){
        getnext();
    }
    pics[len].onclick=function(){
        getpre();
    }
}

function getpre(){
    var give_up=pics[0];
    pics.push(give_up);
    pics.shift();
    for(var i=0;i<pics.length;i++){
        pics[i].style.zIndex=i;
        pics[i].style.transform="scale(1)";
    }
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;
    dotmov();
    pics[len-2].onclick=function(){
        getnext();
    }
    pics[len].onclick=function(){
        getpre();
    }
    
}


dots[0].style.background="rgb(48, 72, 77)";
function dotmov(){
    for(var i=0;i<dots.length;i++){
        if(dots[i].name==pics[len-1].id){
            dots[i].style.background="rgb(48, 72, 77)";
        }else{
            dots[i].style.background="rgb(123, 168, 175)";
        }
    }
}

}