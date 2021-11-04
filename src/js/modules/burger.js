const burger = ()=>{
    
    const btn = document.querySelector('.icon-menu'),
          menu = document.querySelector('.menu__body');

    btn.addEventListener('click',function(e){
        btn.classList.toggle('_active');
        menu.classList.toggle('_active');
    })
    
}
export default burger;