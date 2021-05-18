const burger__menu = document.querySelector('.burger__menu');
const header__nav = document.querySelector('.header__nav');
if(burger__menu){
    burger__menu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    burger__menu.classList.toggle('_burger__active');
    header__nav.classList.toggle('_burger__active');
    });
}

  const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
 if(menuLinks.length > 0){
     menuLinks.forEach(menuLink => {
         menuLink.addEventListener("click", onMenuLinkClick);
     });
     function onMenuLinkClick(e){
         const menuLink = e.target;
         if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
             const gotoBlock = document.querySelector(menuLink.dataset.goto);
             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
             if(burger__menu.classList.contains('_burger__active')){
                document.body.classList.remove('_lock');
                burger__menu.classList.remove('_burger__active');
                header__nav.classList.remove('_burger__active');
             }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDafault();
        }
     }
 }