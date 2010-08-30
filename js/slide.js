var img = new Array("../img/how_many.gif",  
	"../img/libra.jpg", "../img/pic_header.jpeg",
       	"../img/pic_bottom.jpeg", 
	"../img/rube-golbergesque_001.gif", 
	"../img/sunset.jpg", "../img/thu_old_gate.jpg");
var img_num = 0;
var slide_image;
var auto;	// variable 'auto' should be 全局变量，供stopAuto()调用

function initLinks() {
	document.getElementById("prelink").onclick = processPrevious;
	document.getElementById("nextlink").onclick = processNext;
	document.getElementById("auto").onclick = autoPlay;
	document.getElementById("noauto").onclick = stopAuto;
	slide_image = document.getElementById("slide");
	if (slide_image) proImage(slide_image);
}

function getFileName(str) {
	var start = str.lastIndexOf("/") + 1;
	var end = str.lastIndexOf(".");
	return str.substring(start, end);
}

function processPrevious() {
	if (img_num== 0) {
		img_num= img.length;
	}
	img_num--;
	document.getElementById("slide").src = img[img_num];
	document.getElementById("caption").innerHTML = getFileName(img[img_num]);
	setTimeout('proImage(document.getElementById("slide"))', 50);
	return false;
}

function processNext() {
	img_num++;
	if (img_num == img.length) {
		img_num = 0;
	}
	document.getElementById("slide").src = img[img_num];
	document.getElementById("caption").innerHTML = getFileName(img[img_num]);
	setTimeout('proImage(document.getElementById("slide"))', 10);
	return false;
}

function autoPlay() {
	img_num++;
	if (img_num == img.length) {
		img_num = 0;
	}
	document.getElementById("slide").src = img[img_num];
	document.getElementById("caption").innerHTML = getFileName(img[img_num]);
	setTimeout('proImage(document.getElementById("slide"))', 10);
	auto = setTimeout("autoPlay()", 3 * 1000);//3000毫秒，即3秒
	return false;
}

function stopAuto() {
	if (typeof(auto) === 'undefined') {
		alert("还没有开始幻灯片方式浏览");
	} else {
		clearTimeout(auto);
	}
}
// resize image
var proMaxHeight = 800;
var proMaxWidth = 480;
　　
function proImage(ImgD){
	var image=new Image();
	var maxWidth;
	var maxHeight;
	image.src=ImgD.src;
	if(image.width>0 && image.height>0){
	　　　var rate = (proMaxWidth/image.width < proMaxHeight/image.height)?proMaxWidth/image.width:proMaxHeight/image.height;
	　　if(rate <= 1){　
		　　 //ImgD.width = image.width*rate;
		　　 //ImgD.height =image.height*rate;
		　　 maxWidth = image.width*rate;
		　　 maxHeight =image.height*rate;
	　　}
	　　else {
	　　　　　　maxWidth = image.width;
	　　　　　　maxHeight =image.height;
	　　}
		setImageSize(ImgD, maxWidth, maxHeight);
	}
}

function setImageSize(Img, w, h) {
	Img.width = w;
	Img.height = h;
}

addOnLoadEvent(initLinks);
