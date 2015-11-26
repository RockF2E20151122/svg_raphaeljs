window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	var rect = paper.rect(20, 20, 100, 120).attr('stroke', 'red');

	var newrect = rect.clone().attr({
		x : 50,
		y : 50,
		fill: '#ddd'
	});
	
	newrect.data({
		name: 'Rock',
		age: 32
	});
	
	newrect.click( function(e, x, y, argu ){
		console.log( this.data('age'), newrect.data('age') );
	});
	
	newrect.removeData('age');
	
	newrect.click( function(e, x, y, argu ){
		console.log( this, this===newrect, e );
		
		console.log( x, y, argu, newrect.data('name') );
		
		console.log( this.data('age'), newrect.data('age') );
		
	});

}
