define([
    'jquery',
    'underscore',
    'backbone',
    'views/wpisyCollectionView',
    'views/rejestryCollectionView',
    'views/dodajWpisView',
    'views/dodajRejestrView',
    'views/edytujWpisView',
    'collections/listaRejestryCollection',
    'models/tableHeadersModel',
    'libs/jquery/jquery.tablesorter.min'
], function($, _, Backbone, wpisyCollectionView, rejestryCollectionView, dodajWpisView, dodajRejestrView, edytujWpisView, listaRejestryCollection, tableHeadersModel){

    var Router = Backbone.Router.extend({
        routes: {
            ''                      : 'home',
            'dodajRejestr'                 : 'dodajRejestr',
            ':typRejestru/lista'          : 'typRejestru',
            ':typRejestru/lista/:page'    : 'idWpisu',
            ':typRejestru/dodajWpis'           : 'dodajWpis',
            '*actions'              : 'defaultAction'
        },
        home : function () {

        },



        events: {
            typRejestru : function(nazwaRejestru, rejestryType, router){
                //console.log(nazwaRejestru);
                $(".wrapper__sidebar--left li a").removeClass();
                $("a", $(".wrapper__sidebar--left li[data-rej=" + nazwaRejestru + "]") ).addClass("selected");

                $(document).on('click', '.zaznacz-wszystkie' ,function(){

                    router.navigate("/" + nazwaRejestru + "/dodajWpis");
                });
                //console.log();
                router.showLista = new wpisyCollectionView({
                    router : router,
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
            console.log(nazwaRejestru);
            this.events.typRejestru(nazwaRejestru, rejestryType, app_router);

        });



        app_router.on('route:dodajRejestr', function(){

            var dodajRejestr = new dodajRejestrView({  });
        });


       app_router.on('route:idWpisu', function(nazwaRejestru, idWpisu){
           if(!this.showLista){
               this.events.typRejestru(nazwaRejestru, rejestryType, app_router)
           };


           if( $(".sidebar--right").hasClass( "hide")){
               $(".sidebar--right").removeClass("hide").addClass("show");
               $(".wrapper").removeClass("full-width").addClass("part-width");
           }


           var edytujWpis = new edytujWpisView({});

           //var formView1 = new formView({
           //    typRejestru : nazwaRejestru.replace(/_/g, " "),
           //    id : idWpisu
           //});

        });





       app_router.on('route:dodajWpis', function(typRejestru){

           console.log("dodaj wpis");
           //alert("ASDdasdas");
           var dodajWpis = new dodajWpisView({

           });

        });

        //Backbone.history.start();

    };
    return {
        initialize: initialize
    };

});