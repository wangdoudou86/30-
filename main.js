let n 
初始化()

var timerId = setInterval(()=>{
    makeLeave(getImage(n))
    .one('transitionend',(x)=>{makeEnter($(x.currentTarget))
})
makeCurrent(getImage(n+1))
    n += 1
},3000)
$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
  }) //进入画面停止轮播
$('.window').on('mouseleave',function(){
    timerId = setInterval(()=>{
        makeLeave(getImage(n))
        .one('transitionend',(x)=>{makeEnter($(x.currentTarget))
    })
    makeCurrent(getImage(n+1))
        n += 1
    },3000)
}) //离开画面继续轮播
//解决离开页面轮播混乱的bug
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timerId)
    }else{
        timerId = setInterval(()=>{
            makeLeave(getImage(n))
            .one('transitionend',(x)=>{makeEnter($(x.currentTarget))
        })
        makeCurrent(getImage(n+1))
            n += 1
        },3000)
    }
})





function x(n){
    if(n>4){
        n = n%4
        if(n===0)
        {n=4}
    }
    return n // 1 2 3 4
}
function 初始化(){
    n = 1 //踩的坑：这里不要再写let了
    $(`.images>img:nth-child(${n}`).addClass('current').siblings().addClass('enter')
}
function makeLeave($node){
    $node.removeClass('current enter').addClass('leave')
    return $node //如果不写这句，makeLeave()的返回值就是undefined，这样就无法调用one()方法，所以再把$node给传出去
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
    return $node
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}