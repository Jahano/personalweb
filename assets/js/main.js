const sec1 = document.getElementById('sec-1');
const sec2 = document.getElementById('sec-2');
const sec3 = document.getElementById('sec-3');
/*NAV BAR ANCHORS */
const nav1 = document.getElementById('nav-sec1');
const nav2 = document.getElementById('nav-sec2');
const nav3 = document.getElementById('nav-sec3');


const title = document.getElementById('main__title');

function showNav(){
    const barIcon = document.getElementById('iconbar');
    const headerNav = document.getElementById('nav-menu');
    let flag = false;
    barIcon.addEventListener('click' , function(){
        if(!flag){
            flag = true;
            console.log(flag);            
            headerNav.style.display = "block"
            headerNav.style.transition = "1s"
            headerNav.style.left = "0"; 
            
        }
        else{
            flag = false;
            console.log(flag);            
            headerNav.style.left = "100%"; 
            headerNav.style.transition = "1s"
            
        }
    });
    headerNav.addEventListener('click' , function(){
        if(flag){
            flag=false;
            console.log(flag);            
            headerNav.style.left = "100%"; 
            headerNav.style.transition = "1s"
        }
    });    
}


function showSect1(){
        
    nav1.addEventListener('click' , function(){
        
        title.innerHTML = "Experiencia";
        sec1.style.display="flex";
        sec2.style.display="none";
        sec3.style.display="none";

        
       
        
    });
}
function showSect2(){
    nav2.addEventListener('click' , function(){
        
        title.innerHTML = "Contacto";
        
        sec1.style.display="none";
        sec2.style.display="flex";
        sec3.style.display="none";
       
        
    });
}
function showSect3(){
    nav3.addEventListener('click' , function(){
        
        title.innerHTML = "FAQ";
        sec1.style.display="none";
        sec2.style.display="none";
        sec3.style.display="flex";
       
    });
}


// function getSecOnDisplay(){
//     let comp;
//     if(getComputedStyle(sec1).display == "flex"){
//         comp = 1;
//         return comp;
//     }
//     else if(getComputedStyle(sec2).display == "flex"){
//         comp = 2;
//         return comp;
//     }
//     else{
//         comp = 3;
//         return comp;
//     }
// }


const dovRead=function(){
/*MAIN SECTIONS */
    
    
    showNav();
    showSect1();
    showSect2();
    showSect3();
    
}
dovRead();

