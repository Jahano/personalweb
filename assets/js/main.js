const barIcon = document.getElementById('iconbar');
const headerNav = document.getElementById('nav-menu');
let flag = false;
function showNav(){
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

showNav();
