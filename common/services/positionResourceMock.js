(function () {
    "use strict";

    var app = angular
        .module("positionResourceMock",
               [/*"ngMockE2E"*/]);

    app.run(function ($httpBackend)
    {
        var positions = [
            {
                "id": 1,
                "brand": "fiatekkk",
                "model": "256B",
                "registrationNumber": "ZSD 54321",
                "others": "komentarze i inne",
                "terms": [
                    {
                        "expirationDate": {
                            "date": "2016-08-12 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Europe\/Berlin"
                        },
                        "notify": [
                            [
                                "dzia\u0142 it",
                                "ti@mail.pl"
                            ],
                            [
                                "dzia\u0142 hr",
                                "hr@mail.pkl"
                            ]
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "brand": "fiat",
                "model": "126b",
                "registrationNumber": "ZSD 12345",
                "others": "inne",
                "terms": [
                    {
                        "expirationDate": {
                            "date": "2016-08-12 00:00:00.000000",
                            "timezone_type": 3,
                            "timezone": "Europe\/Berlin"
                        },
                        "notify": [
                            [
                                "dzia\u0142 it",
                                "ti@mail.pl"
                            ],
                            [
                                "dzia\u0142 hr",
                                "hr@mail.pkl"
                            ]
                        ]
                    }
                ]
            }

        ];
        var positionUrl = "/app/pozycje";

        $httpBackend.whenGET(positionUrl).respond(positions);

        $httpBackend.whenGET(/app/).passThrough();
    });
})();