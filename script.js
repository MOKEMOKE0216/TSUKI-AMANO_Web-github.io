window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};

$(function() {
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
  
      var offsetY = 150; // オフセット（ピクセル）
      var target = $(this.hash);
  
      if (target.length) {
        var targetPosition = target.offset().top - offsetY;
        var currentPosition = $(window).scrollTop();
        var distance = Math.abs(currentPosition - targetPosition);
  
        var baseSpeed = 300; // 基本速度（ミリ秒）
        var speedFactor = 0.25; // 距離に応じた速度係数
        var speed = baseSpeed + (distance * speedFactor);
  
        $('html, body').animate({
          scrollTop: targetPosition
        }, speed, 'swing'); // 'swing'を使用して滑らかなスクロール
      }
    });
  });



  window.addEventListener('scroll', function(){
    // スクロール量を取得
    const scroll = window.scrollY;
    // 画面の高さを取得
    const windowHeight = window.innerHeight;
    // すべての.boxを取得
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(function(box) {
      // boxまでの高さを取得
      const distanceToBox = box.offsetTop;
      // 下記条件が成り立つときだけboxにis-activeクラスを付与する
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });




  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });


  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.profilebox');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });

  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.DISCOGRAPHY_slide');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });

  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.DISCOGRAPHY_slide2');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });

  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.DISCOGRAPHY_slide3');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });

  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.IL_box1');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });

  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.IL_box2');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });


  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.IL_box3');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });

  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.timeline');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });

