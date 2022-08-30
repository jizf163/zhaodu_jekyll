<<<<<<< HEAD
$('.hover_').on('mouseenter',function (e) {
    var This=$(this);
    var hin = This.attr('data-in');
    This.addClass(hin);
    This.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend  animationend',function () {
        $(this).removeClass(him);
    });
=======
$('.hover_').on('mouseenter',function (e) {
    var This=$(this);
    var hin = This.attr('data-in');
    This.addClass(hin);
    This.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend  animationend',function () {
        $(this).removeClass(him);
    });
>>>>>>> 410b6ee1872d5ee4cc61a1f8f098a987d766dada
});