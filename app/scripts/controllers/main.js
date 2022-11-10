'use strict';

/**
 * @ngdoc function
 * @name gameFloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameFloApp
 */
angular.module('gameFloApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
