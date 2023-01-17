$(function(){
    //.board li a를 누르면
    $('.board li a').click(function(){
        //눌러진 a의 부모요소에 'on'클래스가 추가되고, 부모의 형제요소들은 .on이 지워진다. 
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    
});