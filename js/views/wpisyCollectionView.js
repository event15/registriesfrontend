define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaWpisyCollection',
    'models/tableHeadersModel',

    'boilerplate',

], function($, _, Backbone, listaWpisyCollection, tableHeadersModel, App){


var wpisyCollectionView = Backbone.View.extend({
    el : '.container',
    //my_template : _.template(listaSamochodyTemplate),
    initialize: function (options) {
        var that = this;

        //this.options = options;

        var options = {query: options};

        var onDataHandler = function(collection) {
            that.render(options);
        }
        this.collection = new listaWpisyCollection(options);
        this.collection.fetch({success : onDataHandler});
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