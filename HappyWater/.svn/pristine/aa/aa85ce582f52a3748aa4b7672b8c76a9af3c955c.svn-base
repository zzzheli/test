//定义模块
var load = angular.module('scroll-load', []);
// 定义滚动指令
load.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        let forbid = false;     //防止重复触发
        let startY,endY,removing;
        $('.moveToLoad').on('touchstart',function (elm) {
            let touch = elm.originalEvent.targetTouches[0];
            startY = touch.pageY;
        });
        $('.moveToLoad').on('touchend',function(elm) {
            let touch = elm.originalEvent.changedTouches[0];
            endY = touch.pageY;
            removing = endY - startY;
            // console.log('移动距离',removing);
            if (removing < -250) {
                if (!forbid) {
                    forbid = true;
                    angular.element('.moveToLoad').append('<i class="fa fa-refresh fa-pulse refresh" style="color: #d7aa00;font-size: 56px;position: fixed;bottom: 20%;left: calc(50% - 28px);"></i>');
                    //滚动条的高度
                    let scrollTop = $(window).scrollTop() + 1;
                    //文档的高度
                    let scrollHeight = $(document).height();
                    //窗口的高度
                    let windowHeight = $(window).height();
                    if (scrollTop + windowHeight >= scrollHeight) {
                        setTimeout(function () {
                            scope.$apply(attr.whenScrolled);

                            angular.element('.refresh').removeClass('fa-refresh fa-pulse');
                            angular.element('.refresh').addClass('fa-check-circle');
                            setTimeout(function () {
                                angular.element('.refresh').remove();
                                forbid = false;
                            },800);
                        },1000);
                    }
                }
            }
        });
    };
});
// 给要使用下拉刷新的页面（区域）加上 moveToLoad 类名
//使用方法：<div when-scrolled="event()"></div>

