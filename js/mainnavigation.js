
    (() => {
        const button = document.querySelector(".main-navigation__burger");
        const menu = document.querySelector('.main-navigation__list');
    
    
        const toggleClass = () => {
            menu.classList.toggle('main-navigation__active');
        };
    
        button.addEventListener("click", toggleClass);
        menu.addEventListener("click", toggleClass);
        
    
    })();