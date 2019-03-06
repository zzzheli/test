//新增账号
angular.module("myApp")
    .controller('newAccountCtrl', ['$rootScope', '$state', '$stateParams', 'myService', newAccountCtrl]);
function newAccountCtrl ($rootScope, $state, $stateParams, myService) {
    var vm = this;
    var roleArr = []; //用来保存角色并上传
    let right = [];  //声明一个空数组用来保存处理后的角色权限
    vm.right = right;  //绑定数据
    vm.getRoles = function () {
        myService.getRoleFilter()
            .then(function (res) {
                // console.log('角色列表',res.data.data);
                if (res.data.status === true) {
                    vm.roles = res.data.data;   //获取原始角色数组
                    vm.roles.forEach(function (item) {   //处理成对象数组
                        arrItem = {
                            'name': item,
                            'select': false
                        };
                        right.push(arrItem);
                    });
                    vm.getDetail();
                }
            })
    };
    vm.getRoles();

    //进入编辑、新增页
    vm.getDetail = function () {
        if($stateParams.id){
            vm.pageTitle = '账户编辑';
            myService.getAccountDetail($stateParams.id)
                .then(function (res) {
                    // console.log('获取账户信息',res.data);
                    // console.log('获取已有角色',res.data.data.roles);
                    if (res.data.status === true) {
                        vm.detail = res.data.data;      //详情
                        vm.accountName = vm.detail.account;     //账户名
                        vm.locked = vm.detail.locked;       //状态
                        vm.exist = res.data.data.roles;     //已有角色
                        angular.forEach(vm.exist,function (item) {
                            angular.forEach(vm.right,function (obj) {
                                if (obj.name === item.roleName){
                                    obj.select = true;
                                    roleArr.push(item.roleName);  //添加到保存数组
                                }
                            })
                        });
                        // console.log(vm.right);
                    }else {
                        $rootScope.modalAlert('错误','信息获取异常。',function () {
                            window.history.back(-1);
                        })
                    }
                })
        }else{
            vm.pageTitle = '账户新增';
        }
    };
    //角色数组
    vm.selection = function(event,x){
        let checked = event.target;
        if (checked.checked) {
            roleArr.push(x);
        }else{
            roleArr.splice(roleArr.indexOf(x),1);
        }
        // console.log(event,x);
    };
    //保存
    vm.saveAccount = function () {
        vm.params = {
            account: vm.accountName,
            password: vm.password,
            roleName: roleArr,
            locked: vm.locked
        };
        // console.log(vm.params);
        //编辑保存
        if ($stateParams.id){
            myService.editAccount($stateParams.id,vm.params)
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true){
                        $rootScope.modalAlert('操作成功','保存成功',function () {
                            $state.go('home.account')
                        });
                    } else{
                        $rootScope.modalAlert('操作失败',res.data.msg || '操作异常');
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        } else {
            //新增保存
            myService.addAccount(vm.params)
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('操作成功','保存成功',function () {
                            $state.go('home.account')
                        });
                    } else {
                        $rootScope.modalAlert('操作失败', res.data.msg);
                    }
                },function () {
                    $rootScope.modalAlert('操作失败','保存失败');
                })
        }
    }
}