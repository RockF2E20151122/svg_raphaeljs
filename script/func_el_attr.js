window.onload = function() {

	var paper = Raphael("notepad", 320, 600);

	var rect = paper.rect(20, 20, 100, 120).attr('stroke', 'red');

	rect.attr({
		"fill":"＃17A9C6",// Adds a background color
		"stroke":"＃2A6570",// the color of the border
		"stroke-width":2, 	// the width of the border
		'arrow-end': 'classic 20 30'
	})

}

/**
 * Raphael元素.attr（{元素键值对}），元素键值对就是json格局的数据。我们可以操纵的元素属性如下所示：

元素名称                   类型            简介 

arrow-end              string          路径的末尾显示箭头。字符串格局是<type>[-<width>[-<length>]]。可能的类型：classic、block、open、oval、diamond、none，

宽：wide、narrow、midium，长：long 、short、midium。

clip-rect                 string          剪贴矩形。逗号或空格分隔的值：x，y，宽度和高度

cursor                   string          光标的CSS类型

cx                         number       圆或椭圆的圆心的x轴坐标

cy                         number       圆或椭圆的圆心的y轴坐标

fill                          string         填充。色彩、渐变或图像

fill-opacity              number       填充不透明度

font                       string         文本特点

font-family             string         字体

font-size                number      字体大小（像素）

font-weight            string         字体粗细

height                    number      高度

href                       string        URL。  指按时，元素发挥解析为超链接

opacity                   number     透明度

path                      string        SVG的路径字符串格局

r                            number     圆、椭圆或圆角矩形的半径

rx                          number     椭圆的横向半径

ry                          number     椭圆的垂直半径

src                         string       图像的URL，只实用于Element.image元素

stroke                    string        笔触色彩

stroke-dasharray    string        [“”， “-”， “.”， “-.”， “-..”， “.”， “- ”， “--”， “- .”， “--.”， “--..”]

stroke-linecap         string        [“butt”， “square”， “round”]

stroke-linejoin         string        [“bevel”， “round”， “miter”]

stroke-miterlimit      number

stroke-opacity         number

stroke-width           number     笔触宽度（像素，默认为1）

target                    string        与 href 一路应用

text                       string        文本元素的内容。应用\n换行

text-anchor            string        [“start”， “middle”， “end”]，默认为 “middle”

title                        string        对象提示内容

transform               string        请参照：Element.transform

width                      number

x                            number

y                            number

      博客上方这个编辑器我不熟悉，我在排版时对齐后到预览就东倒西歪，弄了几次都没成功。大师包含一下，有知道为什么的留言告诉一下。
 */