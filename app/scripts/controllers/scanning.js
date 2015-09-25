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

    var beat = 1;
    for (var i=0; i<10; i++) {
      $timeout(function(){
        $scope.showStation1 = !$scope.showStation1;
      }, beat * i * 1000);
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
