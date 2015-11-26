window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	1. 
	var rect = paper.rect(20, 20, 60, 40).attr({
		"stroke" : "red"// border color of the rectangle
	});

	/*rect.animate({
		transform : "r90 t100,0 s1.5"
	}, 1000);*/

	/*
	 * rect.animate({ transform:"r90 T100,0 s1.5" },1000);
	 */

	/**
	 * Element.animate({动画属性的键值对},动画时间,缓动类型,回调函数);
	 * 缓动类型其实就是动画过渡公式，是哪种类型的。主要有以下这些类型： “linear”（线性） “<”或“easeIn”或“ease-in”
	 * （由慢到快） “>”或“easeOut”或“ease-out”（又快到慢） “<>”或“easeInOut”或“ease-in-out”（由慢到快再到慢）
	 * “backIn”或“back-in”（开始时回弹） “backOut”或“back-out”（结束时回弹） “elastic”（橡皮筋）
	 * “bounce”（弹跳）
	 */

	rect.animate({
		transform : "r90 t100,0 s1.5"
//		,fill: 'red'
	}, 1000, "bounce", function() {
		console.log("finish");
	});
	
	2.	
	var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
//	circle.animate(anim); // run the given animation immediately
//	circle.animate(anim.delay(500)); // run the given animation after 500 ms

}
