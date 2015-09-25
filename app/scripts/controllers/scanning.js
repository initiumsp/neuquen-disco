'use strict';

/**
 * @ngdoc function
 * @name neuqueninitiumdatacomApp.controller:ScanningCtrl
 * @description
 * # ScanningCtrl
 * Controller of the neuqueninitiumdatacomApp
 */
angular.module('neuqueninitiumdatacomApp')
  .controller('ScanningCtrl', function ($scope, $timeout, $http) {
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
        $scope.showStation['1'] = !$scope.showStation['1'];
        console.log($scope.showStation1);
        $scope.$apply();
        event.preventDefault();
        return ;
      }
      if ( event.which == 's'.charCodeAt(0) ) {
        $scope.showStation['2'] = !$scope.showStation['2'];
        event.preventDefault();
        $scope.$apply();
        return ;
      }
      if ( event.which == 'd'.charCodeAt(0) ) {
        $scope.showStation['3'] = !$scope.showStation['3'];
        event.preventDefault();
        $scope.$apply();
        return ;
      }
    });

    $scope.showStation = {
      '1': false,
      '2': false,
      '3': false
    };

    $scope.toggleStation = function(station) {
      $scope.showStation[station] = !$scope.showStation[station];
    };

    $scope.earthDiameter = 500;
    $scope.moonDiameter = 500;

    var songLength = 4 * 60 + 45; // 4:45
    var beatDuration = 60 / 127 * 1000; // beat duration at 127 BPM
    var beatNumber = songLength * 1000 / beatDuration;
    for (var i=0; i<beatNumber; i++) {
      $timeout(function(){
        $scope.toggleStation('3');
      }, beatDuration * i);
    }

    var toggleStation1 = function(){
      $scope.toggleStation('1');
      $timeout(function(){
        $scope.toggleStation('1');
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
    };

    $http.get('/rms_volume.json').then(function(response){
      //console.log(response);
      for (var i=0; i<response.data.length; i++) {
        var a = function(){
            var interval = 1.0 * response.data[i].interval;
            var rms = 1.0 * response.data[i].rms;
            console.log(interval);
            console.log(rms);
            console.log(response.data.length);
            $timeout(function(){
              //console.log('here');
              //$scope.earthDiameter = 1000 * response.data[i].rms;
              $scope.moonDiameter = 10 * rms;
              //console.log(rms);
            }, interval * beatDuration);
            //$timeout(strategyArray[i].action, strategyArray[i].time);
        };
        a();
      }
    }, function(){
      //fail
    });


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
