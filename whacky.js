let random =1;
let timer = null;
timer=setInterval(function(){
    random = Math.floor(Math.random()*3)+1;
     const c1=document.getElementById("C1");
        const c2=document.getElementById("C2");
        const c3=document.getElementById("C3");
    if(random==1){
        c1.style.backgroundColor = "green";
        c2.style.backgroundColor = "grey";
        c3.style.backgroundColor = "grey";
       }
       if(random==2){
        c1.style.backgroundColor = "grey";
        c2.style.backgroundColor = "green";
        c3.style.backgroundColor = "grey";
       }
       if(random==3){
        c1.style.backgroundColor = "grey";
        c2.style.backgroundColor = "grey";
        c3.style.backgroundColor = "green";
       }

},500)