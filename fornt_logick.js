let nav = document.querySelector('.navbar');
window.onscroll =()=>{
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        nav.classList.add("nav");
    }
    else{
        nav.classList.remove("nav")
    }
}
