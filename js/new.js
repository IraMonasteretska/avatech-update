$(document).ready(function(){

    // Main Slider
    $('.mainslider').slick({
        arrows: false,
        dots: true,
    });


    var windowWidth = $(document).width(),
    containerWidth = $('.container').width(),
    paddingContainer = ((windowWidth - containerWidth) / 2)
    // right
    $('.mainslider .slick-dots').css('right', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        // right
        $('.mainslider .slick-dots').css('right', paddingContainer);
    });
    

    // input type file
    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
          $(".file-upload").removeClass('active');
          $("#noFile").text("No file chosen..."); 
        }
        else {
          $(".file-upload").addClass('active');
          $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
        }
      });


});