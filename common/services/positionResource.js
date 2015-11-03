(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("positionResource",
                ["$resource",
                 positionResource]);

    function positionResource($resource) {
        return $resource("/madkom/registries/web/rejestry/1/pozycje/");
    }
})();