var resultado = $('#resultado p');
    $('.btn-primary').click(function(){
        resultado.show(1000);
    })
    $('.btn-danger').click(function(){
        resultado.hide(1000);
    })
    $('.btn-warning').click(function(){
        resultado.toggle(1000);
    })

    

var book = $('#book img');
    $('.btn-success').click(function(){
        book.slideDown(1000);
    })
    $('.btn-secondary').click(function(){
        book.slideUp(1000);
    })
    $('.btn-info').click(function(){
        book.slideToggle(1000);
    })