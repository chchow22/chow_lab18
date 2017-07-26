var app = angular.module("sentimentModule");

app.factory("sentimentFactory", function($http) {
  var dataAPI;
  return {
    setAPI: setAPI,
    getAPI: getAPI
  }

  function setAPI(userInput) {
    var weatherPromise = $http({
      method: "GET",
      url: "https://simple-weather.p.mashape.com/weather?lat=" + userInput.lat + "&lng=" + userInput.long,
      headers: {
        "X-Mashape-Key": "Ri36GWK6kumshWzUw0nSBbMgzeRlp1XKRBpjsnSU6Afxfb7Ovd",
        "Accept": "text/plain"
      },
    }).then(function(data) {
      dataAPI = data.data;
      console.log(data);
      console.log(userInput.long);
    });

    return weatherPromise;
  }

  function getAPI() {
    return dataAPI;
  }
});
