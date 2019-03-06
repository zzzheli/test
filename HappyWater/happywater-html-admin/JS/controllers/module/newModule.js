//模块新增、编辑
angular.module("myApp")
    .controller('newModuleCtrl',  ['$rootScope', '$state', '$stateParams', 'myService',newModuleCtrl]);
function newModuleCtrl ($rootScope, $state, $stateParams, myService) {
    var vm = this;
    //进入新增编辑页
    if ($stateParams.id) {
        vm.pageTitle = '模块编辑';

        myService.getModuleDetail($stateParams.id)
            .then(function (res) {
                // console.log(res.data.data);
                vm.detail = res.data.data;
                vm.moduleName = vm.detail.moduleName;
                vm.moduleUrl = vm.detail.moduleUrl;
                vm.moduleFatherId = vm.detail.fatherModule;
                vm.moduleType = vm.detail.moduleType;
            });
    }else {
        vm.pageTitle = '模块新增';
    }
    //保存
    vm.saveModule = function () {
        //编辑保存
        if ($stateParams.id) {
            vm.params = {
                moduleName: vm.moduleName,
                moduleUrl: vm.moduleUrl,
                fatherModule: vm.moduleFatherId,
                moduleType: vm.moduleType
            };
            myService.editModule($stateParams.id,vm.params)
                .then(function (res) {
                    if (res.data.status === true){
                        $rootScope.modalAlert('操作成功','保存成功',window.history.go(-1));
                    }else {
                        $rootScope.modalAlert('操作失败', res.data.msg);
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        }else {
            //新增保存
            vm.params = {
                moduleName: vm.moduleName,
                moduleUrl: vm.moduleUrl,
                fatherModule: vm.moduleFatherId,
                moduleType: vm.moduleType
            };
            // console.log(vm.params);
            myService.addModule(vm.params)
                .then(function (res) {
                    // console.log(res);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('操作成功','保存成功',window.history.go(-1));
                    }else {
                        $rootScope.modalAlert('操作失败',res.data.msg);
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        }
    }
}