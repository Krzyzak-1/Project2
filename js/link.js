(() => {
    const button = document.querySelector(".main-navigation__burger");
  
    const Link = document.querySelector('.main-navigation__list--item');


    const toggleClass = () => {
        button.classList.toggle('open');
    };

    button.addEventListener("click", toggleClass);
    Link.addEventListener("click", toggleClass);
    

})();