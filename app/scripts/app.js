'use strict';


var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);


/**
 * @ngdoc overview
 * @name gameFloApp
 * @description
 * # gameFloApp
 *
 * Main module of the application.
 */
angular.module('gameFloApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase',
  'firebase.utils',
  'simpleLogin',
  'underscore'
  ]);

