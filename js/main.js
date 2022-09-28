$(window).on('load', function () {
    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
      $('body').addClass('loaded');
      $('body').removeClass('loaded_hiding');
    }, 500);
});

$(document).ready(function () {
    "use strict";
    $(".header_block_burger").click(function() {
        $(this).toggleClass("active");
    });
});