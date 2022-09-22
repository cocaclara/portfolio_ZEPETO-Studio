"use strict";

$(document).ready(function () {
  var cachedWidth = $(window).width();  // 리사이즈 전 뷰포트 너비

  // 리사이즈 시 자동 새로고침********************
  $(window).resize(function(){
    var newWidth = $(window).width();  // 리사이즈 후 뷰포트 너비

     //리사이즈 전과 후의 너비값이 '다를 때' -> 마지막 사이즈 조절 시간에 따라 새로고침하기
    if(newWidth !== cachedWidth){
      var delay = 300;          //resize 종료 후 0.3s마다 새로고침하기 위한 변수
      var re_timer;             //re_timer 변수 선언;

      
      clearTimeout(re_timer);   //실행한 함수를 취소할 때 사용

      //리사이즈 한 뒤 0.3초 후 새로고침 실행 함수
      re_timer = setTimeout(function(){  //일정 시간 후 함수 실행
        document.location.reload();     //새로고침
      }, delay);                        //0.3s 후

      //=================
      cachedWidth = newWidth;
    }
  });


  // 윈도우창 변수 선언
  var wd = $(window).innerWidth();


  // 윈도우 width가 1190px이상일 때, 헤더 변경
  if (wd >= 1200) {   //1200px 이상일 때
    // .gnb > li 마우스오버(아웃) 시, a 컬러 변경(유지)
    $('.gnb > li').mouseover(function(){
      $(this).children('a').addClass('hover');
    });
    $('.gnb > li').mouseout(function(){
      var $this_lnb = $(this).find('.lnb');

      $(this).children('a').removeClass('hover');
          
      if( $(this).has('ul') && $('.lnb').is(':visible') ){
        $this_lnb.siblings('a').addClass('hover');
      }else{
        $this_lnb.siblings('a').removeClass('hover');
      }
    });
    // .lnb 마우스 오버(아웃) 시, .gnb li a 컬러 변경(유지)
    $('.lnb').mouseover(function(){
      $(this).siblings('a').addClass('hover');
    });
    $('.lnb').mouseout(function(){
      $(this).siblings('a').removeClass('hover');
    });

    
  }else{  // 1199px 미만일 때, 헤더
    $('.gnb > li > a').css('color','#000008');
    // .gnb > li 마우스오버(아웃) 시)
    $('.gnb > li').mouseover(function(){
      $(this).children('a').addClass('change-hover');
    });
    $('.gnb > li').mouseout(function(){
      $(this).children('a').removeClass('change-hover');
          
      if( $('.lnb').is(':visible') ){
        $(this).children('a').addClass('change-hover');
      }else{
        $(this).children('a').removeClass('change-hover');
      }
    });
    // .lnb 마우스 오버(아웃) 시, .gnb li a 컬러 변경(유지)
    $('.lnb').mouseover(function(){
      $(this).siblings('a').addClass('change-hover');
    });
    $('.lnb').mouseout(function(){
      $(this).siblings('a').removeClass('change-hover');
    });
  }

  // @included mobile일 때, gnb li 컬러 변경
  if (wd < 768 ) {    // 768px 미만일 때
    // .gnb > li 마우스오버(아웃) 시, a 컬러 변경(유지)
    $('.gnb > li').mouseover(function(){
      $(this).children('a').css('color','#5c46ff');
    });
    $('.gnb > li').mouseout(function(){
      var $this_lnb = $(this).find('.lnb');

      $(this).children('a').css('color','#000008');
          
      if( $(this).has('ul') && $('.lnb').is(':visible') ){
        $this_lnb.siblings('a').css('color','#5c46ff');
      }else{
        $this_lnb.siblings('a').css('color','#000008');
      }
    });
  }


  // gnb li 클릭했을 때 변경
  $(document).on('click','.gnb > li',function(){
    $(this).children('ul').toggleClass('show');
    
    if( $(this).children('.lnb').is(':visible') ){
      if(wd < 1200){
        $(this).children('a').addClass('change-hover');
      }else{
        $(this).children('a').addClass('hover');
      }
    }
    
    $(this).children('a').removeClass('change-hover','hover');
  });
  
  // .list 버튼 클릭했을 때 nav 보여주기
  $('.list').click(function(){
    $('nav').show();
  });
  // .close 버튼 클릭했을 때 nav 사라지기
  $('.close').click(function(){
    $('nav').hide();
  });



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
