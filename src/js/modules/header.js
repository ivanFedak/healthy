const header = ()=>{

    const header = document.querySelector('header');

    window.addEventListener('scroll',function(e){

        if(window.scrollY >= header.offsetHeight){
            header.classList.add('_scroll')
        }else{
            header.classList.remove('_scroll')
        }
    })
    


}
export default header;