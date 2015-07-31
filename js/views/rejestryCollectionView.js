define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaRejestryCollection',
    'text!templates/listy/listaRejestryTemplate.html',
], function($, _, Backbone, listaRejestryCollection, listaRejestryTemplate){


    var rejestryCollectionView = Backbone.View.extend({
        el : 'ul',
        //my_template : _.template(listaSamochodyTemplate),
        initialize: function () {
            var that = this;

            var onDataHandler = function(collection) {
                that.render();
            }
            this.collection = new listaRejestryCollection();
            this.collection.fetch({success : onDataHandler})
        },
        render: function(){


            var data = {
                kolekcja: this.collection,
                _: _
            };
            //console.log(data.kolekcja);
            var my_template = _.template(listaRejestryTemplate);
            var compiledTemplate = my_template( data.kolekcja );

            this.$el.html(compiledTemplate);

        }

    });
    return rejestryCollectionView;
});