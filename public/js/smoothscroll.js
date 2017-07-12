/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
(function(){
    'use strict'
    if(document.querySelector){
        var backToTop = document.querySelector('.scroll');

        if(backToTop){
            var smoothScroll = function(anchor, duration){
                var startLocation = window.pageYOffset;
                var endLocation = anchor.offsetTop;
                var distance = endLocation - startLocation;
                var increments = distance/(duration/16);
                var stopAnimation;

                var animateScroll = function(){
                    window.scrollBy(0, increments);
                    stopAnimation();
                };

                stopAnimation = function(){
                    var travelled = window.pageYOffset;
                    if(travelled <= (endLocation || 0)){
                        clearInterval(runAnimation);
                    }
                };

                var runAnimation = setInterval(animateScroll, 16);
            };

            backToTop.addEventListener('click', function(e){
                e.preventDefault();

                var anchorPoint = backToTop.getAttribute('href');
                var target = document.querySelector(anchorPoint);

                smoothScroll(target, 500);
            });
        }
    }

    //Credits to Robin Leve's Codepen
    //https://codepen.io/rleve/pen/iCbgy
})();
