define([
    'jquery',
    'underscore',
    'backbone',
    'views/wpisyCollectionView',
    'views/rejestryCollectionView',
    'collections/listaRejestryCollection',
    'models/tableHeadersModel',
    'libs/jquery/jquery.tablesorter.min'
], function($, _, Backbone, wpisyCollectionView, rejestryCollectionView, listaRejestryCollection, tableHeadersModel){

    var Router = Backbone.Router.extend({
        routes: {
            ''                      : 'home',
            'dodajRejestr'                 : 'dodajRejestr',
            ':typRejestru'          : 'typRejestru',
            ':typRejestru/:page'    : 'id',
            ':typRejestru/dodajWpis/'           : 'dodajWpis',
            '*actions'              : 'defaultAction'
        }



    });


    var initialize = function(){

        var app_router = new Router;

        var homeView = new rejestryCollectionView(); // View wyœwietla wszystkie rejestry

        var rejestryTypeModel = Backbone.Model.extend();
        var rejestryType  = new rejestryTypeModel; // Model zawieraj¹cy typy rejestrów

        homeView.collection = new listaRejestryCollection();
        homeView.collection.fetch().done(function(){
            homeView.collection.each(function(item){
                rejestryType[item.get("rejestr")] = item.get("type");
            });

            homeView.render();
            Backbone.history.start();

        });




        app_router.on('route:typRejestru', function(nazwaRejestru){
            //console.log(nazwaRejestru.replace(/_/g, " "));
            //console.log(rejestryType[nazwaRejestru.replace(/_/g, " ")]);
            var showLista = new wpisyCollectionView({
                nazwaRejestru: nazwaRejestru,
                typRejestru : rejestryType[nazwaRejestru.replace(/_/g, " ")]

            }); // View wyœwietla wszystkie wpisy dla danego rejestru

        });

        app_router.on('route:dodajRejestr', function(){

            //console.log("asd");


        });



    };
    return {
        initialize: initialize
    };

});