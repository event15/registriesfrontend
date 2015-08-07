define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaWpisyCollection',
    'models/tableHeadersModel',

    'boilerplate',

], function($, _, Backbone, listaWpisyCollection, tableHeadersModel, App){


var wpisyCollectionView = Backbone.View.extend({
    el : '.container__table',

    remove: function() {
        this.undelegateEvents();
        this.$el.empty();
        this.stopListening();
        return this;
    },
    initialize: function (options) {
        var that = this;



        var options = {query: options};
        this.options = options;
        var onDataHandler = function(collection) {
            that.render(options);
        };



        this.collection = new listaWpisyCollection(options);
        this.collection.fetch({success : onDataHandler});
    },
    events : {
        'click tr' : 'showWpis',
        'click i' : 'dodajWpis'
    },
    showWpis : function(e){
        this.options.query.router.navigate("/" + this.options.query.nazwaRejestru + "/lista/" + $(e.target).parent().attr("data-id") , true);
    },
    dodajWpis : function(){
        console.log("dodaj wpis");
    },
    render: function(options){

        var data = {
            kolekcja: this.collection,
            _: _
        };

        var my_template = _.template(App.listyTemplates[options.query.typRejestru]);
        var compiledTemplate = my_template( data );

        this.$el.html(compiledTemplate);

        App.sort();



    }

});
    return wpisyCollectionView;
});