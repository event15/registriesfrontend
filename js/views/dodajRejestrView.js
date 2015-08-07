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

    events: {
        'click .sidebar__button' : ''
    },


    render: function(){

        var data = {
            kolekcja: this.collection,
            _: _
        };

        this.$el.html(this.my_template);



    }

});
    return dodajRejestrView;
});