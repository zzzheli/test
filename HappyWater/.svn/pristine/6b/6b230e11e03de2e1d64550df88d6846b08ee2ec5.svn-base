angular.module("myApp")
    .controller('roleCtrl', ['$rootScope', '$state', '$stateParams', 'myService', roleCtrl]);
function roleCtrl ($rootScope, $state, $stateParams, myService) {

    var vm = this;

    vm.roleId = $stateParams.serialId;
    vm.roleName = $stateParams.roleName;
    vm.creator = $stateParams.createdBy;
    vm.updater = $stateParams.updatedBy;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

    vm.getRoles = function () {
        vm.params = {
            serialId: $stateParams.serialId,
            roleName: $stateParams.roleName,
            createdBy: $stateParams.createdBy,
            updatedBy: $stateParams.updatedBy,
            pageNum: $stateParams.pageNumber || 1,
            pageSize: $stateParams.pageSize || 10
        };
        myService.searchRole(vm.params)
            .then(function (res) {
                // console.log('角色列表',res.data);
                if (res.data.status === true) {
                    vm.roleList = res.data.data.roles;
                    vm.page = $stateParams.pageNumber;              //搜索后的页数
                    vm.totalItems = res.data.data.pageTotal;       //搜索后的数据总条数
                }
            })
    };
    vm.getRoles();

    //多条件查询
    vm.search = function () {
        let page;
        if (vm.newPage === undefined) {     //若newPage有值，则点击页码是跳转到newPage（无论点的哪页）
            page = vm.page;
        }else {
            page = vm.newPage;
        }
        $state.go('home.role',{
            pageNumber: page,
            pageSize: vm.size,
            serialId: vm.roleId,
            roleName: vm.roleName,
            createdBy: vm.creator,
            updatedBy: vm.updater
        });

    };

    //清空搜索
    vm.reset = function () {
        vm.page = undefined;
        vm.size = undefined;
        vm.roleId = undefined;
        vm.roleName = undefined;
        vm.creator = undefined;
        vm.updater = undefined;
        vm.search();
    };

    //编辑
    vm.editRole = function (id) {
        // vm.theRole = this.x;
        $state.go('home.newRole', {
            id: id
        }, {reload: true});
    };

    //删除
    vm.deleteRole = function (id) {
        vm.theRoleId = id;
        vm.deleteTip = `<p align="center">您确认要删除吗？删除后<br>拥有当前角色权限的账号将失去该权限。</p>`;
        $rootScope.modalConfirm('删除', vm.deleteTip, function (result) {
            if (result === true) {
                myService.deleteRole(vm.theRoleId)
                    .then(function (res) {
                        // console.log(res);
                        if (res.data.status === true) {
                            $state.reload('home.role');
                            $rootScope.modalAlert('删除', '删除成功');
                        } else {
                            $rootScope.modalAlert('删除', res.data.msg)
                        }
                    }, function () {
                        $rootScope.modalAlert('删除', '删除失败')
                    })
            }
        });
    };

}