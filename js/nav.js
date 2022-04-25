//login//
$(document).ready(function(){
    $('#shopbox').click(function(){
        $('#login-lightBox').css('display','block')
    });
    $('#cancel,#login-lightBox').click(function(){
        $('#login-lightBox').css('display','none')
    });
    $('#lightBox').click(function(lightBox){
        lightBox.stopPropagation();
    })
})


//hb//
$(document).ready(function(){
    $('.hb').click(function(){
        if($('.mobile-main-nav-bg').css('display')== 'none'){
            $('.mobile-main-nav-bg').css('display','block');
            $('.mobile-main-nav').animate({left:0});}
        else if($('.mobile-main-nav-bg').css('display')== 'block'){
            $('.mobile-main-nav').animate({left:-2000});
            setTimeout(function(){
                $('.mobile-main-nav-bg').css('display','none')
            }, 500);;
        }
    })
})


//hb-login//
$(document).ready(function(){
    $('#shopbox2').click(function(){
        $('#login-lightBox').css('display','block')
        $('.mobile-main-nav-bg').css('display','none')
        $('.mobile-main-nav').css({left:-2000})
    });
    $('#cancel,#login-lightBox').click(function(){
        $('#login-lightBox').css('display','none')
    });
    $('#lightBox').click(function(lightBox){
        lightBox.stopPropagation();
    })

})
