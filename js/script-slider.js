$(document).ready(function () {

    var imgItem = $('.slider li').length; //Determino cantidad de slides
    var pagPos = 0;
    var tiempo = 1500;

    //Agregar paginación.
    for (var i = 0; i < imgItem; i++) {
        $('.paginacion').append('<li class="fa fa-heart-o"></li>')
    }

    //Armar slider
    $('.slider li').hide(); //Oculta todos los slider
    $('.slider li').first().show();
    $('.paginacion li').first().css({ 'color': 'black' });

    //Llamar funciones
    $('.paginacion li').click(cambiar);
    $('.der span').click(siguiente);
    $('.izq span').click(atras);


    setInterval(function () {
        siguiente();
    }, tiempo);

    setInterval2(function () {
        atras();
    }, tiempo);

    function cambiar() {
        pagPos = $(this).index();
        $('.slider li').hide();
        $('.slider li').eq(pagPos).fadeIn();
        $('.paginacion li').css({ 'color': 'silver' });
        $('.paginacion li').eq(pagPos).css({ 'color': 'black' });
    }

    function siguiente() {
        if (pagPos >= imgItem - 1) {
            pagPos = 0;
        } else {
            pagPos++;        }


        $('.paginacion li').css({ 'color': 'silver' });
        $('.paginacion li').eq(pagPos).css({ 'color': 'black' });

        $('.slider li').hide();
        $('.slider li').eq(pagPos).fadeIn();
    }

    function atras() {
        if (pagPos <= 0) {
            pagPos = imgItem - 1
        } else {
            pagPos--;
        }

        $('.paginacion li').css({ 'color': 'silver' });
        $('.paginacion li').eq(pagPos).css({ 'color': 'black' });

        $('.slider li').hide();
        $('.slider li').eq(pagPos).fadeIn();
    }
    
});