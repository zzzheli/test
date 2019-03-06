//启动页
angular.module("myApp")
    .directive('loading',loading);
loading.$inject = ['$timeout'];
function loading($timeout) {
    return {
        restrict: "E",
        templateUrl: "./JS/directives/loading/loading.html",
        link: function (scope, element, attrs) {
            angular.element('.loader-wrapper').remove();
            $timeout(function () {
                angular.element('loading').remove();
            },2000);
        }
    }
}
//插入 <loading></loading>