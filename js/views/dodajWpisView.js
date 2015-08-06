define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaWpisyCollection',
    'models/tableHeadersModel',
    'text!templates/formularze/formDodajWpisTemplate.html',
    'boilerplate'

], function($, _, Backbone, listaWpisyCollection, tableHeadersModel, formDodajWpisTemplate, App){


var dodajWpisView = Backbone.View.extend({
    el : '.sidebar--right',
    my_template : _.template(formDodajWpisTemplate),
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
        'click .sidebar__button' : 'guzik'
    },

    guzik: function() {
      alert("guzik");
    },
    render: function(){

        //var data = {
        //    kolekcja: this.collection,
        //    _: _
        //};
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
    return dodajWpisView;
});