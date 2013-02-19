require.config({
    paths : {
        jquery : 'vendor/jquery.min',
        underscore : 'vendor/underscore',
        backbone : 'vendor/backbone',
        templates : 'views/templates'
    },
    shim: {
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
        app : {
            deps : ['backbone']
        }
        // 'plugins/backbone-localstorage' : ['backbone']
    }
});

require(['app']);
