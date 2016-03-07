window.onload = function() {

	var paper = Raphael("notepad", 700, 600);

	// 1、直线使用path命令L
/*	paper.path("M20,20L100,20z").attr({
		"fill" : "#5DDEF4",
		"stroke" : "#2A6570",
		"stroke-width" : 2
	});*/
	// 2、三角形使用Path命令L
/*	paper.path("M130,30 L200,30 L160,90 z").attr({
		"fill" : "#5DDEF4",
		"stroke" : "#2A6570",
		"stroke-width" : 2
	}); */
	// 3、T形使用Path命令H,V
	// T字形
/*	paper.path("M 40,40 H 90 V 60	 H 70 V 110 H 60 V 60 H 40 z").attr({	//H,V
		"fill" : "#5DDEF4",
		"stroke" : "#2A6570",
		"stroke-width" : 2
	});*/
	// 4、2次贝塞尔曲线形，使用path命令Q
//	paper.path("M240,40L300,40L300,100").attr('stroke', 'grey');
//	paper.path("M240,40 Q300,40 300,200").attr('stroke', 'red');	//Q: 2次贝塞尔曲线形

	// 5、2次贝塞尔曲线形，使用path命令Q和T（第一个是正常绘制，第二个光滑连接）
	/*paper.path('M10,250 L90,130  L160,160 L250,190 L250,70');
	paper.path('M10,250 Q90,130  160,160 T250,70').attr('stroke', 'red');	// Q	T
*/
	// 6、绘制3次贝赛尔曲线，使用命令C，平滑画线使用命令S
	paper.path('M320,120 L350,180  L450,260 L480,140');
	
	paper.path('M320,120 C350,180  450,260 	480,140').attr('stroke', 'purple'); 	//使用命令C
	
	paper.path('M320,120  S450,260  480,140').attr('stroke', 'yellow');		//S	平滑曲线
	
	paper.path('M400,200 C300,100 100,100 0,200').attr('stroke', 'red'); 	//使用命令C
	paper.path('M400,200 S300,100 100,100 0,200').attr('stroke', 'black'); 	//使用命令S
	
	

}

/*
命令	名称	参数
	M	移动到（moveTo）	(x y)+
	Z	闭合路径（closepath）	(none)
	L	直线（lineTo）	(x y)+
		H	水平直线	x+
		V	垂直直线	y+
	C	曲线（curveto）	(x1 y1 x2 y2 x y)+
	S	平滑曲线	(x2 y2 x y)+
	Q	二次贝赛尔曲线	(x1 y1 x y)+
	T	平滑二次贝塞尔曲线	(x y)+
A	椭圆弧	(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+

R	Catmull-Rom 曲线*	x1 y1 (x y)+
* “Catmull-Rom 曲线”不是标准SVG命令，在2.0版时被加入。 注：有种特殊情况，路径只包含三个命令：“M10,10R…z”。在这种情况下，路径将平滑连接到它的起点。
*/