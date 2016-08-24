var myApp = angular.module("myApp", ['ngRoute']); //dependency injection array

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/chad', {
        templateUrl: "/views/partials/chad.html",
        controller: "chadController"
    }).
    when('/katya', {
        templateUrl: "/views/partials/katya.html",
        controller: "katyaController"
    }).
    when('/bob', {
        templateUrl: "/views/partials/bob.html",
        controller: "bobController"
    }).
    otherwise({
        redirectTo: "/ubetterwerk"
    });
}]);

myApp.controller('chadController', ['$scope', function($scope) {
    console.log("You clicked on Chad Micheals");

}]);
myApp.controller('bobController', ['$scope', function($scope) {
    console.log("You clicked on Bob the Drag Queen");

}]);
myApp.controller('katyaController', ['$scope', function($scope) {
    console.log("You clicked on Katya Zamolodchikova");

}]);
