$(document).ready(function() {
    $('#backcolorswitcher').toggle(function() {
        $("#backcolorswitcherdiv").css("background-color", '#f00000');
        $("#backcolorswitcher").css("color", '#fff');
    }, function() {
        $("#backcolorswitcherdiv").css("background-color", '#f0ffff');
        $("#backcolorswitcher").css("color", 'navy');
    });
});
