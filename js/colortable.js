$(document).ready(function(){
    /*alert($("#colortable").html());*/
    var colornum = $("#colornum").html();
    colornum += (256*256*256) + '.';
    $("#colornum").html(colornum);

    var N = 16;
    var i, j;
    var k = 0;
    var table = '';

    for (i=0; i<N; i++) {
        table += '<tr>';
        for (j=0; j<N; j++) {
            /*table += '<td id="c' + k + '" style="background-color: rgb(0,0,' + k +'); color: rgb(255,255,255);">' + k + '</td>';*/
            /*table += '<td id="c' + k + '" style="background-color: rgb(0,' + k +',0); color: rgb(255,255,255);">' + k + '</td>';*/
            table += '<td id="c' + k + '" style="background-color: rgb(' + k +',0,0); color: rgb(255,255,255);">' + k + '</td>';
            k++;
        }
        table += '</tr>';
    }
    $("#colortable").html(table);
});
