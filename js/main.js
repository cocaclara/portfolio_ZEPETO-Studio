"use strict";

$(document).ready(function () {
  // .lnb li 마우스 오버(아웃) 시
  $('.lnb').mouseover(function(){
    $(this).siblings('a').css('color','#fff');
  });
  $('.lnb').mouseout(function(){
    $(this).siblings('a').css('color','#bababa');
  });


  // 브라우저의 크기가 변하면 대상 엘리먼트의 위치값을 다시 할당
  // $(window).on('resize', function() {
  //   insertTargetPosition();
  // });


  // 스크롤 조절에 따라 .fade-up에 'on'클래스 추가하기(1번만)
  $(window).scroll(function(){
    $('.fade-up').each(function(){
      var $this = $(this),
          $window_top = $(window).scrollTop(),
          $window_bottom = $(window).scrollTop() + $(window).height(),
          $element_top = $this.offset().top;    // .offset()은 좌표값
  
      // var element_bottom = $this.offset().top + $this.outerHeight()/3;
      // if( window_bottom > element_bottom ){
      //   $this.addClass('on');
      // }

      // 윈도우 창화면(top, bottom) 사이에 element가 들어갈 때
      if( $window_top <= $element_top && $window_bottom >= $element_top){
        $this.addClass('on');
      }
    });
  });
  // 초기 화면에서 페이드업 보이기
  $('.fade-up').each(function(){
    var $this = $(this),
        $window_top = $(window).scrollTop(),
        $window_bottom = $(window).scrollTop() + $(window).height(),
        $element_top = $this.offset().top;    // .offset()은 좌표값

    // 윈도우 창화면(top, bottom) 사이에 element가 들어갈 때
    if( $window_top <= $element_top && $window_bottom >= $element_top){
      $this.addClass('on');
    }
  });

});
