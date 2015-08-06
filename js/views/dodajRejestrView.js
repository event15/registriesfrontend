define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaWpisyCollection',
    'models/tableHeadersModel',
    'text!templates/formularze/formDodajRejestrTemplate.html',
    'boilerplate'

], function($, _, Backbone, listaWpisyCollection, tableHeadersModel, formDodajRejestrTemplate, App){


var dodajRejestrView = Backbone.View.extend({
    el : '.sidebar--right',
    my_template : _.template(formDodajRejestrTemplate),
    initialize: function () {

        this.render();
        //var that = this;
        //
        ////this.options = options;
        //
        //var options = {query: options};
        //
        //var onDataHandler = function(collection) {
        //    that.render(options);
        //}
        //this.collection = new listaWpisyCollection(options);
        //this.collection.fetch({success : onDataHandler});
    },
    events: {
        'click .sidebar__button' : ''
    },

    render: function(){

        var data = {
            kolekcja: this.collection,
            _: _
        };
        //
        //var templates = {
        //    samochody : samochodyTemplate,
        //    polisy : polisyTemplate,
        //    ubezpieczenia : ubezpieczeniaTemplate
        //}


        //var my_template = _.template(my_template);
        //var compiledTemplate = my_template();

        this.$el.html(this.my_template);



    }

});
    return dodajRejestrView;
});