$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(2)').addClass('enter')
$('.images>img:nth-child(3)').addClass('enter')
$('.images>img:nth-child(4)').addClass('enter')

setTimeout(()=>{
    $('.images>img:nth-child(1)').removeClass('current').addClass('leave').one(
        'transitionend',(x)=>{$(x.currentTarget).removeClass('leave').addClass('enter')}
    )
    $('.images>img:nth-child(2)').removeClass('enter').addClass('current')
    
},3000)
setTimeout(()=>{
    $('.images>img:nth-child(2)').removeClass('current').addClass('leave').one(
        'transitionend',(x)=>{ $(x.currentTarget).removeClass('leave').addClass('enter')}
    )
    $('.images>img:nth-child(3)').removeClass('enter').addClass('current')
    
},6000)
setTimeout(()=>{
    $('.images>img:nth-child(3)').removeClass('current').addClass('leave').one(
        'transitionend',(x)=>{ $(x.currentTarget).removeClass('leave').addClass('enter')}
    )
    $('.images>img:nth-child(4)').removeClass('enter').addClass('current')
    
},9000)
setTimeout(()=>{
    $('.images>img:nth-child(4)').removeClass('current').addClass('leave').one(
        'transitionend',(x)=>{$(x.currentTarget).removeClass('leave').addClass('enter')}
    )
    $('.images>img:nth-child(1)').removeClass('enter').addClass('current')
    
},12000)