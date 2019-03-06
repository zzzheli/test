 angular.module('myApp')  //对应项目的module
    .directive('swipers',swipers);
    swipers.$inject = ['$timeout'];
    function swipers($timeout) {
        return {
            restrict: "EA",
            scope: {
                data:"="
            },
            template: '<div class="swiper-container silder"">'+
                '<ul class="swiper-wrapper">'+
                '<li class="swiper-slide" ng-repeat="item in data">'+
                '<a href="{{item.contentUrl}}"><img ng-src="{{item.src}}" style="width: 100%;height: 100%;" /></a>'+
                '</li>'+
                '</ul>'+
                '<div class="swiper-pagination"></div>'+
                '</div>',
            link: function(scope, element, attrs) {
                // scope.swiper = function () {
                //     $timeout(function(){
                //         var swiper = new Swiper('.swiper-container', {   //轮播图绑定样式名
                //             pagination: {   //焦点跟随
                //                 el: '.swiper-pagination',
                //                 clickable: true
                //             },
                //             paginationClickable: true,
                //             autoplay:{
                //                 delay:2000,
                //                 disableOnInteraction:false
                //             },
                //             lazy: {
                //                 loadPrevNext: true,
                //             },
                //             loop:true
                //         });
                //     },0);
                // }
            }
        };
    }