angular.module("myApp")
    .controller('accountCtrl', ['$rootScope', '$state', '$stateParams', 'myService', accountCtrl]);
function accountCtrl ($rootScope, $state, $stateParams, myService) {
    var vm = this;
    vm.accountId = $stateParams.serialId;
    vm.roleName = $stateParams.roleName;
    vm.accountName = $stateParams.account;
    vm.creator = $stateParams.createdBy;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

    vm.getAccount = function () {
        // console.log('获取账户列表····');
        vm.params = {
            serialId: $stateParams.serialId,
            roleName: $stateParams.roleName,
            account: $stateParams.account,
            createdBy: $stateParams.createdBy,
            pageNum: $stateParams.pageNumber || 1,
            pageSize: $stateParams.pageSize || 10
        };
        myService.searchAccount(vm.params)
            .then(function (res) {
                console.log('账户列表',res.data);
                if (res.data.status === true) {
                    vm.accountList = res.data.data.managers;
                    vm.page = $stateParams.pageNumber;              //搜索后的页数
                    vm.totalItems = res.data.data.pageTotal;       //搜索后的数据总条数
                }
            });
        myService.getRoleFilter()
            .then(function (res) {
                if (res.data.status === true) {
                    vm.roles = res.data.data;
                }
            });
    };
    vm.getAccount();


    //多条件查询
    vm.search = function () {
        // console.log('查询···');
        let page;
        if (vm.newPage === undefined) {     //若newPage有值，则点击页码是跳转到newPage（无论点的哪页）
            page = vm.page;
        }else {
            page = vm.newPage;
        }
        $state.go('home.account',{
            pageSize: vm.size,
            pageNumber: page,
            serialId: vm.accountId,
            roleName: vm.role,
            account: vm.accountName,
            createdBy: vm.creator
        });

    };

    //清空搜索
    vm.reset = function () {
        vm.accountId = undefined;
        vm.role = undefined;
        vm.accountName = undefined;
        vm.creator = undefined;
        vm.search();
    };

    //编辑
    vm.editAccount = function (id) {
        $state.go('home.newAccount',{
            id: id
        },{reload: true});
    };

    //删除
    vm.deleteAccount = function (id) {
        vm.theAccountId = id;
        vm.deleteTip = `<p align="center">您确认要删除吗？删除后<br>当前账号将无法登陆。</p>`;
        $rootScope.modalConfirm('删除',vm.deleteTip,function (result) {
            if (result === true) {
                myService.deleteAccount(vm.theAccountId)
                    .then(function (res) {
                        if (res.data.status === true) {
                            $state.reload('home.account');
                            $rootScope.modalAlert('删除','删除成功');
                        }else {
                            $rootScope.modalAlert('删除',res.data.msg || '操作异常')
                        }
                    },function () {
                        $rootScope.modalAlert('删除','删除失败')
                    })
            }
        });
    };
}