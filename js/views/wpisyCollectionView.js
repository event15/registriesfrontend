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
    //my_template : _.template(listaSamochodyTemplate),

    initialize: function (options) {
        var that = this;

        //this.options = options;

        var options = {query: options};
        this.options = options;
        var onDataHandler = function(collection) {
            that.render(options);
        }
        this.collection = new listaWpisyCollection(options);
        this.collection.fetch({success : onDataHandler});
    },
    events : {
        'click tbody tr' : 'showWpis'
    },
    showWpis : function(e){
        console.log(this.options.query.nazwaRejestru);
        this.options.query.router.navigate("/" + this.options.query.nazwaRejestru + "/lista/" + $(e.target).parent().attr("data-id") , true);
    },
    render: function(options){

        var data = {
            kolekcja: this.collection,
            _: _
        };

        //var templates = {
        //    samochody : samochodyTemplate,
        //    polisy : polisyTemplate,
        //    ubezpieczenia : ubezpieczeniaTemplate
        //}


        var my_template = _.template(App.listyTemplates[options.query.typRejestru]);
        var compiledTemplate = my_template( data );

        this.$el.html(compiledTemplate);


        App.sort();



    }

});
    return wpisyCollectionView;
});