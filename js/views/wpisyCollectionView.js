define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaWpisyCollection',
    'models/tableHeadersModel',

    'text!templates/listy/listaWpisySamochodyTemplate.html',
    'text!templates/listy/listaWpisyRejestr2Template.html',
    'text!templates/listy/listaWpisyRejestr3Template.html',
    'boilerplate'
], function($, _, Backbone, listaWpisyCollection, tableHeadersModel, samochodyTemplate, polisyTemplate, ubezpieczeniaTemplate, App){


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

        var templates = {
            samochody : samochodyTemplate,
            polisy : polisyTemplate,
            ubezpieczenia : ubezpieczeniaTemplate
        }


        var my_template = _.template(templates[options.query.typRejestru]);
        var compiledTemplate = my_template( data );

        this.$el.html(compiledTemplate);

        App.sort();
    }

});
    return wpisyCollectionView;
});