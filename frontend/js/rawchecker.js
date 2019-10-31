(function() {
  "use strict";
  angular
    .module("dizziApp", [
      "apiServices",
      "tokenFactory",
      "languageFactory",
      "formatFactory",
      "apiUrls"
    ])
    .controller("DizziCheckerController", DizziCheckerController);

  function DizziCheckerController(
    apiServices,
    languageFactory,
    formatFactory,
    apiUrls,
    $scope
  ) {
    //build variables for the
    var vm = this;
    // var tokn ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InUucGhpbHMubmdlQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNTg4NCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0xMC0xOSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTcxNzI3OTk5LCJuYmYiOjE1NzE3MjA3OTl9.3OQApfatVqzaERSbbRb2c3QBSr90XkbirTzxxs14agE";

    vm.token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InUucGhpbHMubmdlQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNTg4NCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0xMC0xOSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTcyNTIxNTI2LCJuYmYiOjE1NzI1MTQzMjZ9.evoslT3jUJHIL4jgeikNgg7HITLc1UbYCR90P9zii4s";
    vm.autherror = "";
    getToken();

    var sc = $scope;

    sc.symptoms = "";
    sc.symptomsConfig = "";
    sc.symptomsError = "";

    sc.issues = "";
    sc.issuesConfig = "";
    sc.issuesError = "";

    sc.issueInfo = "";
    sc.issueInfoConfig = "";
    sc.issueInfoError = "";
    sc.issueId = 237;

    sc.diagnosis = "";
    sc.diagnosisConfig = "";
    sc.diagnosisError = "";

    sc.specialisations = "";
    sc.specialisationsConfig = "";
    sc.specialisationsError = "";

    sc.proposedSymptoms = "";
    sc.proposedSymptomsConfig = "";
    sc.proposedSymptomsError = "";

    // get value of inputs
    function getSymptomValue() {
      sc.selectedSymptoms = document.getElementById("symptomID").value;

      console.log(sc.selectedSymptoms);
      // return (sc.selectedSymptoms = document.getElementById("symptomID").value);
    }

    // get value of dob input
    function getDOBValue() {
      sc.yearOfBirth = parseInt(document.getElementById("dob").value);
    }

    // sc.yearOfBirth = document.getElementById("dob").value;
    sc.selectorStatus = {
      value: "1988"
    };

    sc.selectedSymptoms = "";
    sc.gender = {
      value: "female"
    };

    sc.bodyLocations = "";
    sc.bodyLocationsConfig = "";
    sc.bodyLocationsError = "";

    sc.bodySublocations = "";
    sc.bodySublocationsConfig = "";
    sc.bodySublocationsError = "";
    sc.bodyLocationId = 16;

    sc.bodySublocationSymptoms = "";
    sc.bodySublocationSymptomsConfig = "";
    sc.bodySublocationSymptomsError = "";
    sc.bodySublocationId = 0;

    sc.redFlagText = "";
    sc.redFlagTextConfig = "";
    sc.redFlagTextError = "";
    sc.symptomId = 238;

    sc.languages = [
      { value: "en-gb", name: "en-gb" },
      { value: "de-ch", name: "de-ch" },
      { value: "fr-fr", name: "fr-fr" },
      { value: "it-it", name: "it-it" },
      { value: "es-es", name: "es-es" },
      { value: "ar-sa", name: "ar-sa" },
      { value: "ru-ru", name: "ru-ru" },
      { value: "tr-tr", name: "tr-tr" },
      { value: "sr-sp", name: "sr-sp" },
      { value: "sk-sk", name: "sk-sk" }
    ];

    //Setting first option as selected in configuration select
    sc.lang = sc.languages[0].value;

    sc.formats = [
      { value: "json", name: "json" },
      { value: "xml", name: "xml" }
    ];
    //Setting first option as selected in configuration select
    sc.format = sc.formats[0].value;

    /**
     * [loadSymptoms Function makes an api call to get all symptom names and ids ]
     */

    sc.loadSymptoms = function() {
      var url = apiUrls.loadSymptoms;
      generic_api_call(url, "symptoms", "symptomsError", "symptomsConfig");
    };

    /**
     * [loadIssues Function makes an api call to get all issues names and ids ]
     */

    sc.loadIssues = function() {
      var url = apiUrls.loadIssues;
      generic_api_call(url, "issues", "issuesError", "issuesConfig");
    };

    /**
     * [loadIssueInfo Function makes an api call to get all issue info ]
     */
    sc.loadIssueInfo = function(issueId) {
      var url = apiUrls.loadIssueInfo + "/" + issueId + "/info";
      generic_api_call(url, "issueInfo", "issueInfoError", "issueInfoConfig");
    };

    /**
     * [loadDiagnosis Function makes an api call to get diagnosis for given parameters]
     */
    sc.loadDiagnosis = function(selectedSymptoms, gender, yearOfBirth) {
      getDOBValue();
      getSymptomValue();
      var symptoms = selectedSymptoms.split(",");
      var url =
        apiUrls.loadDiagnosis +
        "?symptoms=" +
        JSON.stringify(symptoms) +
        "&gender=" +
        gender.value +
        "&year_of_birth=" +
        yearOfBirth;
      generic_api_call(url, "diagnosis", "diagnosisError", "diagnosisConfig");
    };

    /**
     * [loadSpecialisations Function makes an api call to get specialisations for given parameters]
     */
    sc.loadSpecialisations = function(selectedSymptoms, gender, yearOfBirth) {
      var symptoms = selectedSymptoms.split(",");
      var url =
        apiUrls.loadSpecialisations +
        "?symptoms=" +
        JSON.stringify(symptoms) +
        "&gender=" +
        gender.value +
        "&year_of_birth=" +
        yearOfBirth;
      generic_api_call(
        url,
        "specialisations",
        "specialisationsError",
        "specialisationsConfig"
      );
    };

    /**
     * [loadBodyLocations Function makes an api call to get all body locations]
     */
    sc.loadBodyLocations = function() {
      var url = apiUrls.loadBodyLocations;
      generic_api_call(
        url,
        "bodyLocations",
        "bodyLocationsError",
        "bodyLocationsConfig"
      );
    };

    /**
     * [loadBodySublocations Function makes an api call to get all body sublocations
     * to call other api]
     */
    sc.loadBodySublocations = function(bodyLocationId) {
      var url = apiUrls.loadBodySublocations + "/" + bodyLocationId;
      generic_api_call(
        url,
        "bodySublocations",
        "bodySublocationsError",
        "bodySublocationsConfig"
      );
    };

    /**
     * [loadBodySublocationSymptoms Function makes an api call to get all symptoms for body sublocations. To get all symptoms, bodySublocationId = 0]
     */
    sc.loadBodySublocationSymptoms = function(
      bodySublocationId,
      selectorStatus
    ) {
      var url =
        apiUrls.loadBodySublocationSymptoms +
        "/" +
        bodySublocationId +
        "/" +
        selectorStatus.value;
      generic_api_call(
        url,
        "bodySublocationSymptoms",
        "bodySublocationSymptomsError",
        "bodySublocationSymptomsConfig"
      );
    };

    /**
     * [loadProposedSymptoms Function makes an api call to get proposed symptoms for given parameters
     * to call other api]
     */
    sc.loadProposedSymptoms = function(selectedSymptoms, gender, yearOfBirth) {
      var symptoms = selectedSymptoms.split(",");
      var url =
        apiUrls.loadProposedSymptoms +
        "?symptoms=" +
        JSON.stringify(symptoms) +
        "&gender=" +
        gender.value +
        "&year_of_birth=" +
        yearOfBirth;
      generic_api_call(
        url,
        "proposedSymptoms",
        "proposedSymptomsError",
        "proposedSymptomsConfig"
      );
    };

    /**
     * [loadRedFlagText Function makes an api call to get red flag text for selected symptomId]
     */
    sc.loadRedFlagText = function(symptomId) {
      var url = apiUrls.loadRedFlagText + "?symptomId=" + symptomId;
      generic_api_call(
        url,
        "redFlagText",
        "redFlagTextError",
        "redFlagTextConfig"
      );
    };

    /**
     * [changeLanguage helper Function to change language]
     */
    sc.changeLanguage = function() {
      console.log(sc.lang);
      languageFactory.storeLanguage(sc.lang);
    };

    /**
     * [changeFormat helper Function to change format of the response]
     */
    sc.changeFormat = function() {
      console.log(sc.format);
      formatFactory.storeFormat(sc.format);
    };

    /**
     * Make a POST service call to authenticate and generate a token for API Calls
     */
    function getToken() {
      // dummy data auth
      var username = "u.phils.nge@gmail.com";
      var password = "r3X2Fwj4JHy8o7Y6P";

      // live feed aut data
      // var username = "Yb38F_GMAIL_COM_AUT";
      // var password = "p5FMx63SfYk8b7Q2N";
      // Yb38F_GMAIL_COM_AUT
      // p5FMx63SfYk8b7Q2N

      var uri = "https://authservice.priaid.ch/login";
      var computedHash = CryptoJS.HmacMD5(uri, password);
      var computedHashString = computedHash.toString(CryptoJS.enc.Base64);
      apiServices
        .makeRequest({
          URL: "https://authservice.priaid.ch/login",
          method: "POST",
          headers: {
            Authorization: "Bearer " + username + ":" + computedHashString
          }
        })
        .then(
          function(data) {
            console.log("Token Retrieved", data);
            vm.token = data.data.Token;
            vm.autherror = "";
            console.log(vm.token);
          },
          function(data) {
            console.log("error", data);
            vm.autherror = data.data;
            return false;
          }
        );
    }

    /**
     * Generic API Call to retrieve medical data from APIMedic
     * @param {EndPoint URL} url
     * @param {*} scope_variable_name
     * @param {*} scope_error_variable_name
     * @param {*} scope_config_variable_name
     */
    function generic_api_call(
      url,
      scope_variable_name,
      scope_error_variable_name,
      scope_config_variable_name
    ) {
      var extraArgs =
        "token=" +
        vm.token +
        "&language=" +
        languageFactory.storeLanguage() +
        "&format=" +
        formatFactory.storeFormat();
      url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;
      sc[scope_variable_name] = "loading data from web service...";
      apiServices
        .makeRequest({
          URL: url,
          method: "GET"
        })
        .then(
          function(data) {
            sc[scope_variable_name] =
              data.data != "" ? data.data : "No results found";
            sc[scope_config_variable_name] = data.config;
            sc[scope_error_variable_name] = "";
            console.log("success", data);
          },
          function(data) {
            sc[scope_variable_name] = data.data;
            sc[scope_config_variable_name] = "";
            sc[scope_error_variable_name] = "";
            console.log("error", data);
            return false;
          }
        );
    }
  }
})();
