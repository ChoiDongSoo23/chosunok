$(function(){
    //submenu 숨긴다.
    $('.submenu_wrap').hide();
    //마우스를 li에 올리면, submenu가 아래로 미끌어지듯 내려온다.
    $('.util li').mouseenter(function(){
        $(this).children('.submenu_wrap').stop().slideDown();
    });
    //마우스가 li(submenu포함)를 벗어나면, submenu가 위로 미끌어지듯 올라간다.
    $('.util li').mouseleave(function(){
        $(this).children('.submenu_wrap').stop().slideUp();
    });
});