var windowWidth = $(window).width();
$(document).ready(function() {
  $(".humburger, .close_menu").on("click", function(){
      windowWidth < 992 && (
          $('.menu').toggleClass('show_menu'),
          $(".humburger").toggleClass("active_humburger"),
          $(".to-menu").next("ul").removeClass("show_iner_menu"), 
          $(".home-direction").toggleClass("overlay")
      )
  }),
  $(".to-menu").on("click", function() {
      windowWidth < 992 && (
          $(this).next("ul").toggleClass("show_iner_menu"), 
          $(".menu").toggleClass("overflow")
      )
  }), 
  $(".back").on("click", function() {
      windowWidth < 992 && 
      $(this).parent().removeClass("show_iner_menu")
  }),
  $(document).on("mouseup", function(e) {
      var o = $(".menu");
      o.is(e.target) || 0 !== o.has(e.target).length || (
          $(".menu").removeClass("show_menu"), 
          $(".humburger").removeClass("active_humburger"), 
          $(".to-menu").next("ul").removeClass("show_iner_menu"), 
          $(".home-direction").removeClass("overlay"))
    })
})

$(document).ready(function() {
  $("#popup-signin").click(function() {
      $('.form-wrap').addClass("form-right"),
      $('.form-wrap').removeClass("form-left"),
      $(".register").addClass("form-hidden")
  }),
  $("#popup-register").click(function() {
      $('.form-wrap').addClass("form-left"),
      $('.form-wrap').removeClass("form-right"),
      $(".register").removeClass("form-hidden")
  }),
  $(".to-signin-thumb").click(function() {
      $("#form-wrap").removeClass("form-left"), 
      $("#form-wrap").addClass("form-right"),
      $(".register").addClass("form-hidden")
  }),  
  $(".to-register-thumb").click(function() {
      $(".register").removeClass("form-hidden"),
      $("#form-wrap").removeClass("form-right"), 
      $("#form-wrap").addClass("form-left")
  })
  $("#forgot .back-signin").click(function() {
      $('#forgot').modal('hide');
      $("#form-wrap").addClass("form-right");
      $(".register").addClass("form-hidden")
  })
  $(".back-forgot").click(function() {
      $("#signin").modal('hide');
  })
});

$(document).ready(function() {
  $('.status').on("click",function () {
      $(this).toggleClass('gray');
      $(this).html(function(i, v){
        return v === '<i></i> Offline' ? '<i></i> Đang online' : '<i></i> Offline'
    });
  })
});

$(document).ready(function() {
  $('#success-login').click(function () {
    $('.info').toggle(500);
  });
  $('.user-choose .close').click(function () {
    $('.info').toggle(500);
  });
}); 

$(document).ready(function() {
  $('.language p').click(function () {
      $('.user-choose ul li.language ul').toggleClass('toggle-language');
      $('.language p i').toggleClass('toggle-language-icon');
  })
});

$(document).ready(function() {
   $(".content-post .nav-tabs li:first-child").click(function(event) {
       $("#new-reply").addClass('fade')
   });
});

$(document).ready(function(){
   $('.slide-one').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'linear', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-two').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-three').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-four').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

// $(document).ready(function() {
//     $('.button-social, .social ul li div').on("click", function () {
//         $('.social ul').toggleClass("after");
//         $('.button-social').toggleClass("before");
//     })
// });

$(document).ready(function($) {
    $('#community .community-arrow-child').click(function() {
        $('#community .community-main').slideToggle(500),
        $('#community .community-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#hcm-city .hcm-city-arrow-child').click(function() {
        $('#hcm-city .hcm-city-main').slideToggle(500),
        $('#hcm-city .hcm-city-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#hcm-city-2 .hcm-city-2-arrow-child').click(function() {
        $('#hcm-city-2 .hcm-city-2-main').slideToggle(500),
        $('#hcm-city-2 .hcm-city-2-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#job .job-arrow-child').click(function() {
        $('#job .job-main').slideToggle(500),
        $('#job .job-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-sg .community-sg-arrow-child').click(function() {
        $('#community-sg .community-sg-main').slideToggle(500),
        $('#community-sg .community-sg-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-hn .community-hn-arrow-child').click(function() {
        $('#community-hn .community-hn-main').slideToggle(500),
        $('#community-hn .community-hn-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-ct .community-ct-arrow-child').click(function() {
        $('#community-ct .community-ct-main').slideToggle(500),
        $('#community-ct .community-ct-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-z-group .community-z-group-arrow-child').click(function() {
        $('#community-z-group .community-z-group-main').slideToggle(500),
        $('#community-z-group .community-z-group-arrow-child i').toggleClass('toggle');
    });
});





// $(document).ready(function() {
//   $(".community-sg-main ul li .community-sg-forums").click(function() {
//      $('.forum-sg-hidden.active').slideToggle(function(){
//       $(this).removeClass('active');
//      });
//      $(this).find(".forum-sg-hidden").slideToggle(function(){
//         $(this).addClass('active');
//      });
//   });
// });
// 


// $(document).ready(function() {
//   $(".community-sg-main ul li .community-sg-forums").click(function() {
//       $('.forum-sg-hidden').hide(500);
//       $(this).find(".forum-sg-hidden").slideToggle("500");
//   });
// });