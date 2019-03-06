angular.module('myApp')
    .directive('timePicker', function () {
        return {
            restrict: 'EA',
            templateUrl: './JS/directives/timePicker/timePicker.html',
            replace: true,
            scope: {
                timeNode: '=',
            },
            controller: function ($scope) {
                $scope.timeNode = new Date();
                $scope.timeNode.setSeconds(0);
                $scope.timeNode.setMilliseconds(0);
                $scope.hstep = 1;  //hours step
                $scope.mstep = 1;  // minute step
                $scope.ismeridian = false;  // AM/PM
            }
        }
    });