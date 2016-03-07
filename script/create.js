
window.onload = function(){
//http://www.th7.cn/web/js/201401/16924.shtml
	var paper = Raphael("notepad", 320, 600 );
	
	var cir = paper.circle( 20, 20, 20 ).attr({
		'fill': 'RGBA(2,3,4,.5)',
		//'fill': '#17A9c6',
		'stroke': '#2a6570',
		'stroke-width': 2,
		'opacity': .2
	});
	
	var rect = paper.rect( 40,40,50,50 ).attr({
		'fill': '#17a9c6',
		'stroke': '#2a6570',
		'stroke-width': 1
	});
	
	//5个参数按顺序分别是x坐标、y坐标、矩形宽度、矩形高度、圆角半径
	var rect = paper.rect( 40,90,50,50, 3 ).attr({
		'fill': '#17a9c6',
		'stroke': '#2a6570',
		'stroke-width': .1
	});
	
	var ellipse = paper.ellipse( 195, 180, 100, 80 ).attr({
		'fill': '#17a9c6',
		'stroke': '#2a6570',
		'stroke-width': 1
	});
	
	
}