app.controller('HomeController', function($scope, $http, $location, $route, $routeParams, $anchorScroll) {
  $scope.view = {}
  $(document).ready(function(){
    $("#wrapper").fullpage();
  })
  $scope.scrollTo = function(id) {
        // var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        // $location.hash(old);
   }
})
