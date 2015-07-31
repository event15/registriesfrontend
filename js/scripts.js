// </Test wielkości tabeli> *****************************************************************

/*
var html = document.getElementById("asd").innerHTML;
var html2 = "";

for (i = 0; i < 2; i++) {
    html2 += html;
}
document.getElementById("asd").innerHTML = html2;
*/

// </Test wielkości tabeli> *****************************************************************


// <Eventy> *****************************************************************

        //$("a").click(function(){
        //    $(".sidebar--right").toggleClass("hide show");
        //    $(".wrapper").toggleClass( "part-width full-width");
        //});
/*

www.json-generator.com
[
    '{{repeat(5, 200)}}',
    {
        id_Car: '{{index()}}',
        id_CarRegister: '{{index()}}',
        Brand: '{{city()}}',
        Model: '{{firstName("male")}}',
        RegistrationNumber: '{{phone("xxx-xxx")}}',
        Insurer: '{{company().toUpperCase()}}',
        Deadline1: '{{date(new Date(2014, 0, 1), new Date(), "dd-mm-YYYY")}}',
        Deadline2: '{{date(new Date(2014, 0, 1), new Date(), "dd-mm-YYYY")}}',
        Others: '{{lorem(3)}}'
    }

]*/
$(".wrapper__sidebar--left").on('click', 'li.typ-rejestru', function(){
    //console.log("asd");
    $(".wrapper__sidebar--left li a").removeClass();
    $("a", this).addClass("selected");


});

// <styl daty>***************************
// porównuje dane daty z deadlinem i nadaje im kolorki - hot, warm, green
function checkDate(date, deadline){

}
// </styl daty>***************************


// <ikony sortowanie>*********************

$(document).on('click', 'th' ,function(){

    var $rodz = $(this).siblings();
        $("i", $rodz).removeClass().addClass("fa fa-sort");
    if ( $("i", this).hasClass("fa-sort")){
        $("i", this).toggleClass("fa-sort-asc fa-sort");
    }else{
        $("i", this).toggleClass("fa-sort-desc fa-sort-asc");
    }
});
// </ikony sortowanie>*********************



// <ikony checkboxy - zaznacz jeden>*********************
    $('.container').on('click', 'i.checkbox' ,function() {
        $(this).toggleClass("fa-square-o fa-check-square-o");
    });
// </ikony checkboxy - zaznacz jeden>*********************




// ikony checkboxy - zaznacz widoczne>*********************
$('.wrapper').on('click', '.zaznacz-wszystkie' ,function() {

    $( "table .checkbox" ).each(function() {
        $(this).removeClass();
        $(this).filter(":hidden").addClass("fa fa-square-o");
        $(this).filter(":visible").addClass("checkbox fa fa-check-square-o");
    });
});
// </ikony checkboxy - zaznacz widoczne>*********************


// <usuwanie jednego>*********************
$('.wrapper').on('click', 'i.usun-jeden' ,function(){
    var usunWpis = parseFloat($(this).parents("tr").attr('data-id'));
    console.log(usunWpis);
});
// </usuwanie jednego>*********************


// <usuwanie wielu>*********************
$("a.usun-wszystkie").click    (function(){
    var usunWpisyArray = [];
    $( ".fa-check-square-o" ).each(function() {
        $wpis = parseFloat($(this).parents("tr").attr('data-id'));
        usunWpisyArray.push($wpis);
        return usunWpisyArray;
    });
    if(usunWpisyArray.length!=0){
    console.log(usunWpisyArray);
    }
});
// </usuwanie wielu>*********************

// </Eventy> *****************************************************************




// <Filtrowanie> *****************************************************************

(function(document) {
    'use strict';

    var LightTableFilter = (function(Arr) {

        var _input;

        function _onInputEvent(e) {
            _input = e.target;

            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _filter(row) {
            var inputVal = _input.value.toLowerCase().split(/[ ]+/).filter(Boolean);
            inputVal.unshift("");
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();



            for(var i=0; i<inputVal.length; i++){
                if(text.indexOf(inputVal[i]) === -1){
                    row.style.display = 'none';
                    break;
                }else{
                    row.style.display = 'table-row';
                }
            }

        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });

})(document);
// </Filtrowanie> *****************************************************************


// <sortowanie> *****************************************************************
// musi być wywałane po każdym załadowaniu nowej tabelki

//function sort(){
//    $(function(){
//        $("#sorter").tablesorter({
//            sortInitialOrder: "desc",
//            headers : {
//                '.termin1' : { sortInitialOrder: "asc" },
//                '.termin2'   : { sortInitialOrder: "asc" }
//            }
//        });
//    });
//}

// </sortowanie> *****************************************************************




/*
function typRejestru(){
    $(".options").addClass("shown");


    $.ajax({
        method: "GET",
        dataType: "json",
        url: "http://www.json-generator.com/api/json/get/csYBYJrGWa?indent=2",
        data: 1
    }).done(function(data) {
        var tabelka = "<table id=\"sorter\" class=\"order-table table\"> <thead> <tr> <th class=\"clean\"></th> <th>Marka<i class=\"sorticon fa fa-sort\"></i></th> <th>Model<i class=\"fa fa-sort\"></i></th> <th>Numer rejestracyjny<i class=\"fa fa-sort\"></i></th> <th>Ubezpieczyciel<i class=\"fa fa-sort\"></i></th> <th class=\"termin1\">Termin 1<i class=\"fa fa-sort\"></i></th> <th class=\"termin2\">Termin 2<i class=\"fa fa-sort\"></i></th> </tr> </thead> <tbody>";
        $.each(data, function( key, val ) {
            //var date = Date.parseDate("03 03 2013", "d-m-Y");
            //console.log(Date.parse("March 21, 2012"));

            tabelka += "<tr data-id=" + val.id_Car + " role=\"row\">";
            tabelka += "<td class=\"quick-options\"><i class=\"fa fa-trash-o usun-jeden\"></i><i class=\"checkbox fa fa-square-o\"></i></td>";
            tabelka += "<td>" + val.Brand  + "</td>";
            tabelka += "<td>" + val.Model  + "</td>";
            tabelka += "<td>" + val.RegistrationNumber + "</td>";
            tabelka += "<td>" + val.Insurer  + "</td>";
            tabelka += "<td>" + val.Deadline1 + "</td>";
            tabelka += "<td>" + val.Deadline2  + "</td>";
            tabelka += "</tr>";


        });
        tabelka = $.parseHTML(tabelka);
        $(".container").html(tabelka);
        sort();

    });

};
*/



//var rejestrSamochody = Backbone.Collection.extend({
//    url: 'http://www.json-generator.com/api/json/get/csYBYJrGWa?indent=2'
//    }
//
//);
//
//
//
//var wpisyCollectionView = Backbone.View.extend({
//    el : '.container',
//    my_template : _.template($( "script.template" ).html()),
//    initialize: function () {
//        this.render();
//    },
//    render: function() {
//
//        var _thisView = this;
//
//        this.collection = new rejestrSamochody();
//
//
//        var html = this.my_template(this.collection);
//
//
//        this.collection.fetch().done(function () {
//            _thisView.$el.html(_thisView.my_template(_thisView.collection));
//        });
//
//
//    }
//});




//
//var rejestrSamochody = Backbone.Collection.extend({
//    defaults : {
//        query : "unknown"
//        },
//
//    initialize: function( options ) {
//        //console.log(options.query.typRejestru);
//        this.query = options.query.typRejestru;
//    },
//
//        url: function(){
//            return 'http://www.json-generator.com/api/json/get/csYBYJrGWa?indent=2'
//        }
//
//
//
//
//});
//
//
//
//
//var wpisyCollectionView = Backbone.View.extend({
//    el : '.container',
//    my_template : _.template($( "script.template" ).html()),
//    initialize: function (options) {
//        var that = this;
//
//
//        this.options = options;
//
//        var options = {query: options};
//
//
//
//        var onDataHandler = function(collection) {
//            that.render();
//        }
//        this.collection = new rejestrSamochody(options);
//        this.collection.fetch({success : onDataHandler})
//    },
//    render: function(){
//
//        var data = {
//            owner: this.collection,
//            _: _
//        };
//
//        var compiledTemplate = this.my_template( data.owner );
//
//        this.$el.html(compiledTemplate);
//    }
//
//});




