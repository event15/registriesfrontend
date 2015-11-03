(function() {
    "use strict";

    angular
        .module("registriesFrontend")
        .controller("RegistryListController",
                   ["registryResource",
                       RegistryListController]);

    function RegistryListController(registryResource)
    {
        var vmm = this;

        registryResource.query(function (data) {
            vmm.registries = data;
        });
    }
}());