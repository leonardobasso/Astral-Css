$(document).ready(function () {
    $('.burger').click(function (e) { 
        $('.navbar').toggleClass('burger-close');
        console.log('ciao');
        e.preventDefault();
        
    });
});