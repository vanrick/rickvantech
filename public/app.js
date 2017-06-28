var app = angular.module("personal-site", ['ngRoute']);


app.config(function($routeProvider, $locationProvider, $routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/', {
        templateUrl: 'views/underConstruction.html',
        controller: 'UnderController'
      })
      // .when('/checkout', {
      //   templateUrl: 'views/checkout.html',
      //   controller: 'HomeController'
      // })
      .otherwise('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      $locationProvider.html5Mode(true)
});
// app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
//   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//     $location.hash($routeParams.scrollTo);
//     $anchorScroll();
//   });
// })
