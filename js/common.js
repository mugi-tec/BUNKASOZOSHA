// JS Information ======================================================
// Site URL:http://machiaruki.com/bunkasozosha/
// File name:common.js
// Summary:共通スクリプト
// Created:2020-9-15
// Last update:2020-9-15 by Sadaoka
// Copyright:(C) BUNKASOZOSHA Co.,Ltd.
//======================================================================

//TOPメインの縦サイズをブラウザーの高さに合わせる
$(function(){
  var $innerHeight = window.innerHeight;
  $('header #gn').css('height', $(window).innerHeight()+'px')
});

//フローティングメニュー
jQuery(function() {
  var nav = jQuery('header .floating');
  // メニューのtop座標を取得する
  var offsetTop = nav.offset().top;
  var floatMenu = function() {
      // スクロール位置がメニューのtop座標を超えたら固定にする
      if (jQuery(window).scrollTop() > offsetTop) {
          nav.addClass('fixed');
      } else {
          nav.removeClass('fixed');
      }
  }
  jQuery(window).scroll(floatMenu);
  jQuery('body').bind('touchmove', floatMenu);
});

//スムーススクロール
$(function(){
  var headerHeight = 0; //ヘッダの高さ
   $('a[href^="#"]').on('click', function(){
      var speed = 400;
      var href= $(this).attr('href');
      var target = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top-headerHeight;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

//ハンバーガーメニュー
var $content = $('#wrapper'),
    $drawer = $('#gn_main'),
    $button = $('.menu-trigger'),
    isOpen = false;
(function($){
  $("#gn li").hover(
    function(){$(this).addClass('active');},
    function(){$(this).removeClass('active');}
  );
  $button.on('touchstart click', function () {
    if(isOpen) {
      $button.removeClass('active');
      $drawer.removeClass('open');
      $content.removeClass('open');
      $("#overlay").fadeOut("fast");
      isOpen = false;
    } else {
      $button.addClass('active');
      $drawer.addClass('open');
      $content.addClass('open');
      $("#overlay").fadeIn("fast");
      isOpen = true;
    }
    return false;
  });
  $('#overlay').on('touchstart click', function (e) {
    e.stopPropagation();
    if(isOpen) {
      e.preventDefault();
      $button.removeClass('active');
      $drawer.removeClass('open');
      $content.removeClass('open');
      $("#overlay").fadeOut("fast");
      isOpen = false;
    }
  });
})(jQuery);

//スクロールフェードイン
$(document).ready(function () {
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin');
      }else{
        $(this).removeClass('scrollin');
      }
    });
  });
});

//スクロールインバナー
$(function() {
  var bannerBox = $('.scroll_banner_box');
  var closeFlag = false;
  bannerBox.hide();
  //スクロールが100に達したらバナー表示
  $(window).scroll(function () {
    if (closeFlag == true) {
      return;
    }
    if ($(this).scrollTop() > 100) {
      bannerBox.fadeIn('fast');
    } else {
      bannerBox.fadeOut('fast');
    }
  });
  //クローズボタン
  $('.scroll_banner_box .close').click(function(){
    bannerBox.hide();
    closeFlag = true;
  });
});

// PageTopボタン
$(document).ready(function() {
  var pagetop=$('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn('fast');
    }
    else {
      pagetop.fadeOut('fast');
    }
  }
  );
  pagetop.click(function () {
    $('body, html').animate( {scrollTop: 0}, 500);
    return false;
  });
});