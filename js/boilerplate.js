define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    var App = {
        sort : function(){

            $("#sorter").tablesorter({
                sortInitialOrder: "desc",
                headers : {
                    '.termin1' : { sortInitialOrder: "asc" },
                    '.termin2'   : { sortInitialOrder: "asc" }
                }
            });
        }

    }

    return App;
});