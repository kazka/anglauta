'use strict';

/**
 * @ngdoc overview
 * @name anglautaApp
 * @description
 * # anglautaApp
 *
 * Main module of the application.
 */
var app = angular.module('anglautaApp', []);

app.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
