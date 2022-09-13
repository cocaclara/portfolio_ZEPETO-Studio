"use strict";

$(document).ready(function () {
  // 리사이즈 시 자동 새로고침********************
  $(window).resize(function(){
    document.location.reload();
  });

  var wd = $(window).innerWidth();

  // 윈도우 width가 1190px이상일 때
  function header_change(){
    if (wd >= 1200) {
      // .gnb > li 마우스오버(아웃) 시, a 컬러 변경(유지)
      $('.gnb > li').mouseover(function(){
        $(this).children('a').css('color','#fff').addClass('hover');
      });
      $('.gnb > li').mouseout(function(){
        $(this).children('a').css('color','#bababa').removeClass('hover');
            
        if( $('.lnb').is(':visible') ){
          $(this).children('a').css('color','#fff').addClass('hover');
        }else{
          // $(this).css('color','#bababa');
          $(this).children('a').removeClass('hover');
        }
      });
      // .lnb 마우스 오버(아웃) 시, .gnb li a 컬러 변경(유지)
      $('.lnb').mouseover(function(){
        $(this).siblings('a').css('color','#fff').addClass('hover');
      });
      $('.lnb').mouseout(function(){
        $(this).siblings('a').css('color','#bababa').removeClass('hover');
      });

    }else{
      // 1190px 미만일 때, 헤더
      $('.gnb > li > a').css('color','$header-black');
      // .gnb > li 마우스오버(아웃) 시)
      $('.gnb > li').mouseover(function(){
        $(this).children('a').css('color','$header-black').addClass('hover');
      });
      $('.gnb > li').mouseout(function(){
        $(this).children('a').css('color','$header-black').removeClass('hover');
            
        if( $('.lnb').is(':visible') ){
          $(this).children('a').addClass('hover');
        }else{
          $(this).children('a').removeClass('hover');
        }
      });
      // .lnb 마우스 오버(아웃) 시, .gnb li a 컬러 변경(유지)
      $('.lnb').mouseover(function(){
        $(this).siblings('a').css('color','$header-black').addClass('hover');
      });
      $('.lnb').mouseout(function(){
        $(this).siblings('a').css('color','$header-black').removeClass('hover');
      });
    }
  }
  header_change();

  $('.gnb > li').click(function(){
    $(this).children('ul').toggleClass('show');
    
    if( $('.lnb').is(':visible') ){
      $(this).children('a').addClass('hover');
    }else{
      $(this).children('a').removeClass('hover');
    }
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
