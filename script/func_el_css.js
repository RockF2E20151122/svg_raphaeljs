
window.onload = function() {
	
	var paper = Raphael("notepad", 400, 600 );
	
	var rect = paper.rect(20, 20, 100, 120).attr('stroke', 'red');

	rect.attr({
		"fill":"＃17A9C6",// Adds a background color
		"stroke":"＃2A6570",// the color of the border
		"stroke-width":2, 	// the width of the border
		'arrow-end': 'classic 20 30'
	});
	
	var newrect1 = rect.clone().attr({
		x : 50,
		y : 50,
		fill: '#ddd'
	});
	
	rect.toFront();
	rect.toBack();
	
	var newrect2 = rect.clone().attr({
		x : 100,
		y : 100,
		fill: '#ddd'
	});
	
	newrect2.hide();
	newrect2.show();
	
	console.log('before remove: ', newrect2 );
	newrect2.remove();
	console.log('after remove: ', newrect2 );
	
}