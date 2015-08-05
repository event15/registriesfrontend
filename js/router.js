define([
    'jquery',
    'underscore',
    'backbone',
    'views/wpisyCollectionView',
    'views/rejestryCollectionView',
    'views/formView',
    'collections/listaRejestryCollection',
    'models/tableHeadersModel',
    'libs/jquery/jquery.tablesorter.min'
], function($, _, Backbone, wpisyCollectionView, rejestryCollectionView, formView, listaRejestryCollection, tableHeadersModel){

    var Router = Backbone.Router.extend({
        routes: {
            ''                      : 'home',
            'dodajRejestr'                 : 'dodajRejestr',
            ':typRejestru'          : 'typRejestru',
            ':typRejestru/:page'    : 'idWpisu',
            ':typRejestru/dodajWpis'           : 'dodajWpis',
            '*actions'              : 'defaultAction'
        },
        home : function () {
            console.log("home");
        },



        events: {
            typRejestru : function(nazwaRejestru, rejestryType, router){
                $(".wrapper__sidebar--left li a").removeClass();
                $("a", $(".wrapper__sidebar--left li[data-rej=" + nazwaRejestru + "]") ).addClass("selected");

                $('.container').on('click', 'tbody tr' ,function(){
                    router.navigate("/" + nazwaRejestru + "/" + $(this).attr("data-id"), true);
                });
                //console.log();
                router.showLista = new wpisyCollectionView({
                    nazwaRejestru: nazwaRejestru,
                    typRejestru : rejestryType[nazwaRejestru.replace(/_/g, " ")]

                });
            }

        }

    });


    var initialize = function(){

        var app_router = new Router;



        var homeView = new rejestryCollectionView(); // View wy�wietla wszystkie rejestry

        var rejestryTypeModel = Backbone.Model.extend();
        var rejestryType  = new rejestryTypeModel; // Model zawieraj�cy typy rejestr�w

        homeView.collection = new listaRejestryCollection();
        homeView.collection.fetch().done(function(){
            homeView.collection.each(function(item){
                rejestryType[item.get("rejestr")] = item.get("type");
            });

            homeView.render();

            Backbone.history.start();

        });




        app_router.on('route:typRejestru', function(nazwaRejestru){

            this.events.typRejestru(nazwaRejestru, rejestryType, app_router);

        });



        app_router.on('route:dodajRejestr', function(){

            var formView1 = new formView({

            });

        });


       app_router.on('route:idWpisu', function(nazwaRejestru, idWpisu){
           if(!this.showLista){
               this.events.typRejestru(nazwaRejestru, rejestryType, app_router)
           };


           if( $(".sidebar--right").hasClass( "hide")){
               $(".sidebar--right").removeClass("hide").addClass("show");
               $(".wrapper").removeClass("full-width").addClass("part-width");
           }


           var formView1 = new formView({
               typRejestru : nazwaRejestru.replace(/_/g, " "),
               id : idWpisu
           });

        });





       app_router.on('route:dodajWpis', function(){
           var formView1 = new formView({

           });

        });

        //Backbone.history.start();

    };
    return {
        initialize: initialize
    };

});