(function() {
    "use strict";

    var app = angular
        .module("registriesFrontend",
               ["common.services",
                /*"positionResourceMock",*/
                "ui.router"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider)
        {
            $urlRouterProvider.otherwise("/main");

            $stateProvider

            .state("main", {
                url: "/main",
                views: {
                    "sidebarView": {
                        templateUrl: "app/sidebarView.html",
                        controller: ""
                    },
                    "contentView": {
                        templateUrl: "app/contentView.html",
                        controller: "PositionListController as vm"
                    }
                }
            })

            .state("main.positionState", {
                url: "/pozycje/:positionId",

                views: {
                    "positionsList": {
                        templateUrl: "/positions/views/positionListView.html",
                    }
                }

            })

            .state("main.addPositionState", {
                url: "pozycje/edit/:positionId",
                templateUrl: "app/positions/views/positionEditView.html",
                controller: "PositionEditController as vm"
            })
        }]
    );
}());