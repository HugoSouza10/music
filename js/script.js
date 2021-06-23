let buttonMobile = document.getElementById('icone_mobile');
let menuMain = document.querySelector(' #menu ');


buttonMobile.addEventListener('click', ()=>{
    
    if(buttonMobile.classList.contains('closeMenu')){
       buttonMobile.classList.remove('closeMenu');
       menuMain.style.marginRight='-400px';
      
       
    }else{
       buttonMobile.classList.add('closeMenu');
       menuMain.style.marginRight='0px';
      
      
    }
});