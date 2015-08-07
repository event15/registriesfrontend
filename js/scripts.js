$(document).on('click', 'a.dodaj-wpis, a.dodaj-rejestr, .container td', function(){
    if( $(".sidebar--right").hasClass( "hide")){
        $(".sidebar--right").removeClass("hide").addClass("show");
        $(".wrapper").removeClass("full-width").addClass("part-width");
    }
});



$(document).click(function(e) {
    if ( $(e.target).closest('.sidebar--right, a.dodaj-wpis, a.dodaj-rejestr, .container td:not(.quick-options)').length === 0 ) {
        if( $(".sidebar--right").hasClass( "show")){
            $(".sidebar--right").removeClass("show").addClass("hide");
            $(".wrapper").removeClass("part-width").addClass("full-width");
        }
    }
});




//$(".wrapper__sidebar--left").on('click', 'li.typ-rejestru', function(){
//    $(".wrapper__sidebar--left li a").removeClass();
//    $("a", this).addClass("selected");
//});

// <ikony sortowanie>*********************

//console.log($( "table" ).find('td:first-child'));

$(document).on('click', 'thead' ,function(){
    console.log("asd");
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
        $(this).filter(":hidden").addClass("checkbox fa fa-square-o");
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

