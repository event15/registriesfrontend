(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("positionResource",
                ["$resource", "baseUrl",
                 positionResource]);

    function positionResource($resource, baseUrl) {
        return $resource(baseUrl + "/rejestry/:registryId/pozycje");
    }
})();