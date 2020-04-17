$(document).ready(function(){
    $('.click').click();

	$('.mob-start').on('click', function () {
        if($('.mob-start').hasClass('mob-start--active')){
            $('.mob-start').removeClass('mob-start--active');
            $('.nav').removeClass('menu--active');
        }else{
            $('.mob-start').addClass('mob-start--active');
            $('.nav').addClass('menu--active');
        }                           
  });
  $('.show-video').on('click', function () {
    $('.result-item__video').removeClass('active');
     $('.show-video').removeClass('active');
      $(this).addClass('active');
    $(this).parent().siblings('.result-item__video').addClass('active');
  });

  $('.select-heading').on('click', function() {
      if ($(this).parent().hasClass('select--active')) {
          $(this).parent().removeClass('select--active');
      } else {
          $(this).parent().addClass('select--active');
      }
  });
  if ($(window).width() < 800) {
      $('.search-head').appendTo('.nav');
  }

  $(window).resize(function() {
    console.log('test');
    if ($(window).width() < 800) {
      $('.search-head').appendTo('.nav');
    }
   
  });
  $('.select-list li').on('click', function() {
      var nameSelectItem = $(this).html();
      $(this).closest('.select-block').siblings('.select-heading').html(nameSelectItem);
      $('.select').removeClass('select--active');
       $('.searchInput').val(""); 
        $('.select-list li a ').css('display','block');
   });
  $(document).click(function(event) { 
      if(!$(event.target).closest('.select').length) { 
        if($('.select').hasClass('select--active')){
            $('.select').removeClass('select--active');
        }
      }  
  });
  $('[data-fancybox]').fancybox({
    loop : true
  });
  $('.search-head__mobile').on('click', function () {
      $('.search-head').addClass('search--active');
  });
  $('.bonus-close').on('click', function () {
      $('.bonus').removeClass('active');
  });
  $('.user').on('click', function () {
      $('.mobile-login').toggle('user--active');
  });
  $('.search-head-close ').on('click', function () {
      $('.search-head').removeClass('search--active');
  });
  $('.asside-start').on('click', function () {
        if($('.asside-start').hasClass('mob-start--active')){
            $('.asside-start').removeClass('mob-start--active');
            $('.asside').removeClass('menu--active');
        }else{
            $('.asside-start').addClass('mob-start--active');
            $('.asside').addClass('menu--active');
        }                           
  });
  $('.vakanc-btn').on('click', function () {
       var vakancName = $(this).data('vakanc-name');
       $('.popup_hidden_input').val(vakancName);             
  });
  $('.video-group').on('click', function () {
       $('.video-group').removeClass('active');
       $(this).addClass('active');    
  });
  $('.next-video').on('click', function (e) {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    }else {
      var video = $('.video-player video')[0];
      var urlVideo = $(this).data('src');
      $('.video-player iframe').attr('src', urlVideo);
      $('.next-video').removeClass('active');
      $(this).prev().addClass('show');
      $(this).removeClass('show');
      $(this).addClass('active');
    }
           
  });
  $('.quetion-link').on('click', function (e) {
    $('.quetion-answer').css('display','flex');
           
  });



  $('.test-answer-item input').on('click', function (e) {
    if($('.test-answer-item input').is(':checked')){
      var count = 0;
      count += 1;
      console.log(count);
      
    }
           
  });
  

  $('.modal-video-close').on('click', function (e) {
    $(this).parent().removeClass('active');
           
  });
  $('.copy-link-btn').click(function() {
    var link = $(".referal-input").select();
 
    document.execCommand("copy");
    
});
  $('.video-info__play').on('click', function (e) {
    $('.quetion-answer').css('display','flex');
    var video = $(this).parent().siblings('video')[0];       
    $(this).parent().css('display','none');
    video.load();
  });
  $('.show-btn').on('click', function (e) {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().parent().siblings('.result-item__content').css('display','none');
    }else {
      $(this).addClass('active');
      $('.result-item__content').css('display','none');
      $(this).parent().parent().siblings('.result-item__content').css('display','block');
    }
    
           
  });

  $('.menu li span').on('click', function () {
        if($(this).parent().hasClass('sub-part--active')){
            $('.menu li').removeClass('sub-part--active');
            
        }else{
             $('.menu li').removeClass('sub-part--active');
             $(this).parent().addClass('sub-part--active');
        }                           
  });
  $('.phone-mask').inputmask("+7 (999) 999-99-99");
  //$(".mail").inputmask({ alias: "email"});

  
  $('.way ').waypoint({
    handler: function() {
    $(this.element).addClass("way--active")
    },
    offset: '100%'
  });

  $('.training-slide ').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2800,
      speed:700,
      arrows:true,
      dots:true,
      prevArrow: $('.galler-sl-arrow--prev'),
      nextArrow: $('.galler-sl-arrow--next '),
       responsive: [
          {
            breakpoint: 980,
            settings: {
             slidesToShow: 4,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 2,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]     
            
  });
  $('.predmet-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2800,
      speed:700,
      arrows:true,
      dots:true,
      focusOnSelect:true,
      prevArrow: $('.slider-index-arrow--prev'),
      nextArrow: $('.slider-index-arrow--next'),
       responsive: [
          {
            breakpoint: 980,
            settings: {
             slidesToShow: 3,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]     
            
  });
  $('.searchInput').bind('keyup', function() {

    var input, filter, ul, li, a, i;
    input = $(this);
    filter =$(this).val().toUpperCase();
    console.log(filter);
    a = $(this).siblings('.select-list').find('a');
    console.log(a);
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  });

  $('.review-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2800,
      speed:700,
      pauseOnHover:false,
      pauseOnFocus:false,
      focusOnSelect:false,
      draggable:true,
      arrows:false,
      dots:true,
      prevArrow: $('.galler-sl-arrow--prev'),
      nextArrow: $('.galler-sl-arrow--next '),
       responsive: [
          {
            breakpoint: 980,
            settings: {
             slidesToShow: 3,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]     
            
  });
  $('.review-lesson-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2800,
      speed:700,
      pauseOnHover:false,
      pauseOnFocus:false,
      focusOnSelect:false,
      draggable:true,
      arrows:false,
      dots:true,
       responsive: [
          {
            breakpoint: 980,
            settings: {
             slidesToShow: 2,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]     
            
  });
  $('.partner-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2800,
      speed:700,
      pauseOnHover:false,
      pauseOnFocus:false,
      arrows:true,
      responsive: [
          {
            breakpoint: 984,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]     
  });


  //Валидация формы
  $('.btn-form').on('click', function () {
       if ( validateForm() ) { // если есть ошибки возвращает true
      event.preventDefault();
    }                     
  });


  function validateForm() {
    $(".text-error").remove();
    console.log('edsad');
    // Проверка логина    
    var el_l    = $("#login");
    if ( el_l.val().length < 2 ) {
      var v_login = true;
      el_l.after('<span class="text-error for-login">Поле Имя обязательно к заполнению</span>');
      $(".for-login").css({top: el_l.position().top + el_l.outerHeight() + 2});
    } 
    $("#login").toggleClass('error', v_login );
    
    
    

 
    // Проверка e-mail
    
    var reg     = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var el_e    = $("#email");
    var v_email = el_e.val()?false:true;
  
    if ( v_email ) {
      el_e.after('<span class="text-error for-email">Поле e-mail обязательно к заполнению</span>');
      $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
    } else if ( !reg.test( el_e.val() ) ) {
      v_email = true;
      el_e.after('<span class="text-error for-email">Вы указали недопустимый e-mail</span>');
      $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
    }
    $("#email").toggleClass('error', v_email );
    
    
    var el_p = $("#phone");
    if ( el_p.val().length < 4 ) {
      var v_p = true;
      el_p.after('<span class="text-error for-phone">Поле номер телефона обязательно к заполнению</span>');
      $(".for-phone").css({top: el_p.position().top + el_p.outerHeight() + 2});
    } 
    $("#phone").toggleClass('error', v_p );


    var el_m = $("#message_f");
    if ( el_m.val().length < 4 ) {
      var v_m = true;
      el_m.after('<span class="text-error for-message">Поле сообщение обязательно к заполнению</span>');
      $(".for-message").css({top: el_m.position().top + el_m.outerHeight() + 2});
    } 
    $("#message_f").toggleClass('error', v_m );


    return ( v_login || v_email  || v_p || v_m );
  }



  $(document).click(function(event) { 
      if(!$(event.target).closest('.message').length) { 
        if($('.alert').hasClass('alert--active')){
            $('.alert').removeClass('alert--active');
        }
      }  
  });
  $('.my-alert__close').click(function(event) {
      $('.alert').removeClass('alert--active');
  });   

 
});  