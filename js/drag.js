// Author: Unkonw
// Modify: 枫岩@CnLei.com
// Modify: alick 2010/08/21
var ie=document.all;
var nn6=document.getElementById&&!document.all;
var isdrag=false;
var y,x;
var oDragObj;

function moveMouse(e) {
    if (isdrag) {
        /*var mainbox = document.getElementById('maincontent');*/
        /*var mainboxTop = mainbox.offsetTop;*/
        /*var mainboxLeft = mainbox.offsetLeft;*/
        /*var mainboxHeight = mainbox.offsetHeight;*/
        /*var mainboxWidth = mainbox.offsetWidth;*/

        /*var smallbox = document.getElementById('surfing');*/
        /*var smallboxTop = smallbox.offsetTop;*/
        /*var smallboxLeft = smallbox.offsetLeft;*/
        /*var smallboxHeight = smallbox.offsetHeight;*/
        /*var smallboxWidth = smallbox.offsetWidth;*/

        paraTop = (nn6 ? nTY + e.clientY - y : nTY + event.clientY - y);
        paraLeft = (nn6 ? nTX + e.clientX - x : nTX + event.clientX - x);
        /*if (paraTop > mainboxTop - smallboxTop - nTY) {*/
            oDragObj.style.top = paraTop + "px";
            /*}*/
            /*if (paraLeft > mainboxLeft - smallboxLeft) {*/
            oDragObj.style.left = paraLeft + "px";
            /*}*/
        return false;
    }
}
function initDrag(e) {
    var oDragHandle = nn6 ? e.target : event.srcElement;
    var topElement = "HTML";
    while (oDragHandle.tagName != topElement && oDragHandle.className.indexOf("dragAble") == -1 ) {
        oDragHandle = nn6 ? oDragHandle.parentNode : oDragHandle.parentElement;
    }
    if (oDragHandle.className.indexOf("dragAble") >=0 ) {
        isdrag = true;
        oDragObj = oDragHandle;
        nTY = parseInt(oDragObj.style.top+0);
        y = nn6 ? e.clientY : event.clientY;
        nTX = parseInt(oDragObj.style.left+0);
        x = nn6 ? e.clientX : event.clientX;
        document.onmousemove=moveMouse;
        return false;
    }
}
document.onmousedown=initDrag;
document.onmouseup=new Function("isdrag=false");
// vim:set et sw=4:
