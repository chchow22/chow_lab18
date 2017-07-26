var app = angular.module("sentimentModule");

app.controller("outputController", function($scope, sentimentFactory, $http, $location) {
  $scope.data = sentimentFactory.getAPI();
  $scope.goBack = function() {
    $location.path("/input");
    console.log("working");
  };
});
