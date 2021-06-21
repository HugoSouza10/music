let buttonMobile = document.getElementById('icone_mobile');
let menu = document.getElementById('#menu');

buttonMobile.addEventListener('click', ()=>{
    
    if(buttonMobile.classList.contains('closeMenu')){
       buttonMobile.classList.remove('closeMenu');
       buttonMobile.classList.add('menuOpen');
    }else{
       buttonMobile.classList.add('closeMenu');
    }
});