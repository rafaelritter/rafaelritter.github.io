$ (document).ready(function () { 
    var nav = document.querySelector('nav');
    var links = document.querySelectorAll('nav a');
    
    console.log('hello world', nav, links);
    
    $('.scroll').click(function() {
        var target = $(this.hash);
        
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        
        return false;
    });
});