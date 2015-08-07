define([
    'jquery',
    'underscore',
    'backbone',
    'collections/listaWpisyCollection',
    'models/tableHeadersModel',
    'text!templates/formularze/formEdytujWpisTemplate.html',
    'boilerplate'

], function($, _, Backbone, listaWpisyCollection, tableHeadersModel, formEdytujWpisTemplate, App){


var edytujWpisView = Backbone.View.extend({
    el : '.sidebar--right',
    my_template : _.template(formEdytujWpisTemplate),
    initialize: function () {

        this.render();

    },
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
    return edytujWpisView;
});