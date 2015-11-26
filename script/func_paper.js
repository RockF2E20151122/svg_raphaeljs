window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	var rect = paper.rect(20, 20, 100, 120).attr('stroke', 'red');

	rect.attr({
		"fill":"＃17A9C6",// Adds a background color
		"stroke":"＃2A6570",// the color of the border
		"stroke-width":2, 	// the width of the border
		'arrow-end': 'classic 20 30'
	});
	
	rect.click( function(){
		console.log('gggg');
	});
	
	paper.clear();
	
	paper.image("images/cat.jpg", 10 ,10, 300, 300 );
	
	paper.setSize( 500, 500 );
	
}