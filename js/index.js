//一楼广告轮播图  （未加载后台的效果）

//设置大总管变量：不同途径控制相同元素的效果，都通过大总管变量来实现
var moved=0;   //移动的图片个数
//设置图片轮播定时器
var timer=setInterval(move,2000);
//定时器调用的函数
function move(){
  moved++;
  //图片循环轮播    //moved =  moved == 5 ? 0 : moved  三目表达式
  if(moved==5){
    moved=0;
  }
  //获取页面轮播图片,让moved图片显示，兄弟图片隐藏；
  $(".banner-img>li").eq(moved).show().siblings('li').hide(); 
  //可以将show和hide变成淡入淡出的效果：fadeIn(300):淡入fadeOut(300):淡出,stop()解决动画叠加问题
  //$(".banner-img>li").eq(moved).stop().fadeIn(500).siblings('li').stop().fadeOut(500);
  //获取页面小圆点,让与图片对应的小圆点变红色，其他便灰色
  $(".indicators>li").eq(moved).css('background','#c40237').siblings('li').css('background','#fff');
}
//鼠标悬停定时器停止，图片停止轮播
$(".banner").hover(function(){
  //alert("鼠标移入");  测试
  clearInterval(timer);  //移入关闭图片轮播的定时器
},function(){
  //alert("鼠标移出");   测试
  timer=setInterval(move,2000);   //移除启动图片轮播的定时器
})
//鼠标控制小圆点，点到第几个就显示第几张图片，鼠标移开启动定时器
//鼠标移入小圆点
$(".indicators>li").mouseenter(function(){  
  //不用清理定时器，因为鼠标进入图片的div是整个大轮播的div，当鼠标指向小圆点时，定时器已被清理关闭
  moved=$(this).index();  //获得当前移入的小圆点的下标
  //获取页面轮播图片,让moved图片显示，兄弟图片隐藏；
  $(".banner-img>li").eq(moved).show().siblings('li').hide(); 
  //获取页面小圆点,让与图片对应的小圆点变红色，其他变灰色
  $(".indicators>li").eq(moved).css('background','#c40237').siblings('li').css('background','#fff');
})
//鼠标移出小圆点
$(".indicators>li").mouseenter(function(){
  clearInterval(timer);
})
//左右按钮的点击效果
$(".ck-left").click(function(){
  moved--;
  if(moved==-1){
    moved=4;
  }
  //获取页面轮播图片,让moved图片显示，兄弟图片隐藏；
  $(".banner-img>li").eq(moved).show().siblings('li').hide(); 
  //获取页面小圆点,让与图片对应的小圆点变红色，其他便灰色
  $(".indicators>li").eq(moved).css('background','#c40237').siblings('li').css('background','#fff');
})
$(".ck-right").click(function(){
  moved++;
  if(moved==5){
    moved=0;
  }
  //获取页面轮播图片,让moved图片显示，兄弟图片隐藏；
  $(".banner-img>li").eq(moved).show().siblings('li').hide(); 
  //获取页面小圆点,让与图片对应的小圆点变红色，其他便灰色
  $(".indicators>li").eq(moved).css('background','#c40237').siblings('li').css('background','#fff');
})

//二楼多页面效果

//设置列表个数
var list=0;
//当鼠标移入对应的标题时，显示相应的列表信息
$(".list-title>li").mouseenter(function(){
  list=$(this).index();  //获得当前list-title下li的下标
  //获取页面产品列表图片,让moved列表显示，兄弟列表隐藏；
  $(".list-product>div").eq(list).show().siblings('div').hide(); 
  //获取上边列表,让与图片对应的列表项添加红色下边框和小三角，其他变黑色
  $(".list-title>li").eq(list).css({'border-bottom':'3px solid #c5023a',
    'background':'url(../img/icons/arrow2.png)no-repeat center bottom'}).siblings('li').css({'border-bottom':'3px solid #000',
    'background':'none'});
})
