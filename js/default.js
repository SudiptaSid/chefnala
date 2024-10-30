// ----- Menu Toggle
$(document).on('click', '#sidebar1-toggle', function (e) {
    $('body').toggleClass('sidebar1-active');
});

$(document).click(function (e) {
    var container = $("#sidebar1-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('sidebar1-active')) {
            $('body').removeClass('sidebar1-active');
        }
    }
});

// ----- Chef Dashboard Menu Toggle
$(document).on('click', '#sidebar2-toggle', function (e) {
    $('#chef-dashboard-sidebar').toggleClass('sidebar2-hide');
    $('.page-wrapper').toggleClass('stick-left');
});

// ----- Page Load Modal
$(window).load(function () {
    $('#coomingsoon-modal').modal('show');
});

// ------ Creator Slider
$('#creator-slider').owlCarousel({
    margin: 0,
    items: 1,
    dots: true,
    nav: false,
    navText: ["<span class='fa fa-long-arrow-left'></span>", "<span class='fa fa-long-arrow-right'></span>"],
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass: false,
});

// ----- Product Slider
$('.thumb-slider-1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    // Autoplay
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    // Smart Speed
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        425: {
            items: 2,
            nav: false,
        },
        768: {
            items: 3,
            nav: false,
        },
        1024: {
            items: 4,
        }
    }
})

// ----- Testimonial Slider
$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    // Autoplay
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    // Smart Speed
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        650: {
            items: 2,
        },
        768: {
            items: 3,
        }
    }
})

// ----- Quantity
$(function ($) {
    var options = {
        minimum: 1,
        maximize: null,
        onMinimum: function (e) {
            console.log('reached minimum: ' + e)
        },
        onMaximize: function (e) {
            console.log('reached maximize' + e)
        }
    }
    $('#handleCounter').handleCounter(options)
})

// ----- Phone
$(document).ready(function () {
    $('.input-phone').intlInputPhone();
});

// ----- File Upload
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.image-title').html(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

// ----- Copy Clipboard
function copyText(nodeEl) {
    // Identify hidden field
    var hiddenPut = document.getElementById('copyMaker');
    // Passes nodeEl contents to hidden field's value
    hiddenPut.value = nodeEl.innerHTML;
    // Selects hidden field's contents
    hiddenPut.select();
    // Copy
    document.execCommand('copy');
}

// ----- Multi Datepicker
$('#chef-calendar').multiDatesPicker({
    numberOfMonths: 2,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});