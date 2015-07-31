define([

    'underscore',
    'backbone'


], function(_, Backbone){

    var theadsCollection = Backbone.Collection.extend({
        theads : {
            samochodyThead : ["Marka", "Model", "Numer rejestracyjny", "Ubezpieczyciel", "Termin 1", "Termin 2"]

        }

    });

    return theadsCollection;
});