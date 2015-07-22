// Test wielkości tabeli *****************************************************************

var html = document.getElementById("asd").innerHTML;
var html2 = "";

for (i = 0; i < 2; i++) {
    html2 += html;
}
document.getElementById("asd").innerHTML = html2;

// Test wielkości tabeli *****************************************************************




// Eventy *****************************************************************

$("a").click(function(){
    $(".sidebar--right").toggleClass("hide show");
    $(".wrapper").toggleClass( "part-width full-width");
});

$("th").click(function(){
    var $rodz = $(this).siblings();
        $("i", $rodz).removeClass().addClass("fa fa-sort");
    if ( $("i", this).hasClass("fa-sort")){
        $("i", this).toggleClass("fa-sort-asc fa-sort");
    }else{
        $("i", this).toggleClass("fa-sort-desc fa-sort-asc");
    }
});
$("i.checkbox").click(function(){
    //console.log(this.nodeName);
    $(this).toggleClass("fa-square-o fa-check-square-o");

});

$(".zaznacz-wszystkie").click(function(){
    console.log(this.nodeName);
});
// Eventy *****************************************************************




// Filtrowanie *****************************************************************

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
// Filtrowanie *****************************************************************

