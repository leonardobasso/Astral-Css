$(document).ready(function () {
    $('.burger').click(function (e) { 
        $('.navbar').toggleClass('burger-close');
        $('.nav-items').toggleClass('menu-open');

        console.log('ciao');
        e.preventDefault();
        
    });
});