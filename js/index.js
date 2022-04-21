
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



//banner-change//
    let arr=new Array('1','2','3')
        let t=arr.length;
        let j=arr.length-1;
        function change(){
            let a='.main-banner-pic:nth-child('+arr[t%arr.length]+')'
            $(a).css('z-index',-20000+t);
            $(a).addClass('fade-in');
            t++;
            $('.main-banner-pic:nth-child('+arr[j%arr.length]+')').removeClass('fade-in')
            j++;
        }
        time=setInterval(change,7000)
        function scroll(){
            console.log(window.scrollY);
        }
            
    window.addEventListener("scroll",scroll,false);