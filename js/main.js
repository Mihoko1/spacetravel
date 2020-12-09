window.onload = function(){
    var starContainer = document.getElementById("stars");
    var starContainer2 = document.getElementById("stars2");

    

    for(var i=0; i< 200; i++){
        var p = document.createElement("p");
        p.innerHTML = ".";
        var idName = "p" + i;
        p.setAttribute("id", idName);
        starContainer.appendChild(p);
        rand_x = Math.floor(Math.random() * 2000) - 800;
        console.log(rand_x);
        rand_y = Math.floor(Math.random() * 1200) ;
        console.log(rand_y);
        // document.getElementById(idName).style.display = "inline-block";
        document.getElementById(idName).style.left = rand_x + "px";
        document.getElementById(idName).style.top = rand_y + "px";
       
    }
    for(var i=0; i< 200; i++){
        var p = document.createElement("p");
        p.innerHTML = ".";
        var idName = "t" + i;
        p.setAttribute("id", idName);
        starContainer2.appendChild(p);
        rand_x = Math.floor(Math.random() * 2000) - 800;
        console.log(rand_x);
        rand_y = Math.floor(Math.random() * 1200) ;
        console.log(rand_y);
        // document.getElementById(idName).style.display = "inline-block";
        document.getElementById(idName).style.left = rand_x + "px";
        document.getElementById(idName).style.top = rand_y + "px";
       
    }

    


  

}