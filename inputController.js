var app = angular.module("sentimentModule");

app.controller("inputController", function($scope, sentimentFactory, $http, $location) {

  $scope.setData = function(userInput) {
    sentimentFactory.setAPI(userInput).then(function() {
      console.log("hi");
      $location.path("/output");
    });
  };

});
