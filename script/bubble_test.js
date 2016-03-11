
window.onload = function(){
//http://www.th7.cn/web/js/201401/16924.shtml
//	var paper = Raphael("dot", 87, 55 );
	//	var paper = Raphael("notepad", 300, 300 );
	
	var x = 5; 
	var y = 50;
	var r = 4;
	var price = '$55.09';

//	var circle = paper.circle( x, y, r ).attr({
//		'fill': '#003f87',
//		'stroke': '#003f87',
//		'stroke-width': 0,
//		'opacity': .5
//	});
//	
//	var path = paper.path('M'+x+','+y+'v-50h85v30z').attr({	//H,V
//		"fill" : "white",
//		"stroke" : "black",
//		"stroke-width" : 0
//	});
	
	//	path.node.innerHTML='<div>82343363</div>';
	
	//	var text = paper.text( x+30, y-30, price );
//	var text = paper.text( '50%', '22px', price );
//
//	text.attr({
//		'font-weight':'700',
//		'color': '#003f87',
//		'font-size': '14',
//		'width': '80px',
//		'height': '20px'
//	});
	var argu = {
		'containerId': 'dot',
		'price': '$55.09',
		'position': {
			'x': 5,
			'y': 50
		}
		
	};
//	var drawBubble = function( argu ){
//		var paper = Raphael( argu.containerId, 87, 55 );
//		
//		window.paper = paper;
//		
//		var containerId = '#'+argu.containerId;
//		var container = document.querySelector( containerId );
//		var x = argu.position.x||5;
//		var y = argu.position.y||50;
//		var r = argu.r || 4;
//		container.style.left = '200px';
//		window.container = container;
//		
//		var circleAttr = {
//			'fill': '#003f87',
//			'stroke': '#003f87',
//			'stroke-width': 0,
//			'opacity': .5
//		},
//		pathAttr = {	//H,V
//			"fill" : "white",
//			"stroke" : "black",
//			"stroke-width" : 0
//		},
//		textAttr = {
//			'font-weight':'700',
//			'color': '#003f87',
//			'font-size': '14'
//		};
//		var circle = paper.circle( x, y, 4 ).attr( circleAttr );
//		var path = paper.path( 'M'+x+','+y+'v-50h85v30z').attr( pathAttr );
//		var text = paper.text( '50%', 20, argu.price ).attr( textAttr );
//
//	}(argu )
	
	var argu = {
		'containerId': 'dot',
		'price': '$55.09',
		'position': {
			'x': 5,
			'y': 50
		}
	};
	var drawBubble = function( argu ){
		var paper = Raphael( argu.containerId, 87, 55 );
		
		window.paper = paper;
		var containerId = '#'+argu.containerId;
		var container = document.querySelector( containerId );
		var x = argu.position.x||5;
		var y = argu.position.y||50;
		var r = argu.r || 4;
		container.style.left = '200px';
		window.container = container;
		var idBase = 'id';
		
		var circleAttr = {
			'fill': '#003f87',
			'stroke': '#003f87',
			'stroke-width': 0,
			'opacity': .5
		},
		pathAttr = {	//H,V
			"fill" : "white",
			"stroke" : "black",
			"stroke-width" : 0
		},
		textAttr = {
			'font-weight':'700',
			'color': '#003f87',
			'font-size': '14'
		};
		var circle = paper.circle( x, y, 4 ).attr( circleAttr );
		circle.id = idBase + 'c';
		var path = paper.path( 'M'+x+','+y+'v-50h85v30z').attr( pathAttr );
		var text = paper.text( '50%', 20, argu.price ).attr( textAttr );
		path.id = idBase + 'p';
		text.id = idBase + 't';
		
		path.click(function(){
			paper.getById(path.id).remove();
			paper.getById(text.id).remove();
			paper.getById(circle.id).remove();
		});
	}(argu )
}

//positioning: the container / the elements
//destroy the elements and keep singleton
//