angular.module("myApp")
    .controller('debtCtrl',['$rootScope', '$http', '$state', '$stateParams', 'myService', debtCtrl]);
function debtCtrl ($rootScope, $http,$state, $stateParams,myService) {
    var vm = this;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;
    // $scope.page = $stateParams.pageNumber === undefined ? 1 : $stateParams.pageNumber;
    vm.serialId = $stateParams.serialId;
    vm.companyName = $stateParams.companyName;
    vm.debtPerson = $stateParams.debtPerson;
    vm.status = $stateParams.status;

    //GET请求表格数据渲染
    vm.getSearch = function () {
        //模糊查询 债权
        // $http({
        //     method: 'GET',
        //     url: '/happywater-admin-ajax/a/business/business/company/companiessearching',
        //     params: {
        //         pageNumber:$stateParams.pageNumber || 1,
        //         pageSize:$stateParams.pageSize || 10,
        //         serialId:$stateParams.serialId,
        //         companyName:$stateParams.companyName,
        //         debtPerson:$stateParams.debtPerson,
        //         status:$stateParams.status,
        //     }
        // })
        vm.params = {
            pageNumber:$stateParams.pageNumber || 1,
            pageSize:$stateParams.pageSize || 10,
            serialId:$stateParams.serialId,
            companyName:$stateParams.companyName,
            debtPerson:$stateParams.debtPerson,
            status:$stateParams.status,
        };
        myService.debtSearch(vm.params)
            .then(function successCallback(response) {
            // console.log(response);
            // $scope.id = $scope.userList.id;
            // $scope.locked = $scope.userList.locked;
            vm.debtList = response.data.data.companies;
            vm.page = $stateParams.pageNumber;                     //搜索后的页数
            vm.totalItems = response.data.data.total;        //搜索后的数据总条数
        });
    };
    vm.getSearch();

    //查询
    vm.search = function () {
        let page ;
        if(vm.newPage === undefined ){
            page = vm.page;
        }else {
            page = vm.newPage;
        }
        $state.go('home.company',{
            pageNumber:page,
            pageSize:vm.size,
            serialId:vm.serialId,
            companyName:vm.companyName,
            debtPerson:vm.debtPerson,
            status:vm.status,
        },{reload:true});
        // console.log(vm.debtPerson,vm.size,page);
        //自身页面传参
    };
    //清空
    vm.reset = function () {
        vm.serialId = undefined;
        vm.companyName = undefined;
        vm.debtPerson = undefined;
        vm.status = undefined;
        vm.search();
    };
    //删除匹配
    vm.deleteDebt = function(id){
        // $scope.debtId = this.x.id;
        vm.deleteTip = `<p align="center">您确认要删除吗？<br>删除后该匹配信息将永久消失。</p>`;
        $rootScope.modalConfirm('删除',vm.deleteTip,function (result) {
            if (result === true) {
                myService.deleteDebt(id)
                    .then(function (res) {
                        // console.log(res);
                        if (res.data.code === 0) {
                            $state.reload('home.company');
                            $rootScope.modalAlert('删除','删除成功');
                        }else {
                            $rootScope.modalAlert('删除','操作异常')
                        }
                    },function () {
                        $rootScope.modalAlert('删除','删除失败')
                    })
            }
        });
    };

    //类型： ng-repeat
    vm.debtStatus = [
        {value: '' , name: '请选择'},
        {value: '10', name: '匹配'},
        {value: '20', name: '未匹配'},
        {value: '30', name: '已匹配'},
    ];
}
// -------------------------------------debt-------------------------------