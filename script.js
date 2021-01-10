let logo = $('.navbar-brand');
let home = $('#home');
let btn = $('#top-button');

logo.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1750);
    $(this).css("color","white");
});

home.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1750);
    $(this).css("color","white");
});

$("li a").click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top - 30
    }, 1750);
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1750);
});
