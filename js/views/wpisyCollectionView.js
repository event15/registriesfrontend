define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaWpisyCollection',
    'js/collections/theadsCollection.js',
    'text!templates/listy/listaSamochodyTemplate.html',
    'boilerplate'
], function($, _, Backbone, listaWpisyCollection, theadsCollection, listaSamochodyTemplate, App){


var wpisyCollectionView = Backbone.View.extend({
    el : '.container',
    //my_template : _.template(listaSamochodyTemplate),
    initialize: function (options) {
        var that = this;

        this.options = options;

        var options = {query: options};

        //console.log(options.query.typRejestru);
        //console.log(App.theads[options.query.typRejestru]);


        var onDataHandler = function(collection) {
            that.render(options);
        }
        this.collection = new listaWpisyCollection(options);
        this.collection.fetch({success : onDataHandler})
    },
    render: function(options){

        var theads = new theadsCollection();

        var data = {
            kolekcja: this.collection,
            //thead : App[App.theads[options.query.typRejestru]],
            _: _
        };


        var my_template = _.template(listaSamochodyTemplate);
        var compiledTemplate = my_template( data );

        this.$el.html(compiledTemplate);

        App.sort();
    }

});
    return wpisyCollectionView;
});