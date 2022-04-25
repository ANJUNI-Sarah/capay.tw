
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
        time=setInterval(change,3000);
        

//animation//
        function fadeTo(){
            let els=$('.fadeTo')

            for(let j=0; j<els.length;j++){
                if(els.eq(j).offset().top<=$(window).scrollTop()+$(window).height()) {
                    els.eq(j).fadeTo(300,1)}
                else{els.eq(j).css(
                    'opacity', '0'
                )}
            }
        }

        // function fadeOut(){
        //     let els=$('.fadeOut')

        //     for(let j=0; j<els.length;j++){
        //         if(els.eq(j).offset().top<=$(window).scrollTop()+$(window).height()) {
        //             els.eq(j).fadeTo(1000,1)
        //         }
        //         else{els.eq(j).css(
        //             'opacity', '0'
        //         )}
        //     }
        // }


        $(window).scroll(fadeTo)
        // $(window).scroll(fadeOut)
