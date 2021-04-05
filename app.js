var resultado = $('#resultado p');
    $('.btn-primary').click(function(){
        resultado.show(1000);
    })
    $('.btn-danger').click(function(){
        resultado.hide(1000);
    })
    $('.btn-warning').click(function(){
        resultado.toggle(1000);
    });

    

var book = $('#book img');
    $('.btn-success').click(function(){
        book.slideDown(1000);
    });
    $('.btn-secondary').click(function(){
        book.slideUp(1000);
    });
    $('.btn-info').click(function(){
        book.slideToggle(1000);
    });


var resultado_fade = $('#resultado_fade ');
    $('.btn-primary').click(function(){
        resultado_fade.fadeIn(2000);
    })
    $('#fOut').click(function(){
        resultado_fade.fadeOut(2000);
    });

var green_text=$('.add_green #green_text p');
    $('.btn-success').click(function(){
        green_text.addClass("add_green");
    });

$('.antes_despues').before( "<b>Hello</b>" );
$('.antes_despues').after( "<b>Bye</b>" );
$(".antes_despues").append("<p>Este es la continuacion de Lorem</p>");

$(".container h1").html("cambio de texto");

$(".imagen2 img").attr("src", "https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg");

$(".imagen2 img").attr("width","50");

$( ".caja_texto input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
.keyup();

$( ".texto p" ).text( "<b>Some</b> new text." );

