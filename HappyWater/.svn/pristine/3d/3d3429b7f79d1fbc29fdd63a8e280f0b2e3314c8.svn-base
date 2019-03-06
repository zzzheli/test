//60秒倒计时
angular.module('myApp')
    .directive('countdown',countdown);
countdown.$inject = ['$interval'];
function countdown($interval) {
    return{
        restrict: 'EA',
        template: '<button class="btn btn-default pull-right" ng-bind="description" ng-click="sendCode()" style="width:100%; font-size: 34px; display: inline-block; border-radius: 10px;" ng-disabled="isDisabled"></button>',
        link: function (scope, element, attrs) {
            scope.description = '获取验证码';
            scope.second = 59;
            //发送验证码
            let timerHandler;
            scope.sendCode = function () {
                scope.isDisabled = true;
                if (timerHandler) {
                    return;
                }
                timerHandler = $interval(function () {
                    if (scope.second <= 0) {
                        $interval.cancel(timerHandler);
                        timerHandler = undefined;
                        scope.second = 59;
                        scope.description = '获取验证码';
                        scope.isDisabled = false;
                    } else {
                        scope.description = "重新发送(" + scope.second +"s)";
                        scope.second--;
                    }
                },1000,60);
                //发送
            }
        }
    }
}

/*
这里是使用方法：
html中插入：<countdown ng-click='yourEvent()'></countdown>
 */