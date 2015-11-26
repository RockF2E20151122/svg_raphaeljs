
window.onload = function(){
	//http://www.th7.cn/web/js/201401/16917.shtml
	var paper = Raphael("notepad", 320, 600 );
	
	var rect = paper.rect(20, 20, 60, 40).attr({
		"stroke": "red"// border color of the rectangle
	});
	
	var rect1 = paper.rect(20, 70, 60, 40, 20).attr({
		"stroke": "yellow"// border color of the rectangle
	});
	
	var rect2 = paper.rect(20, 20, 60, 40).attr({
		"stroke": "red"// border color of the rectangle
	}).transform("r90 t100,0");
	
	//R:按角度旋转		T:平移
	var rect3 = paper.rect(20, 70, 60, 40, 20).attr({
		"stroke": "yellow"// border color of the rectangle
	}).transform("r45 T50,50");
	//围绕中心旋转45°；
	
	//.transform("s1.5 ");
	//相对中心缩放1.5倍

	//	.transform("r30,100,100");
	//围绕100,100旋转30°
	
	//.transform("s2,2,100,100");
	//围绕100,100缩放两倍
		
	console.log("第一个矩形坐标是：(" + rect.attr('x') + "," + rect.attr('y') + ")");
	console.log("第二个矩形坐标是：(" + rect1.attr('x') + "," + rect1.attr('y') + ")");
	console.log("第三个矩形的转换属性是："+rect2.transform());
	console.log("第四个矩形的转换属性是："+rect3.transform());

}

/**
 * t100,100r30,100,100s2,2,100,100r45s1.5
 * T 平移		*S 缩放			*R 按角度旋转 			*M 变换矩阵
 * 
 */