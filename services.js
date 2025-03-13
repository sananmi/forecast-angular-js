weatherApp.service('cityService', ['$http', '$resource', function($http, $resource) {
    this.city = "New York, NY";
    this.forecast = [];

    // HTTP request
    // $http.get('https://api.weather.gov/gridpoints/MTR/88,126/forecast')
    //     .then(function(response) {
    //         console.log(response.data.properties.periods);
    //     });

    // Resource Request
    this.getForecast =  $resource('https://api.weather.gov/gridpoints/MTR/88,126/forecast', {}, {
        get: {
            method: 'GET',
            isArray: false,
            headers: {
                "User-Agent": "AngularJS-Demo-App"
            }
        }
    });
}]);