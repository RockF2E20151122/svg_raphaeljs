window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	var rect = paper.rect(20, 20, 100, 120).attr('stroke', 'red');

    var rect = paper.rect(20, 20, 60, 40).attr({

        "stroke": "red", // border color of the rectangle 
        "fill": "red"

    });

    var rect1 = paper.rect(20, 70, 60, 40, 20).attr({

        "stroke": "yellow", // border color of the rectangle 
        "fill": "blue"
    });

    var cir = paper.circle(150, 100, 30);

    var raphaelSet = paper.set();		// a grounp of elements

    raphaelSet.push(rect, rect1, cir);

    raphaelSet.attr({

        "fill": "red"

    });
    
    raphaelSet.clear();		//清除掉   set 里的元素
    
    raphaelSet.push(rect, rect1, cir);
    raphaelSet.attr({

//        "fill": "green"

    });
}