(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("registryResource",
                ["$resource", "baseUrl",
                 registryResource]);

    function registryResource($resource, baseUrl) {
        return $resource(baseUrl + "/rejestry/:registryId");
    }
})();