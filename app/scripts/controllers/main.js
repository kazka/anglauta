'use strict';

/**
 * @ngdoc function
 * @name anglautaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglautaApp
 */

var myFirebaseRef = new Firebase("https://glaring-inferno-6464.firebaseio.com/");

var msgRef = myFirebaseRef.child("msgs");

msgRef.set({
    msg1: {
        user: "kaka",
        subject: "bghuhvosv",
        body: "hvoava"
    }
});

msgRef.on('value', function (snapshot) {
    console.log(snapshot.val());
}, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
});

var app = angular.module('anglautaApp');

app.controller('MainCtrl', function ($scope, $http) {
    $http.get(myFirebaseRef).success( function(data, status, headers, config) {
        console.log(data);
        $scope.entries = data;
    });

    $scope.createMsg = function() {
        myFirebaseRef.set({
            user: ""
        });
    }
});

