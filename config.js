var app = angular.module("sentimentModule");

app.config(function($routeProvider) {
  $routeProvider

  .when("/input", {
    controller: "inputController",
    templateUrl: "input.html"
  })

  .when("/output", {
    controller: "outputController",
    templateUrl: "output.html"
  })

  .when("/home", {
    controller: "homeController",
    templateUrl: "home.html"
  })

  .otherwise({
    redirectTo: "/home"
  })
})
