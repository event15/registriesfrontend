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

    },

    render: function(){



        this.$el.html(this.my_template);



    }

});
    return dodajWpisView;
});