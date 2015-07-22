$("a").click(function(){
    $(".sidebar--right").toggleClass("hide");
    $(".sidebar--right").toggleClass("show");
    $(".wrapper").toggleClass("full-width");
    $(".wrapper").toggleClass("part-width");
});

var html = document.getElementById("asd").innerHTML;
var html2 = "";

for (i = 0; i < 100; i++) {
    html2 += html;
}
document.getElementById("asd").innerHTML = html2;




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
            //console.log();
            //console.log(row.textContent.toLowerCase() + "........");
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();


            console.log(inputVal);

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


//$(document).ready(function() {
//    $('.filter').multifilter(
//        {
//            'target': $('#main-table')
//        }
//    );
//});