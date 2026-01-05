// /**
// * Template Name: Personal - v2.1.0
// * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */
// !(function($) {
//   "use strict";


//   // Helper: show/hide recent-updates-counter based on header state  
//   function recentupdatescounter() {
//     var $flag = $('.recent-updates-counter');

//     if (!$flag.length) return;

//     // Home is active when #header does NOT have 'header-top'
//     if (!$('#header').hasClass('header-top')) {
//       $flag.removeClass('hidden');
//     } else {
//       $flag.addClass('hidden');
//     }
//   }


//   // Helper: show/hide flag based on header state  recent-updates-counter
//   function updateFlagVisibility() {
//     var $flag = $('.flag-counter');

//     if (!$flag.length) return;

//     // Home is active when #header does NOT have 'header-top'
//     if (!$('#header').hasClass('header-top')) {
//       $flag.removeClass('hidden');
//     } else {
//       $flag.addClass('hidden');
//     }
//   }

//   // Nav Menu
//   $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var hash = this.hash;
//       var target = $(hash);
//       if (target.length) {
//         e.preventDefault();

//         if ($(this).parents('.nav-menu, .mobile-nav').length) {
//           $('.nav-menu .active, .mobile-nav .active').removeClass('active');
//           $(this).closest('li').addClass('active');
//         }

//         if (hash == '#header') {
//           $('#header').removeClass('header-top');
//           $("section").removeClass('section-show');

//           // Show flag on Home
//           updateFlagVisibility();
//           recentupdatescounter();
//           return;
//         }

//         if (!$('#header').hasClass('header-top')) {
//           $('#header').addClass('header-top');
//           setTimeout(function() {
//             $("section").removeClass('section-show');
//             $(hash).addClass('section-show');

//             // Hide flag on non-Home
//             updateFlagVisibility();
//             recentupdatescounter();
//           }, 350);
//         } else {
//           $("section").removeClass('section-show');
//           $(hash).addClass('section-show');

//           // Hide flag on non-Home
//           updateFlagVisibility();
//           recentupdatescounter();
//         }

//         if ($('body').hasClass('mobile-nav-active')) {
//           $('body').removeClass('mobile-nav-active');
//           $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//           $('.mobile-nav-overly').fadeOut();
//         }

//         return false;
//       }
//     }
//   });

//   // Activate/show sections on load with hash links
//   if (window.location.hash) {
//     var initial_nav = window.location.hash;
//     if ($(initial_nav).length) {
//       $('#header').addClass('header-top');
//       $('.nav-menu .active, .mobile-nav .active').removeClass('active');
//       $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
//       setTimeout(function() {
//         $("section").removeClass('section-show');
//         $(initial_nav).addClass('section-show');

//         // On load with hash (not home) -> hide flag
//         updateFlagVisibility();
//         recentupdatescounter();
//       }, 350);
//     }
//   } else {
//     // No hash -> Home by default -> show flag
//     $(window).on('load', updateFlagVisibility);
//     $(window).on('load', recentupdatescounter);
//   }

//   // Mobile Navigation
//   if ($('.nav-menu').length) {
//     var $mobile_nav = $('.nav-menu').clone().prop({
//       class: 'mobile-nav d-lg-none'
//     });
//     $('body').append($mobile_nav);
//     $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
//     $('body').append('<div class="mobile-nav-overly"></div>');

//     $(document).on('click', '.mobile-nav-toggle', function(e) {
//       $('body').toggleClass('mobile-nav-active');
//       $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//       $('.mobile-nav-overly').toggle();
//     });

//     $(document).click(function(e) {
//       var container = $(".mobile-nav, .mobile-nav-toggle");
//       if (!container.is(e.target) && container.has(e.target).length === 0) {
//         if ($('body').hasClass('mobile-nav-active')) {
//           $('body').removeClass('mobile-nav-active');
//           $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//           $('.mobile-nav-overly').fadeOut();
//         }
//       }
//     });
//   } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
//     $(".mobile-nav, .mobile-nav-toggle").hide();
//   }

//   // jQuery counterUp
//   $('[data-toggle="counter-up"]').counterUp({
//     delay: 10,
//     time: 1000
//   });

//   // Skills section
//   $('.skills-content').waypoint(function() {
//     $('.progress .progress-bar').each(function() {
//       $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
//   }, {
//     offset: '80%'
//   });

//   // Testimonials carousel (uses the Owl Carousel library)
//   $(".testimonials-carousel").owlCarousel({
//     autoplay: true,
//     dots: true,
//     loop: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       768: {
//         items: 2
//       },
//       900: {
//         items: 3
//       }
//     }
//   });

//   // Porfolio isotope and filter
//   $(window).on('load', function() {
//     var portfolioIsotope = $('.portfolio-container').isotope({
//       itemSelector: '.portfolio-item',
//       layoutMode: 'fitRows'
//     });

//     $('#portfolio-flters li').on('click', function() {
//       $("#portfolio-flters li").removeClass('filter-active');
//       $(this).addClass('filter-active');

//       portfolioIsotope.isotope({
//         filter: $(this).data('filter')
//       });
//     });

//     // Ensure flag visibility correct after full load
//     updateFlagVisibility();
//     recentupdatescounter();
//   });

//   // Initiate venobox (lightbox feature used in portfolio)
//   $(document).ready(function() {
//     $('.venobox').venobox();
//   });

// })(jQuery);


// // Minimize button
// $(document).on('click', '.flag-minimize', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   $('.flag-counter').addClass('minimized');
// });

// // Maximize button  
// $(document).on('click', '.flag-maximize', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   $('.flag-counter').removeClass('minimized');
// });

//   // Toggle minimize / maximize for flag counter
//   // $(document).on('click', '.flag-toggle-btn', function(e) {
//   //   e.preventDefault();
//   //   $('.flag-counter').toggleClass('minimized');
//   // });

// // Toggle minimize / maximize for flag counter
// // $(document).ready(function() {
// //   $('.flag-toggle-btn').on('click', function(e) {
// //     e.preventDefault();
// //     $('.flag-counter').toggleClass('minimized'); // toggles small/large image
// //   });
// // });

// // Enhanced dropdown support for navigation
// $(document).on('mouseenter', '.dropdown-submenu', function() {
//   $(this).find('.dropdown-menu').first().show();
// });

// $(document).on('mouseleave', '.dropdown-submenu', function() {
//   $(this).find('.dropdown-menu').first().hide();
// });

// // Close submenus when clicking links
// $(document).on('click', '.dropdown-menu a[href^="#"]', function() {
//   $('.dropdown-menu').hide();
// });






// // SCROLL TO TOP on section navigation
// $(document).on('click', '.nav-menu a[href^="#"], .mobile-nav a[href^="#"]', function(e) {
//   // Your existing nav logic...
  
//   // ADD THIS: Scroll to top first, THEN to target
//   $('html, body').stop().animate({
//     scrollTop: 0
//   }, 200, function() {
//     // Then smooth scroll to target section
//     var target = $(hash);
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: target.offset().top - 80  // 80px offset for fixed header
//       }, 800);
//     }
//   });
// });






/**
* Template Name: Personal - v2.1.0
* Template URL: [https://bootstrapmade.com/personal-free-resume-bootstrap-template/](https://bootstrapmade.com/personal-free-resume-bootstrap-template/)
* Author: BootstrapMade.com
* License: [https://bootstrapmade.com/license/](https://bootstrapmade.com/license/)
*/
!(function($) {
  "use strict";

  // Publications Tab Functionality (Merged)
  function initPublicationsTabs() {
    const btnJournals = document.getElementById('btn-journals');
    const btnConferences = document.getElementById('btn-conferences');
    const btnPatents = document.getElementById('btn-patents');
    
    const sectionJournals = document.getElementById('section-journals');
    const sectionConferences = document.getElementById('section-conferences');
    const sectionPatents = document.getElementById('section-patents');

    if (!btnJournals || !sectionJournals) return; // Safety check

    function showSection(section) {
      // hide all sections
      sectionJournals.classList.add('d-none');
      sectionConferences?.classList.add('d-none');
      sectionPatents?.classList.add('d-none');

      // deactivate all buttons
      btnJournals.classList.remove('active', 'btn-primary');
      btnConferences?.classList.remove('active', 'btn-primary');
      btnPatents?.classList.remove('active', 'btn-primary');

      btnJournals.classList.add('btn-outline-primary');
      btnConferences?.classList.add('btn-outline-primary');
      btnPatents?.classList.add('btn-outline-primary');

      // show selected section
      section.classList.remove('d-none');
    }

    btnJournals.addEventListener('click', () => {
      showSection(sectionJournals);
      btnJournals.classList.add('active', 'btn-primary');
      btnJournals.classList.remove('btn-outline-primary');
    });

    btnConferences?.addEventListener('click', () => {
      showSection(sectionConferences);
      btnConferences.classList.add('active', 'btn-primary');
      btnConferences.classList.remove('btn-outline-primary');
    });

    btnPatents?.addEventListener('click', () => {
      showSection(sectionPatents);
      btnPatents.classList.add('active', 'btn-primary');
      btnPatents.classList.remove('btn-outline-primary');
    });

    // default view: Journals active
    showSection(sectionJournals);
    btnJournals.classList.add('active', 'btn-primary');
    btnJournals.classList.remove('btn-outline-primary');
  }

  // Helper: show/hide recent-updates-counter based on header state  
  function recentupdatescounter() {
    var $flag = $('.recent-updates-counter');
    if (!$flag.length) return;

    // Home is active when #header does NOT have 'header-top'
    if (!$('#header').hasClass('header-top')) {
      $flag.removeClass('hidden');
    } else {
      $flag.addClass('hidden');
    }
  }

  // Helper: show/hide flag based on header state  recent-updates-counter
  function updateFlagVisibility() {
    var $flag = $('.flag-counter');
    if (!$flag.length) return;

    // Home is active when #header does NOT have 'header-top'
    if (!$('#header').hasClass('header-top')) {
      $flag.removeClass('hidden');
    } else {
      $flag.addClass('hidden');
    }
  }

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');

          // Show flag on Home
          updateFlagVisibility();
          recentupdatescounter();
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');

            // Hide flag on non-Home
            updateFlagVisibility();
            recentupdatescounter();
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');

          // Hide flag on non-Home
          updateFlagVisibility();
          recentupdatescounter();
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;
      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');

        // On load with hash (not home) -> hide flag
        updateFlagVisibility();
        recentupdatescounter();
      }, 350);
    }
  } else {
    // No hash -> Home by default -> show flag
    $(window).on('load', updateFlagVisibility);
    $(window).on('load', recentupdatescounter);
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Ensure flag visibility correct after full load
    updateFlagVisibility();
    recentupdatescounter();
  });

  // Initiate venobox (lightbox feature used in portfolio)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Minimize button
  $(document).on('click', '.flag-minimize', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.flag-counter').addClass('minimized');
  });

  // Maximize button  
  $(document).on('click', '.flag-maximize', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.flag-counter').removeClass('minimized');
  });

  // Enhanced dropdown support for navigation
  $(document).on('mouseenter', '.dropdown-submenu', function() {
    $(this).find('.dropdown-menu').first().show();
  });

  $(document).on('mouseleave', '.dropdown-submenu', function() {
    $(this).find('.dropdown-menu').first().hide();
  });

  // Close submenus when clicking links
  $(document).on('click', '.dropdown-menu a[href^="#"]', function() {
    $('.dropdown-menu').hide();
  });

  // SCROLL TO TOP on section navigation
  $(document).on('click', '.nav-menu a[href^="#"], .mobile-nav a[href^="#"]', function(e) {
    // Your existing nav logic...
    
    // ADD THIS: Scroll to top first, THEN to target
    $('html, body').stop().animate({
      scrollTop: 0
    }, 200, function() {
      // Then smooth scroll to target section
      var target = $(hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80  // 80px offset for fixed header
        }, 800);
      }
    });
  });

  // Initialize publications tabs on DOM ready
  $(document).ready(function() {
    initPublicationsTabs();
  });

})(jQuery);

  // const btnJournals = document.getElementById('btn-journals');
  // const btnConferences = document.getElementById('btn-conferences');
  // const btnPatents = document.getElementById('btn-patents');

  // const sectionJournals = document.getElementById('section-journals');
  // const sectionConferences = document.getElementById('section-conferences');
  // const sectionPatents = document.getElementById('section-patents');

  // function showSection(section) {
  //   // hide all
  //   sectionJournals.classList.add('d-none');
  //   sectionConferences.classList.add('d-none');
  //   sectionPatents.classList.add('d-none');

  //   // deactivate all buttons
  //   btnJournals.classList.remove('active', 'btn-primary');
  //   btnConferences.classList.remove('active', 'btn-primary');
  //   btnPatents.classList.remove('active', 'btn-primary');

  //   btnJournals.classList.add('btn-outline-primary');
  //   btnConferences.classList.add('btn-outline-primary');
  //   btnPatents.classList.add('btn-outline-primary');

  //   // show selected section
  //   section.classList.remove('d-none');
  // }

  // btnJournals.addEventListener('click', () => {
  //   showSection(sectionJournals);
  //   btnJournals.classList.add('active', 'btn-primary');
  //   btnJournals.classList.remove('btn-outline-primary');
  // });

  // btnConferences.addEventListener('click', () => {
  //   showSection(sectionConferences);
  //   btnConferences.classList.add('active', 'btn-primary');
  //   btnConferences.classList.remove('btn-outline-primary');
  // });

  // btnPatents.addEventListener('click', () => {
  //   showSection(sectionPatents);
  //   btnPatents.classList.add('active', 'btn-primary');
  //   btnPatents.classList.remove('btn-outline-primary');
  // });

  // // default view
  // showSection(sectionJournals);
  // btnJournals.classList.add('active', 'btn-primary');
  // btnJournals.classList.remove('btn-outline-primary');

