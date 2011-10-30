$(document).ready(function() {
    $(document).keypress(function(event){
        var keycode = event.which;
        //$('h1').html("key: "+keycode);
        if (keycode == 103) { // key 'g'
            $('input')[2].focus(); // input text focus
        } else {
            // do nothing
        }
    });
});
