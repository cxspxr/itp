<<<<<<< HEAD
(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var sliderFunction = require('./slider.js');

sliderFunction();

},{"./slider.js":2}],2:[function(require,module,exports){
'use strict';

module.exports = function () {
	$(document).ready(function () {
		$('.owl-carousel').owlCarousel({
			nav: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});
	});

	$('.owl-dot').click(function () {
		owl.trigger('to.owl.carousel', [$(this).index(), 300]);
	});
};

},{}]},{},[1])

//# sourceMappingURL=main.js.map
=======
!function(){function r(e,t,n){function o(u,s){if(!t[u]){if(!e[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};e[u][0].call(l.exports,function(r){var t=e[u][1][r];return o(t||r)},l,l.exports,r,e,t,n)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}return r}()({1:[function(r,e,t){"use strict";r("./slider.js")()},{"./slider.js":2}],2:[function(r,e,t){"use strict";e.exports=function(){$(document).ready(function(){$(".owl-carousel").owlCarousel({nav:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:4}}})}),$(".owl-dot").click(function(){owl.trigger("to.owl.carousel",[$(this).index(),300])})}},{}]},{},[1]);
>>>>>>> master
