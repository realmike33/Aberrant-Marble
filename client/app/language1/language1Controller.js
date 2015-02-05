angular.module('uSpeak.language1', [])

.controller('language1Controller', function($scope, languageService, $state){
  $scope.languages = [['English','us'],['Chinese','cn'],['Spanish','es'],['French','fr'],['Italian','it']];
  $scope.test = function(lang){
    languageService.language.source = lang[0];
    $state.go('language2');
  };

});