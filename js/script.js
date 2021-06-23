let buttonMobile = document.getElementById('icone_mobile');
let menuMain = document.querySelector(' #menu ');
let modal_Box = document.querySelector('.modal_box');


buttonMobile.addEventListener('click', ()=>{
    
    if(buttonMobile.classList.contains('closeMenu')){
       buttonMobile.classList.remove('closeMenu');
       menuMain.style.marginRight='-400px';

       setTimeout(()=>{
          modal_Box.classList.add('modalBoxEfectClose');
          modal_Box.style.display='none';
       },100);
     
      
       
    }else{
       buttonMobile.classList.add('closeMenu');
       menuMain.style.marginRight='0px';


       setTimeout(() => {
          modal_Box.classList.remove('modalBoxEfectClose');
          modal_Box.style.display='block';

       }, 100);
       
       
      
      
    }
});