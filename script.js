$(document).ready(function(){
  $(".toggle").click(function(){ 
    $(".menu").slideToggle(700);
  });
});

'use strict';


$(function() {


    //settings for slider
    var width = 1000;
    var animationSpeed = 300;
    var pause = 2000;
    var currentSlide = 1;


    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);


    var interval;


    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-=' + width},animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-center', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }


    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);


    startSlider();




});




