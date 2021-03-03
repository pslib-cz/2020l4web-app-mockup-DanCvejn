$('.reg').click(function(){
    $(this).removeClass('darker');
    $('.log').addClass('darker');
    $('.register').removeClass('notactive');
    $('.login').addClass('notactive');
    $('.register').addClass('active');
    $('.login').removeClass('active');
    $('.container').removeClass('mt-15');
    $('.container').addClass('mt-5');
})

$('.log').click(function(){
    $(this).removeClass('darker');
    $('.reg').addClass('darker');
    $('.login').removeClass('notactive');
    $('.register').addClass('notactive');
    $('.register').removeClass('active');
    $('.login').addClass('active');
    $('.container').removeClass('mt-5');
    $('.container').addClass('mt-15');
})

$('.menuOpener').click(function(){
    $('.menu').removeClass('close');
})

$('.menuCloser').click(function(){
    $('.menu').addClass('close');
})