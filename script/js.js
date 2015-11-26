
window.onload = function(){

	// Each of the following examples create a canvas
	// that is 320px wide by 200px high.
	// Canvas is created at the viewport’s 10,50 coordinate.
//	var paper = Raphael(10, 50, 320, 200);
	// Canvas is created at the top left corner of the #notepad element
	// (or its top right corner in dir="rtl" elements)
//	var paper = Raphael(document.getElementById("notepad"), 320, 200);
	
	// Same as above
/*	var paper = Raphael("notepad", 320, 200, function(e){
		console.log(e, 333);
	});*/
	
	// Image dump
/*	var set = Raphael(["notepad", 320, 220, {
	    type: "rect",
	    x: 10,
	    y: 10,
	    width: 250,
	    height: 200,
	    stroke: "#f00"
	}, {
	    type: "text",
	    x: 30,
	    y: 40,
	    text: "Dump"
	} ]);*/
	
	var paper = Raphael("notepad", 320, 200 );
	
	var circle = paper.circle(50, 50, 50);
	
	var anim = Raphael.animation({ cx: 0, cy:0 }, 2e3);
	var anim2 = Raphael.animation({ cx: 100, cy:100 }, 2e3, function(e){
		console.log('callback');
	});
//	circle.animate(anim); // run the given animation immediately
	circle.animate(anim2);
	var timeout = setTimeout(function(){
		circle.animate(anim.delay(1000));
		
		
		
	}, 2000 );
	
}