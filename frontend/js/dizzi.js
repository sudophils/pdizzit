(function() {
  "user-strict";
  angular
    .module("dizziApp", [
      "apiServices",
      "languageFactory",
      "formatFactory",
      "apiUrls"
    ])
    .config(config);

  config.$inject = ["$routeProvider"];

  function config($routeProvider) {
    console.log("working");
    $routeProvider
      .when("/", {
        controller: "rawchecker",
        templateUrl: "../views/pages/index.ejs",
        controllerAs: "vm"
      })
      .otherwise({ redirectTo: "/" });
  }
})();
