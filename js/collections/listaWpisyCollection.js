define([

    'underscore',
    'backbone'


], function(_, Backbone){

    var listaWpisyCollection = Backbone.Collection.extend({
        defaults : {
            query : "unknown"
        },

        initialize: function( options ) {

            this.query = options.query.typRejestru;
            //console.log(this.query);
        },

        url: function(){
            return 'http://www.json-generator.com/api/json/get/csYBYJrGWa?indent=2'
        }




    });

    return listaWpisyCollection;
});