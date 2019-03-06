angular.module("myApp").directive('sidebar',function () {

    return{
        restrict:'EA',
        transclude:true,
        templateUrl:'./JS/directives/sidebar/sidebar.html',
        controller: function($scope,$state,myService,$cookies,$stateParams){
            var arr = [];
            $scope.admin = $cookies.getObject('userData');
            myService.getModule($scope.admin.userId)
                .then(function success(res){
                    if (res) {
                        if(res.data.status === true){
                            $scope.homeTitle = res.data.data;
                        }else if(res.data.code === 705){
                            alert('用户未登录')
                        }else if(res.data.code === 706){
                            alert('不具备操作其他用户的权限')
                        }
                    }

                    //一级列表点击事件
                    $scope.list = function(item) {
                        if(item.select === false) {
                            angular.forEach($scope.homeTitle, function (first) {
                                first.select = false;
                            });
                        }
                        item.select = !item.select;
                    };

                    //二级列表点击事件
                    $scope.sonList = function (item) {
                        angular.forEach($scope.homeTitle, function(second) {
                            second.sonModule.some(function (b) {
                                b.highlight = false;
                            })
                        });
                        item.highlight = true;
                        $state.go(item.moduleUrl,{
                            moduleId: item.id
                        });
                        arr = $scope.homeTitle;
                        sessionStorage.setItem('arr', JSON.stringify(arr));
                    };

                    // 如果storage保存了数组就用它代替
                    $scope.homeTitle = (JSON.parse(sessionStorage.getItem('arr')) != null) ? JSON.parse(sessionStorage.getItem('arr')) : $scope.homeTitle;

                    // if ($stateParams.moduleId){
                    //     angular.forEach($scope.homeTitle,function (module) {
                    //         angular.forEach(module.sonModule,function (item) {
                    //             if (item.id == $stateParams.moduleId) {
                    //                 item.highlight = true;
                    //                 module.select = true
                    //             }
                    //         })
                    //     })
                    // }

                });
        }
    }
});
//使用sessionStorage保存侧边栏状态，刷新时若有保存，则用存储的sessionStorage来替换请求到的侧边栏
//问题：一是最好不要用sessionStorage来储存信息；二是在某个场景下：如果在你储存了sessionStorage之后，侧边栏发生改变（权限增减），则依旧会替换请求到的侧边栏，从而不能正确获取到侧边栏，需要重开一下网页。

//使用url传递参数来确定侧边栏的展开状态：在点击侧边栏的时候将该模块的某条可悲识别的信息传递到url中，然后在刷新的时候通过url中的参数来辨别侧边栏的状态
//问题：需要给每一个页面的url增加一个参数，以及给每一个跳转的路由添加一个参数，不然在没有参数的页面进行刷新会导致侧边栏为默认状态。

//通过识别模块名（正则）来确定当前页面所在模块，从而显示侧边栏状态。
//问题：一是我不会；二是在每个模块的子页，url是没有该模块名的。（划掉）