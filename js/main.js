"use strict";

$(document).ready(function () {
  // .lnb li 마우스 오버(아웃) 시
  $('.lnb').mouseover(function(){
    $(this).siblings('a').css('color','#fff');
  });
  $('.lnb').mouseout(function(){
    $(this).siblings('a').css('color','#bababa');
  });
});
