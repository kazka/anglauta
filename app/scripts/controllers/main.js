'use strict';

/**
 * @ngdoc function
 * @name anglautaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglautaApp
 */

var app = angular.module('anglautaApp')

app.controller('MainCtrl', function ($scope, $http) {
    $scope.ketju = {};
    $scope.msg = {};

    $http.get('http://anglauta.herokuapp.com/ketjus.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.ketjus = data;
    });

    $scope.createKetju = function() {
        $http.post('http://anglauta.herokuapp.com/ketjus.json', $scope.ketju).success( function(data, status, headers, config) {
            $scope.ketjus.push(data)
        });
        $scope.ketju = {}
        $scope.createMsg();
    };

    $scope.createMsg = function($ketjuid) {
        $scope.msg.ketju_id = $ketjuid;
        $http.post('http://anglauta.herokuapp.com/messages.json', $scope.msg).success( function(data, status, headers, config) {
            $scope.messages.push(data)
        });
        $scope.msg = {}
    }
});
