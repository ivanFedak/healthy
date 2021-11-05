const video = ()=>{
    const btn = document.querySelector('.main__play'),
          wrapper = document.querySelector('.main__video');

    btn.addEventListener('click',function(e){
        wrapper.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/-8gDXinwFSI?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    })
    

}
export default video;