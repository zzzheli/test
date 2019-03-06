angular.module("myApp")
    .controller('newRoleCtrl', ['$rootScope', '$state', '$stateParams', 'myService', newRoleCtrl]);
function newRoleCtrl ($rootScope, $state, $stateParams, myService) {
    var vm = this;

    //新增、编辑页加载
    if ($stateParams.id) {
        vm.pageTitle = '角色编辑';
        //获取权限
        myService.getModuleRight()
            .then(function (res) {
                // console.log('获取权限列表:',res.data);
                if (res.data.status === true) {
                    vm.permission = res.data.data;
                    // console.log('所有权限',vm.permission);
                    //获得所有权限之后执行下面的请求
                    myService.getRoleDetail($stateParams.id)
                        .then(function (res) {
                            // console.log('获取当前角色权限:',res.data);
                            if (res.data.status === true) {
                                vm.roleDetail = res.data.data;  //角色详情（信息、权限）
                                vm.theRoleName = vm.roleDetail.roleName;  //角色名字
                                vm.roleLevel = vm.roleDetail.roleLevel;  //角色等级
                                // console.log('已有权限',vm.roleDetail.modules);

                                angular.forEach(vm.permission,function (fatherObj) {
                                    angular.forEach(vm.roleDetail.modules,function (existObj) {
                                        // console.log(existObj);
                                        if (fatherObj.moduleName === existObj.moduleName){
                                            fatherObj.select = true;
                                            angular.forEach(fatherObj.sonModule,function (sonObj) {
                                                // console.log(sonObj);
                                                angular.forEach(vm.roleDetail.modules,function (existObj2) {
                                                    if (sonObj.moduleName === existObj2.moduleName) {
                                                        sonObj.select = true;
                                                    }
                                                })

                                            })
                                        }

                                    })
                                });
                                // console.log(vm.permission);
                            }
                        });
                }
            });
    } else {
        vm.pageTitle = '角色新增';
        //获取权限
        myService.getModuleRight()
            .then(function (res) {
                // console.log('获取权限列表:',res.data);
                if (res.data.status === true) {
                    vm.permission = res.data.data;
                    // console.log('所有权限',vm.permission);
                }
            });
    }

    //全选/全不选
    vm.selectAll = function () {
        // console.log('全选',box.select,vm.select);
        vm.permission.forEach(function (father) {
            father.select = !vm.select;
            father.sonModule.forEach(function (child) {
                child.select = !vm.select;
            })
        })
    };
    //一级菜单点击事件
    vm.getFatherName = function ($index,items) {
        // console.log($index,items);
        // console.log(this.x, this.x.modules);
        // let vm = this.x;

        items.sonModule.forEach(function (child) {
            child.select = !items.select;
            // console.log(child.select);
        });
        // console.log(vm.permission);
    };
    //二级菜单点击事件
    vm.getSonName = function ($index,items) {
        // console.log($index,items);
        // console.log(vm.permission);
        // let vm = this.$parent.x;
        items.select = true;
        items.sonModule.forEach(function (item) {
            // item.select = true;
            // console.log(item);
            // console.log(item.select);
        });
    };
    //保存
    vm.saveRole = function () {

        let right = [];
        vm.permission.forEach(function (father) {
            if (father.select === true) {
                right.push(father.moduleName);
            }
            father.sonModule.forEach(function (child) {
                if (child.select === true) {
                    right.push(child.moduleName);
                }
            })
        });
        // console.log(right);

        if ($stateParams.id) {
            //编辑保存
            vm.data = {
                'roleName': vm.theRoleName,
                'roleLevel': vm.roleLevel,
                'moduleName': right
            };
            myService.editRole($stateParams.id,vm.data)
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('成功',res.data.msg,function () {
                            $state.go('home.role');
                        });
                    } else {
                        $rootScope.modalAlert('提示',res.data.msg || '操作异常');
                    }
                })
        }else {
            //新增保存
            vm.data = {
                'roleName': vm.theRoleName,
                'moduleName': right,
                'roleLevel': vm.roleLevel,
                'locked': false
            };
            myService.addRole(vm.data)
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('成功',res.data.msg,function () {
                            $state.go('home.role');
                        })
                    } else {
                        $rootScope.modalAlert('提示',res.data.msg || '操作异常');
                    }
                })
        }

    }

}