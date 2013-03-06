define([], function() {

    /*
    for each file input
        if it has the right data attribs
            instantiate picker with the element reference
    */

    // we'll need a proper widget loader/initer
    // this is just for the demo
    var pickers = $('[data-widget="ImagePicker"]');

    if (pickers.length) {
        require(['picker'], function (Picker) {
            pickers.each(function () {
                var instance = new Picker({ el : this });
                $.data(this, 'instance', instance);
            });
        });
    }

});
