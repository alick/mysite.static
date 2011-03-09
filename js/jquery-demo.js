$(document).ready(function() {
    $('#backcolorswitcher').toggle(function() {
        $("#maincontent").css("background-color", '#f00000');
        $("#backcolorswitcher").css("color", '#fff');
    }, function() {
        $("#maincontent").css("background-color", '#f0ffff');
        $("#backcolorswitcher").css("color", 'navy');
    });
});
