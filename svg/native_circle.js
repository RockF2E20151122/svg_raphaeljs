window.onload = function() {

	var paper = Raphael('container', 655, 655);

	paper.setSize(800, 800), paper.setViewBox(0, 0, 4096, 4096);
	//text="M1714.475,2245.466L1732.5349999999999,2323.404C1714.7679999999998,2327.095,1697.4419999999998,2331.223,1680.5569999999998,2335.727L1661.9209999999998,2259.352C1679.039,2254.354,1696.559,2249.713,1714.475,2245.466Z"
//	var text = 'M2029,2307C2145.455,2308.857,2249.816,2340.737,2338.413,2383.854L2004.523,3204H1863.5569999999998L1529.7729999999997,2389.882C1658.701,2330.938,1825.533,2289.195,2029,2307Z';
	var text = 'M105,1372.857C105,1372.857,785.963,601.781,2113.422,655.781C2922.2960000000003,705.781,3560.5,1164.5,4033.5699999999997,1701.427L3776.4259999999995,1944.2839999999999C3776.4259999999995,1944.2839999999999,3119.2819999999992,1115.7129999999997,2097.8549999999996,1032.5699999999997C1012.143,987.144,412.143,1587.143,105,1965.714V1372.857Z';
	var path = paper.path(text);
	// var path =
	// paper.path('M2462.857,1084.038C2418.439,1075.74,2353.199,1067.604,2353.199,1067.604L2387.1620000000003,825.168C2387.1620000000003,825.168,2471.8070000000002,841.439,2509.943,849.814C2508.252,857.987,2466.6,1067.279,2462.857,1084.038Z');
	var total = path.getTotalLength();

	var point_01 = path.getPointAtLength(total / 4);
	var point_03 = path.getPointAtLength(total * 3 / 4);

	var x = point_01.x + (point_03.x - point_01.x) / 2;
	var y = point_01.y + (point_03.y - point_01.y) / 2;

	paper.circle(point_01.x, point_01.y, 30).attr({
		'fill' : '#003f87',
		'stroke' : '#003f87',
		'stroke-width' : 0,
		'opacity' : .5
	});

	paper.circle(point_03.x, point_03.y, 30).attr({
		'fill' : '#003f87',
		'stroke' : '#003f87',
		'stroke-width' : 0,
		'opacity' : .5
	});

	paper.circle(x, y, 30).attr({
		'fill' : '#003f87',
		'stroke' : '#003f87',
		'stroke-width' : 0,
		'opacity' : .5
	});
	
	var pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig, 
		tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
		pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig;
	var flag = 1;
	text.replace(pathCommand, function(a, b) {
		console.log( 'pathCommand:',flag++, a, b);
	});
	
	flag = 1;
	text.replace(tCommand, function(a, b) {
		console.log( 'tCommand:',flag++, a, b);
	});
	
	flag = 1;
	text.replace(pathValues, function(a, b) {
		console.log( 'pathValues:',flag++, a, b);
	});

}
/**
 * readme: because bug: https://jira.stubcorp.com/browse/EVENTS-1461 Map lines
 * are pixelated or hard to see in IE and Firefox
 */
