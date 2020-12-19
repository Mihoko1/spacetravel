window.onload = function(){

    var starContainer = document.getElementById("stars");
    var starContainer2 = document.getElementById("stars2");
    var starContainer3 = document.getElementById("stars3");
    

    // Make stars randomly 
    for(var i=0; i< 300; i++){
        var p = document.createElement("p");
        p.innerHTML = ".";
        var idName = "p" + i;
        p.setAttribute("id", idName);
        starContainer.appendChild(p);
        rand_x = Math.floor(Math.random() * 2000) ;
        console.log(rand_x);
        rand_y = Math.floor(Math.random() * 1200) ;
        console.log(rand_y);
        // document.getElementById(idName).style.display = "inline-block";
        document.getElementById(idName).style.left = rand_x + "px";
        document.getElementById(idName).style.top = rand_y + "px";
       
    }
    for(var i=0; i< 300; i++){
        var p = document.createElement("p");
        p.innerHTML = ".";
        var idName = "t" + i;
        p.setAttribute("id", idName);
        starContainer2.appendChild(p);
        rand_x = Math.floor(Math.random() * 2000) ;
        console.log(rand_x);
        rand_y = Math.floor(Math.random() * 1200) ;
        console.log(rand_y);
        // document.getElementById(idName).style.display = "inline-block";
        document.getElementById(idName).style.left = rand_x + "px";
        document.getElementById(idName).style.top = rand_y + "px";
       
    } 

    for(var i=0; i< 300; i++){
        var p = document.createElement("p");
        p.innerHTML = ".";
        var idName = "q" + i;
        p.setAttribute("id", idName);
        starContainer3.appendChild(p);
        rand_x = Math.floor(Math.random() * 1200) ;
        console.log(rand_x);
        rand_y = Math.floor(Math.random() * 1200) ;
        console.log(rand_y);
        // document.getElementById(idName).style.display = "inline-block";
        document.getElementById(idName).style.left = rand_x + "px";
        document.getElementById(idName).style.top = rand_y + "px";
       
    }

    // Scroll animation
    var scrollElem = document.querySelectorAll('.effectFades');
    var scrollAnimation = function() {
    for(var i = 0; i < scrollElem.length; i++) {
        var trigger = 50;
        if (window.innerHeight > scrollElem[i].getBoundingClientRect().top + trigger) {
        scrollElem[i].classList.add('is-show');
        }
    }
    }
    window.addEventListener('load', scrollAnimation);
    window.addEventListener('scroll', scrollAnimation);


    // Form
    var formHandle = document.forms.form_inquiry;
    
    console.log(formHandle);
    formHandle.onsubmit = processForm;

    function processForm(){
   
        document.getElementsByClassName("form-bg")[0].style.display ="none";
        document.getElementsByClassName("thanks_msg")[0].style.display ="block";
                
        return false; 
    }
    // hamburger menu
    function hamburger(){
        document.getElementById('line1').classList.toggle('linea');
        document.getElementById('line2').classList.toggle('lineb');
        document.getElementById('line3').classList.toggle('linec');
        document.getElementById('side-menu').classList.toggle('slidex');
        document.getElementById('side-menu').classList.toggle('fadein');

    }
    document.getElementById('target').addEventListener('click',function (){
        
        hamburger();

    });
    var list = document.getElementsByClassName('list');

    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener('click', function () {
        hamburger();
        });
    }
   
    
}


    　



