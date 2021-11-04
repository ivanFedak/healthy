const menu = (buttons)=>{
 
    const menuLinks = document.querySelectorAll(buttons);

    if(menuLinks.length > 0){
        menuLinks.forEach(item => {
            item.addEventListener('click',MoveToBlock)
        });   
    }

    function MoveToBlock(e) {
        const target = e.target;
        if(target.dataset.goto && document.querySelector(target.dataset.goto)){//1.Заполнен ли дата атриб  2.Существует ли обект на який зсилаеся дата атрибут(куда скролити)
            const block = document.querySelector(target.dataset.goto);
            const BlockValue = block.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight; // 1.Растояние обекта от верха 2.Количество прокруч px 3.Висота шапки
            console.log(BlockValue) //Кординати блока до якого идеме

            window.scrollTo({//Заставляе скрол робити
                top: BlockValue,//Свеху 
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }


    


}
export default menu;