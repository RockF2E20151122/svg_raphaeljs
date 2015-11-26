window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	var rect = paper.rect(20, 20, 100, 120).attr('stroke', 'red');

	rect.attr({
		"fill":"＃17A9C6",// Adds a background color
		"stroke":"＃2A6570",// the color of the border
		"stroke-width":2, 	// the width of the border
		'arrow-end': 'classic 20 30'
	})
	
	rect.click( function(){
		console.log('fuck u');
	});
	
	/**
	 * click
	 * dblclick
	 * mousedown
	 * mouseup
	 * mousemove
	 * mouseover
	 * mouseout
	 * 
	 */
	
}