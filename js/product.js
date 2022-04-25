
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

    $(window).on('load',fadeTo)
    $(window).scroll(fadeTo)



    function circle(){
        let els=$('.circle')
        let els_opacity=els.eq(-1).css('opacity')
        let X=[]
        let Y=[]

            for(i=0;i<els.length;i++){
                X.push(els.eq(i).offset().left);//(859,389,868)
                Y.push(els.eq(i).offset().top);//(610,780,966)
            }
            console.log(X)
            console.log(Y)


            let a=1
            
            setInterval(
                function(){
                    if(a<=3){
                        for(j=0;j<els.length;j++){
                            els.eq(j).animate({left:X[(j+a)%els.length]-X[(j)%els.length],top:Y[(j+a)%els.length]-Y[(j)%els.length]
                            });
                        }
                a++;
            }},2000)
        }

    $(window).on('load',circle)


        



    



