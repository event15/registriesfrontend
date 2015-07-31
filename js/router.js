define([
    'jquery',
    'underscore',
    'backbone',
    'views/wpisyCollectionView',
    'views/rejestryCollectionView',
    'libs/jquery/jquery.tablesorter.min'
], function($, _, Backbone, wpisyCollectionView, rejestryCollectionView){

    var Router = Backbone.Router.extend({
        routes: {
            ''                      : 'home',
            ':typRejestru'          : 'typRejestru',
            ':typRejestru/:page'    : 'id',
            '/dodajRejestr/'        : 'dodajRejestr',
            ':typRejestru/dodajWpis/'           : 'dodajWpis',
            '*actions'              : 'defaultAction'
        }



    });


    var initialize = function(){

        var app_router = new Router;

        app_router.on('route:typRejestru', function(typRejestru){
            var showLista = new wpisyCollectionView({
                typRejestru: typRejestru
            });

        });

        var homeView = new rejestryCollectionView();

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };

});