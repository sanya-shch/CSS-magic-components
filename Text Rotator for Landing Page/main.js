"use strict";

var words = ['Development', 'Portfolios', 'Clients', 'Projects'];
var span = $('h1 span');
var i = 0;
var speed = 1250;

setInterval(function () {
    span.animate({
        width:'toggle'
    }, 500);

    if(i++ % 2) {
        span.text(words[i / 2 % words.length])
    }
}, speed);
