

$('.content_coll_goods__img').hover(function(){
     $(this).find('.conrent_goods-hidden-layer').toggleClass('conrent_goods-unhidden-layer')
})
   
$('.menu_btn').click(function(){
    $('.menu_hidden').toggleClass('menu_hidden-look');
})