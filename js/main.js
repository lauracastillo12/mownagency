$(document).ready(function(){
    var imgItems = $('.slider li').length;
    var imgPos = 1;

    for(i = 1; i <=imgItems; i++){
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>')


    }
    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color': '#01c0dc'});

    $('.pagination li').click(pagination);

    setInterval(function(){
        nextSlider();
    }, 5000); 
    
    function pagination(){
        var paginationPos = $(this).index() + 1;

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos + ')').fadeIn();
        $('.pagination li').css({'color': '#03A0B6'});
        $(this).css({'color': '#B8F5FE'});
        
        imgPos = itemPosition;

    }

    function nextSlider(){
        if( imgPos >= imgItems){imgPos = 1;}
        else {imgPos++;}

        $('.pagination li').css({'color': '#63daec'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': '#01c0dc'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
});




