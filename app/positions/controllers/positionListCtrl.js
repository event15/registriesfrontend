(function() {
    "use strict";

    angular
        .module("registriesFrontend")
        .controller("PositionListController",
                   ["position",
                       PositionListController]);

    function PositionListController(position)
    {
        var vm = this;
        vm.positions = position;
    }
}());