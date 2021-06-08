function random_color() {
    var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    color = '#'  //this is what we'll return!
    for(var i = 0; i < 6; i++) 
    {
        x = Math.floor((Math.random()*16))
        color += rgb[x]; 
    }
    return color;
}

$(document).ready(function(){
    $('#large_box').click(function(){
        //alert('you clicked the big box!');  
        //comenta esto cuando hayas averiguado para qué se utiliza event.stopPropagation 
        $(this).css('background-color',random_color());
        
        //Using traversing
        $(this).children().css('background-color',random_color());
        
        //Using selectors
        //$('.side_box, .middle_box, #large_box').css('background-color',random_color);
        event.stopPropagation();
    });

    $('.side_box').click(function(event){
        //alert('you clicked the side box!');

        //Si queremos cambiar el color de todos los hermanos...
        //$(this).siblings().css('background-color',random_color());

        //Si queremos cambiar a todos los hermanos que tengan la misma clase...
        $(this).siblings('.side_box').css('background-color',random_color());
        event.stopPropagation();
    });

    $('.middle_box').click(function(event){
        //alert('you clicked the middle box!');
        $(this).parent().css('background-color',random_color());
        event.stopPropagation();
    })
});