'use strict';

/**
 * @ngdoc function
 * @name anglautaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglautaApp
 */

var app = angular.module('anglautaApp', []);

app.controller('MainCtrl', function ($scope, $http, $filter) {
    $scope.ketju = {};
    $scope.msg = {};

    $http.get('http://anglauta.herokuapp.com/ketjus.json').success( function(data, status, headers, config) {
        console.log(data);
        $scope.ketjus = data;
    });

    $scope.createKetju = function() {
        $http.post('http://anglauta.herokuapp.com/ketjus.json', $scope.ketju).success( function(data, status, headers, config) {
            $scope.ketjus.push(data);
            $scope.createMsg(data.id);
        });
        $scope.ketju = {};
    };

    $scope.createMsg = function($ketjuid) {
        console.log($scope.msg);
        $scope.msg.ketju_id = $ketjuid;
        $http.post('http://anglauta.herokuapp.com/messages.json', $scope.msg).success( function(data, status, headers, config) {
            var ketju = $filter('filter')($scope.ketjus, {id: $ketjuid}, true);
            if (ketju.length) {
                ketju[0].messages.push(data);
            }
        });
        $scope.msg = {};
    }
});


