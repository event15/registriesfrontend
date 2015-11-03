(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("registryResource",
                ["$resource",
                 registryResource]);

    function registryResource($resource) {
        return $resource("/madkom/registries/web/rejestry/");
    }
})();