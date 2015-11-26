window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	var rect = paper.rect(20, 20, 60, 40).attr({
		"fill": "green",
		"stroke": "red" // border color of the rectangle             
	});
	
	rect.removeData('name');
	
	rect.click(function( argu ){
		console.log( rect.data('name') );
	});
	
	rect.data({
		"name": "heihei",
		"age":2
	});
	
	var bbox = rect.getBBox();
	console.log( bbox );
	

	
/*	rect.mouseover(function(){
		alert("wow");
    });*/
}
