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

//            $( document ).ready(function() {
//// Change the selector if needed
//    var $table = $('table'),
//        $bodyCells = $table.find('tbody tr:first').children(),
//        colWidth;
//
//// Get the tbody columns width array
//    colWidth = $bodyCells.map(function () {
//        return $(this).width();
//    }).get();
//    console.log(colWidth);
//// Set the width of thead columns
//    $table.find('thead tr').children().each(function (i, v) {
//        $(v).width(colWidth[i]);
//
//    });
//});
        }

    }

    return App;
});