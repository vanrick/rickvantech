app.controller('UnderController', function($scope, $http, $route, $routeParams) {
  $scope.view = {}


    // Set the date we're counting down to
    var countDownDate = new Date("July 17, 2017 15:37:25").getTime();

    // Update the count down every 1 second
    $scope.view.x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result in the element with id="demo"
    $scope.view.schedule = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval($scope.view.x);
      $scope.view.schedule = "EXPIRED";
    }

    $scope.$apply()
  }, 1000);

})
