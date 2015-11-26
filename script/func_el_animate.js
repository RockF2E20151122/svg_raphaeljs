window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	var rect = paper.rect(20, 20, 100, 120).attr('stroke', 'red');

	// Raphael元素.animate（元素键值对，动画连气儿时候，缓动类型（可选参数），回调函数（可选参数））。
	/*
	 * element.animate({ Property1 : value, Property2 : value },
	 * time_in_milliseconds, easing(optional),
	 * 
	 * callback_function(optional));
	 */

	rect.animate({
		"width" : "300",
		"height" : "200"
	}, 500, "bounce", function() {
		console.log("animation complete");
	});


}
