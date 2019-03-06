//定义模块
var refresh = angular.module('scroll-refresh', []);
// 定义滚动指令
refresh.directive('whenScrollTop', function() {
    return function(scope, elm, attr) {
        // body窗口的滚动加载--需要Jquery
        let forbid = false;     //防止重复刷新
        let startY,endY,removing;
        $('.moveToRefresh').on('touchstart',function (elm) {
            let touch = elm.originalEvent.targetTouches[0];
            startY = touch.pageY;
        });
        $('.moveToRefresh').on('touchend',function(elm) {
            let touch = elm.originalEvent.changedTouches[0];
            endY = touch.pageY;
            removing = endY - startY;
            // console.log('移动距离',removing);
            //滚动条的高度
            let scrollTop = $(window).scrollTop();
            // console.log(scrollTop);
            if (removing > 250 && scrollTop === 0) {
                if (!forbid) {
                    forbid = true;
                    angular.element('.moveToRefresh').append('<i class="fa fa-spinner fa-pulse refresh" style="color: #d7aa00;font-size: 56px;position: fixed;top: 10%;left: calc(50% - 28px);"></i>');
                    setTimeout(function () {
                        scope.$apply(attr.whenScrollTop);
                        angular.element('.refresh').removeClass('fa-spinner fa-pulse');
                        angular.element('.refresh').addClass('fa-check');
                        setTimeout(function () {
                            angular.element('.refresh').remove();
                            forbid = false;
                        },800);
                    },1000);
                }
            }
        });
    };
});
// 给要使用下拉刷新的页面（区域）加上 moveToRefresh 类名
//使用方法：<div when-scroll-top="event()"></div>