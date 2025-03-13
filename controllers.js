weatherApp.controller('weatherReportController', ['$scope', '$routeParams', 'cityService', function($scope, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.forecast = cityService.forecast;
    $scope.days = $routeParams.days || 2;
    
    cityService.getForecast.get({}, function (data) {
        $scope.forecast = data.properties.periods.filter(function(forecast) {
            return forecast.number % 2 !== 0;
        }).splice(0, $scope.days);
        console.log($scope.forecast);
    }, function (error) {
        console.log(error);
    });
}]);

weatherApp.controller('homeController', ['$scope', '$routeParams', '$location', 'cityService', function($scope, $routeParams, $location, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

    $scope.$watch('days', function() {
        cityService.days = $scope.days;
    });

    $scope.submit = function() {
        $location.path("/forecast");
    };
}]);
