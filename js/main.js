const inicio = () => {
    const hidMenu = () => {
        navigationMenu.style.width = '0';
        // contentSection.style.marginLeft = '0';
    } 
    const showMenu = () =>  {
        navigationMenu.style.width = '250px';
        // contentSection.style.marginLeft = '270px';
    }
    
    
    let navigationMenu = document.querySelector('.content-navigation');
    let contentSection = document.querySelector('.articles-content');
    
    let displayMenuBtn = document.querySelector('#show-btn');
        displayMenuBtn.addEventListener('click', showMenu, false);
    let hidMenuBtn = document.querySelector('#close-btn');
        hidMenuBtn.addEventListener('click', hidMenu, false);
    
}
window.addEventListener('load', inicio, false);

