(function() {
    "use strict";

    angular
        .module("registriesFrontend")
        .controller("RegistryListController",
                   ["registryResource", "$state",
                       RegistryListController]);

    function RegistryListController(registryResource, $state)
    {
        var vm = this;

        registryResource.query(function (data) {
            vm.registries = data;
        });
    }
}());