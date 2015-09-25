'use strict';

/**
 * @ngdoc function
 * @name neuqueninitiumdatacomApp.controller:ScanningCtrl
 * @description
 * # ScanningCtrl
 * Controller of the neuqueninitiumdatacomApp
 */
angular.module('neuqueninitiumdatacomApp')
  .controller('ScanningCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = function(){
      alert('hel');
    };

    $('#mixer').keypress(function(){
      if ( event.which == 'a'.charCodeAt(0) ) {
        $scope.showStation1 = !$scope.showStation1;
        console.log($scope.showStation1);
        $scope.$apply();
        event.preventDefault();
        return ;
      }
      if ( event.which == 's'.charCodeAt(0) ) {
        $scope.showStation2 = !$scope.showStation2;
        event.preventDefault();
        $scope.$apply();
        return ;
      }
      if ( event.which == 'd'.charCodeAt(0) ) {
        $scope.showStation3 = !$scope.showStation3;
        event.preventDefault();
        $scope.$apply();
        return ;
      }
    });

    $scope.earthDiameter = 500;

    var songLength = 4 * 60 + 45; // 4:45
    var beatDuration = 60 / 127 * 1000; // beat duration at 127 BPM
    var beatNumber = songLength * 1000 / beatDuration;
    for (var i=0; i<beatNumber; i++) {
      $timeout(function(){
        $scope.showStation3 = !$scope.showStation3;
      }, beatDuration * i);
    }

    var toggleStation1 = function(){
      $scope.showStation1 = !$scope.showStation1;
      $timeout(function(){
        $scope.showStation1 = !$scope.showStation1;
      }, beatDuration * 2);
    };

    var strategyArray = [
      {
        time: beatDuration * 5,
        action: toggleStation1,
      }
    ];

    for (var i=0; i<strategyArray.length; i++) {
      $timeout(strategyArray[i].action, strategyArray[i].time);
    }

  });

//angular.directive('myEnter', function () {
//  return function (scope, element, attrs) {
//    element.bind("keydown keypress", function (event) {
//      if(event.which === 13) {
//        scope.$apply(function (){
//          scope.$eval(attrs.myEnter);
//        });
//
//        event.preventDefault();
//      }
//    });
//  };
//});
