angular.module("myApp")
    .controller('newRecommendCtrl', ['$state', '$stateParams', 'myService', '$rootScope', newRecommendCtrl]);
function newRecommendCtrl ($state, $stateParams,myService, $rootScope) {
    var vm = this;
    //进入新增/编辑页
    if($stateParams.id){
        vm.pageTitle = '推荐编辑';
        vm.showImg = true;
        myService.getRecommendationDetail($stateParams.id)
            .then(function (res) {
                // console.log(res.data);
                if (res.data.status === true) {
                    vm.detail = res.data.data;
                    vm.srcImg = vm.detail.thumnail;
                }
            })
    }else{
        vm.pageTitle = '推荐新增';
    }

    //保存
    vm.save = function () {
        vm.params = {
            title:vm.detail.title,
            url:vm.detail.url,
            thumnail:vm.srcImg
            // 'https://www.baidu.com/img/baidu_jgylogo3.gif'
        };

        if ($stateParams.id) {
            myService.editRecommendation($stateParams.id,vm.params,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
            })
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true){
                        $rootScope.modalAlert('操作成功','保存成功',window.history.go(-1));
                    }else {
                        $rootScope.modalAlert('操作失败','保存异常');
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        }else {
            myService.addRecommendation(vm.params,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
            })
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true){
                        $rootScope.modalAlert('操作成功','保存成功',window.history.go(-1));
                    }else {
                        $rootScope.modalAlert('操作失败','保存异常');
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        }
    }

}