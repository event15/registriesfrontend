(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("positionResource",
                ["$resource",
                 positionResource]);

    function positionResource($resource, registryId) {
        return $resource("/registries/web/rejestry/:registryId/pozycje");
    }
})();