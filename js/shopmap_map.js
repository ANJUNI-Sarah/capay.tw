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


$(window).scroll(fadeTo)