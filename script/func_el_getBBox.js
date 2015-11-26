window.onload = function() {

	var paper = Raphael("notepad", 320, 800 );

	var cir = paper.circle(80, 80, 80).attr({

        "fill": "green" ,

        "stroke": "red" // border color of the rectangle 

	});

    var newcir = cir.clone().attr({

        "fill": "yellow"

    }).transform("t100, 100");

    var bbox = newcir.getBBox();

    var bboxOld = newcir.getBBox(true);

    //我们经由过程获得的包抄盒来绘制包裹圆的矩形

    paper.rect(bbox.x, bbox.y,  bbox.width, bbox.height) .attr({
        "stroke": "yellow"
    });

    //old one
    paper.rect( bboxOld.x,  bboxOld.y , bboxOld.width,  bboxOld.height).attr({
        "stroke": "purple"
    });
    
    console.log(bbox );
    console.log(bboxOld );
}
/**
getBBox() - return:
{

     x:          number   左上角 x

     y:          number   左上角y

     x2:        number   右下角 x

     y2:        number   右下角 y

     width:    number   宽

     height:   number  高

}
 */

