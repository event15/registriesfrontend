(function() {
    "use strict";

    angular
        .module("registriesFrontend")
        .controller("PositionListController",
                   ["positionResource",
                       PositionListController]);

    function PositionListController(positionResource, registryId)
    {
        var vm = this;

        positionResource.query(function(data) {
            vm.positions = data;
        }, registryId);
    }
}());