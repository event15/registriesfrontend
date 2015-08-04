define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/formularze/formDodajRejestrTemplate.html',
    'text!templates/formularze/formDodajWpisTemplate.html',
    'text!templates/formularze/formEdytujWpisTemplate.html',
    'text!templates/listy/listaWpisySamochodyTemplate.html',
    'text!templates/listy/listaWpisyRejestr2Template.html',
    'text!templates/listy/listaWpisyRejestr3Template.html',
    'js/libs/footable/footable.js',
    'js/libs/footable/footable.filter.js',
    'js/libs/footable/footable.paginate.js',
    'js/libs/footable/footable.sort.js'



], function($, _, Backbone, dodajRejestrTemplate, dodajWpisTemplate, edytujWpisTemplate,  samochodyTemplate, polisyTemplate, ubezpieczeniaTemplate){
    var App = {
        sort : function(){

            //$("#sorter")
            //.tablesorter({
            //    sortInitialOrder: "desc",
            //    headers : {
            //        '.termin1' : { sortInitialOrder: "asc" },
            //        '.termin2'   : { sortInitialOrder: "asc" }
            //    }
            //});

            $("#sorter").footable();

        },
        formTemplates : {
            dodajRejestr : dodajRejestrTemplate,
            dodajWpis : dodajWpisTemplate,
            edytujWpis : edytujWpisTemplate
        },
        listyTemplates : {
            samochody : samochodyTemplate,
            polisy : polisyTemplate,
            ubezpieczenia : ubezpieczeniaTemplate
        }

    }

    return App;
});