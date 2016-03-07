
window.onload = function() {
	
	var paper = Raphael("notepad", 400, 600 );
	
	var path = paper.path("M100,100 L300,100 L300,300").attr("stroke", "green");
	
    var pathQ = paper.path("M100,100 Q300,100 300,300").attr("stroke", "red");
    
    var pointObj = path.getPointAtLength(100);
    
    console.log("x:" + pointObj.x + ",y:" + pointObj.y + ",Alpha:" + pointObj.alpha);
    
    var pointObjQ = pathQ.getPointAtLength(314.1592653589793);
    
    console.log("x:" + pointObjQ.x + ",y:" + pointObjQ.y + ",Alpha:" + pointObjQ.alpha);
    
//    Element.getTotalLength()
    
    var pathLength = path.getTotalLength();
    var pathQLength = pathQ.getTotalLength();
    var devidedPathQLength = pathQLength/5;
    
    console.log( pathLength, pathQLength );
    
    var point, circle;
    var i=0;
    //http://wenku.baidu.com/link?url=oB8foPowTHGf2RBj2vdxJNf-PlOSg0Rt_mr1lu5WUuMPLuhgjQ1WmRkT7Hz7t19V4bFLAiNc7gQH7Og857Tn2yYDM_K2vepSOSUtGIAY9S_
    
    while( i<=5 ){
    	
    	point = pathQ.getPointAtLength( i*devidedPathQLength );
    	console.log( i+1 +':', point);
    	
    	circle = paper.circle( point.x, point.y, 3 ).attr({
    		'fill': 'RGBA(2,3,4,.5)',
    		//'fill': '#17A9c6',
    		'stroke': '#2a6570',
    		'stroke-width': 2,
    		'opacity': .2
    	});
    	circle.click( function(e){
    		console.log( this );
    	});
    	
    	i++;
    }
}

/*

返回值：
X        	number  点的x坐标
Y        	number  点的y坐标
Alpha  	number 导数（切线）的角度

 * */
