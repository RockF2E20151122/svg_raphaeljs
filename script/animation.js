window.onload = function() {
	var paper = Raphael("notepad", 320, 200);

	var circle1 = paper.circle(50, 50, 50);
	var circle2 = paper.circle(150, 150, 50);

	var anim1 = Raphael.animation({
		cx : 0,
		cy : 0
	}, 2e3);
	
	var anim2 = Raphael.animation({
		cx : 100,
		cy : 100
	}, 1e3, 'bounce', function(e){
		//easing_formulas		//http://raphaeljs.com/easing.html
		
		console.log('callback');
	}).repeat(1);	//次数
	
	circle1.animate(anim1);
	circle2.animate(anim2);
	
//	var timeout = setTimeout(function() {
//		circle.animate(anim.delay(1000));
//
//	}, 2000);
}