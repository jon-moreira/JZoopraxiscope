/*!
 * JZoopraxiscope jQuery Plugin v1.0.0
 * http://www.cobalys.com/open-source/jzoopraxiscope.html
 *
 * Copyright 2012, serge@cobalys.com
 * Dual licensed under the MIT or GPL Version 3 licenses.
 * http://www.cobalys.com/open-source/jzoopraxiscope.html#license
 *
 */
(function($) {
	var methods = {
		init : function(options) {
			return this.each(function() {
				var $this = $(this);
				var data = $this.data('jzoopraxiscope');
				if(!data) {
					var image = options.image;
					var widthImage = options.widthImage;
					var widthItem = options.widthItem;
					var height = options.height;

					//Set CSS to the Div where the animation will be placed
					$this.css({
						'width' : widthItem,
						'height' : height,
						'overflow' : 'hidden',
						'padding' : '0px',
						'background-color' : 'transparent;',
						'background-image' : 'url(' + image + ')',
						'background-repeat' : 'repeat',
						'background-position' : '0 0',
						'background-attachment' : 'scroll',
						'box-shadow' : 'inset 0 0 40px #000000'
					});
					$this.data('jzoopraxiscope', {
						playing : false,
						fadePosition : -(widthImage * 4),
						widthItem : widthItem,
						widthImage : widthImage,
						position : 0
					});
				}
			});
		},
		play : function() {
			return this.each(function() {
				var $this = $(this);
				var data = $this.data('jzoopraxiscope');
				if(!data) {
					alert('You must initialize JZoopraxiscope before playing.');
				}
				if(!data.playing) {
					data.playing = true;
					$this.animate({
						backgroundPosition : data.fadePosition
					}, 7000, 'easeInQuint', function() {
						data.timer = setInterval(animationLoop, 50);
					});
					animationLoop = function() {
						$this.animate({
							backgroundPosition : data.position
						}, 1, 'linear', function() {
							data.position = data.position - data.widthItem;
							if(data.position < -data.widthImage) {
								data.position = 0;
							}
						});
					}
				}
			});
		},
		stop : function() {
			return this.each(function() {
				var $this = $(this);
				var data = $this.data('jzoopraxiscope');
				if(data.playing) {
					clearInterval(data.timer);
					$this.stop(true);
					$this.animate({
						backgroundPosition : data.fadePosition
					}, 7000, 'easeOutQuint', function() {
						data.playing = false;
						$this.css({
							'background-position' : '0px'
						});
					});
				}
			})
		}
	};
	$.fn.jzoopraxiscope = function(method) {
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if( typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.zoo');
		}
	};
})(jQuery);
