
window.onload = function() {
	
	var paper = Raphael("notepad", 400, 600 );
	
	var path = paper.path("M100,100 L300,100 L300,300").attr("stroke", "green");
	
    var pathQ = paper.path("M100,100 Q300,100 300,300").attr("stroke", "red");
    
    var pointObj = path.getPointAtLength(100);
    
    console.log("x:" + pointObj.x + ",y:" + pointObj.y + ",Alpha:" + pointObj.alpha);
    
    var pointObjQ = pathQ.getPointAtLength(314.1592653589793);
    
    console.log("x:" + pointObjQ.x + ",y:" + pointObjQ.y + ",Alpha:" + pointObjQ.alpha);
    
}

/*

返回值：
X        	number  点的x坐标
Y        	number  点的y坐标
Alpha  	number 导数（切线）的角度

 * */
