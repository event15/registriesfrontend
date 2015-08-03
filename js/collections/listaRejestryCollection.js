define([

    'underscore',
    'backbone'


], function(_, Backbone){

    var listaRejestryCollection = Backbone.Collection.extend({
        defaults : {
            query : "unknown"
        },

        initialize: function() {


        },

        url: function(){
            return 'http://www.json-generator.com/api/json/get/bGStqEvWRe?indent=2'
        }




    });

    return listaRejestryCollection;
});