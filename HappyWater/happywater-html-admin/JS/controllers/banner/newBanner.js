//Banner新增/编辑
angular.module("myApp")
    .controller('newBannerCtrl', ['$state', '$stateParams', '$rootScope', 'myService', newBannerCtrl]);
function newBannerCtrl ($state, $stateParams, $rootScope, myService) {
    var vm = this;
    //进入新增/编辑页
    if($stateParams.id){
        vm.pageTitle = '编辑Banner';
        vm.showImg = true;
        myService.getBannerDetail($stateParams.id)
            .then(function (res) {
                vm.detail = res.data.data;
                vm.srcImg = vm.detail.thumnail;
            })
    }else{
        vm.pageTitle = '新增Banner';
    }
    //保存
    vm.saveBanner = function () {
        vm.params = {
            'title': vm.detail.title,
            'url': vm.detail.url,
            'intervalTime': vm.detail.intervalTime,
            'thumnail': vm.srcImg
            // 'https://www.baidu.com/img/baidu_jgylogo3.gif'
        };

        if ($stateParams.id) {
            myService.editBanner($stateParams.id,vm.params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
            })
                .then(function (res) {
                    // console.log(res);
                    if (res.data.status === true){
                        $rootScope.modalAlert('操作成功','保存成功',function () {
                            window.history.go(-1);
                        });
                    }else {
                        $rootScope.modalAlert('操作失败','保存异常');
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        }else {
            myService.addBanner(vm.params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
            })
                .then(function (res) {
                    if (res.data.status === true){
                        $rootScope.modalAlert('操作成功','保存成功',function () {
                            window.history.go(-1);
                        });
                    }else {
                        $rootScope.modalAlert('操作失败','保存异常');
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        }
    }
}