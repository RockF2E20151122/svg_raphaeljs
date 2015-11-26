window.onload = function() {

	var paper = Raphael("notepad", 700, 600);
	// 绘制左上的椭圆
	paper.ellipse(130,40,60,30);
	//圆心的坐标 130,40
	paper.ellipse(70,70,60,30);
	paper.path('M70,40 				A60,30 	0 0,0 			130,70').attr('stroke','yellow');
	//M70,40			A: rx ry 		x-axis-rotation large-arc-flag sweep-flag 			x y
	// A60,30 		//0 0,0 
	//rx：横轴的半径, ry：纵轴的半径；
							/* x-axis-rotation：椭圆的横轴与x轴的角度；
							 * large-arc-flag：区分弧度的大小（0表示小角度弧度，1表示大角度弧度）；
							 * sweep-flag：绘制弧度围绕椭圆中心的方向（0表示逆时针方向，1表示顺时针方向）；*/
	
	paper.text(40,30,'start(70,40)').attr({                      'font-size':11,                      'fill':'blue'                  });              
	paper.text(160,80,'end(130,70)').attr({                      'font-size':11,                      'fill':'blue'                  });                
	paper.text(70,120,'large-arc-flag=0/nsweep-flag=0').attr({
			'font-size': 11,
			'fill': 'green', 
			'text-anchor': 'start'
	});
	// 绘制右上的椭圆
	paper.ellipse(330,40,60,30);
	paper.ellipse(270,70,60,30);
	paper.path('M270,40 A60,30 0 0,1 330,70').attr('stroke','yellow');              
	paper.text(240,30,'start(270,40)').attr({                      'font-size':11,                      'fill':'blue'                  });              
	paper.text(360,80,'end(330,70)').attr({                      'font-size':11,                      'fill':'blue'                  });              
	paper.text(270,120,'large-arc-flag=0/nsweep-flag=1').attr({
		'font-size': 11,
		'fill': 'green',
		'text-anchor': 'start'
	});                
	// 绘制左下的椭圆
	paper.ellipse(130,240,60,30);              
	paper.ellipse(70,270,60,30);              
	paper.path('M70,240 A60,30 0 1,0 130,270').attr('stroke','yellow');              
	paper.text(40,230,'start(70,240)').attr({                      'font-size':11,                      'fill':'blue'                  });              
	paper.text(160,280,'end(130,270)') .attr({                      'font-size':11,                      'fill':'blue'                  });              
	paper.text(70,320,'large-arc-flag=1/nsweep-flag=0').attr({
		'font-size': 11,
		'fill': 'green',
		'text-anchor': 'start'
	});                            
	// 绘制右下的椭圆
	paper.ellipse(330,240,60,30);              
	paper.ellipse(270,270,60,30);              
	paper.path('M270,240 A60,30 0 1,1 330,270').attr('stroke','yellow');              
	paper.text(240,230,'start(270,240)').attr({                      'font-size':11,                      'fill':'blue'                  });              
	paper.text(360,280,'end(330,270)').attr({                      'font-size':11,                      'fill':'blue'                  });              
	paper.text(270,320,'large-arc-flag=1/nsweep-flag=1') .attr({
		'font-size': 11,
		'fill': 'green',
		'text-anchor': 'start'
	});
}
/*
A(a)elliptical arc(rx ry x-axis-rotation large-arc-flag sweep-flag x y)；
参数含义：
rx：横轴的长度；
ry：纵轴的长度；
x-axis-rotation：椭圆的横轴与x轴的角度；
large-arc-flag：区分弧度的大小（0表示小角度弧度，1表示大角度弧度）；
sweep-flag：绘制弧度围绕椭圆中心的方向（0表示逆时针方向，1表示顺时针方向）；
x y：椭圆曲线终点坐标；
 */