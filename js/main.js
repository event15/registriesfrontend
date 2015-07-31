require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        templates: '../templates',
        boilerplate: 'boilerplate'
    }

});

require([

    'app',
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});