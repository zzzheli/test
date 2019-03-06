angular.module('myApp')
    .directive('datePicker',function () {
       return {
           restrict: 'EA',
           templateUrl:'./JS/directives/datePicker/datePicker.html',
           replace:true,
           scope:{
               time:'=',
           },
           controller: function ($scope) {
               // $scope.time = new Date();    //默认当前日期
               // 开始日期(日期面板状态）
               $scope.popupStart = {
                   opened: false
               };
               $scope.openStart = function () {    //输入框聚焦时显示日期面板
                   $scope.popupStart.opened = true;
                   $scope.maxDay = new Date();
                   }
               }
            }
    });