angular.module("myApp")
    .controller('productCtrl', ['$rootScope', '$http', '$state', '$stateParams', 'myService', productCtrl]);
function productCtrl ($rootScope, $http, $state, $stateParams, myService) {
    var vm = this;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;
    vm.serialId = $stateParams.serialId;
    vm.productName = $stateParams.productName;
    vm.createdBy = $stateParams.createdBy;
    vm.status = $stateParams.status;

    //GET请求表格数据渲染
    vm.getSearch = function () {
        //模糊查询 产品
        // $http({
        //     method: 'GET',
        //     url: '/happywater-admin-ajax/a/business/business/product/productssearching',
        //     params: {
        //         pageNumber:$stateParams.pageNumber || 1,
        //         pageSize:$stateParams.pageSize || 10,
        //         serialId:$stateParams.serialId,
        //         productName:$stateParams.productName,
        //         createdBy:$stateParams.createdBy,
        //         status:$stateParams.status,
        //     }
        // })
        vm.params = {
            pageNumber:$stateParams.pageNumber || 1,
            pageSize:$stateParams.pageSize || 10,
            serialId:$stateParams.serialId,
            productName:$stateParams.productName,
            createdBy:$stateParams.createdBy,
            status:$stateParams.status,
        };
        myService.productSearch(vm.params)
            .then(function successCallback(response) {
            // console.log(response);
            vm.productList = response.data.data.products;
            // $scope.id = $scope.userList.id;
            // $scope.locked = $scope.userList.locked;
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
        $state.go('home.product',{
            pageNumber:page,
            pageSize:vm.size,
            serialId:vm.serialId,
            productName:vm.productName,
            createdBy:vm.createdBy,
            status:vm.status,
        },{reload:true});
        // console.log(vm.createdBy,vm.size,page);
        //自身页面传参
    };
    //清空
    vm.reset = function () {
        vm.serialId = undefined;
        vm.productName = undefined;
        vm.createdBy = undefined;
        vm.status = undefined;
        vm.search();
    };
    //上下架产品
    vm.linePro = function(id,status){
        // console.log(this.x);
        // $scope.productId = this.x.id;
        // $scope.productLine = this.x.status;
        vm.productLine = status;
        // console.log(vm.productLine);
        if(vm.productLine === 0){
            vm.tip1 =
                `<p align="center">您确认要上架该产品吗？<br>上架后该产品将在前台可见，并可点击查看。</p>`;
            vm.tip2 =
                `<p align="center">上架成功。</p>`;
        }else{
            vm.tip1 =
                `<p align="center">您确认要下架该产品吗？下架后该产品将在前台不可见，并不可点击查看。</p>`;
            vm.tip2 =
                `<p align="center">下架成功。</p>`;
        }
        vm.isShelves = vm.productLine === 1 ? "0" : "1" ;
        vm.operatTip = vm.productLine === 1 ? '下架' : '上架' ;
        $rootScope.modalConfirm(vm.operatTip, vm.tip1, function (result) {
            if (result === true) {
                vm.params = {
                    isShelves:vm.isShelves
                };
                myService.lineProduct(id,vm.params, {
                    headers:{"Content-Type": "application/x-www-form-urlencoded"}
                    //请求头格式：根据接口形式
                })
                    .then(function (res) {
                        // console.log(vm.params);
                        if (res.data.code === 0) {
                            $state.reload('home.product');
                            $rootScope.modalAlert(vm.operatTip, vm.tip2);
                        }else {
                            $rootScope.modalAlert(vm.operatTip,'操作异常');
                        }
                    },function () {
                        $rootScope.modalAlert(vm.operatTip,'提交失败');
                    });
                // $http({
                //     method: 'PUT',
                //     url: 'happywater-admin-ajax/a/business/business/product/status/' + $scope.id,
                //     params: {
                //         isShelves:$scope.isShelves
                //     },
                //     headers:{
                //         'Content-type': 'application/x-www-form-urlencoded'
                //     }
                // }).then(function successCallback(response) {
                //     $state.reload('home.product');
                //     $scope.modalAlert($scope.operatTip, $scope.tip2);
                //
                // });
            }
        });
    };

    //删除产品
    vm.deletePro = function(id){
        vm.deleteTip = `<p align="center">您确认要删除吗？<br>删除后该产品信息将永久消失。</p>`;
        $rootScope.modalConfirm('删除',vm.deleteTip,function (result) {
            if (result === true) {
                myService.deleteProduct(id)
                    .then(function (res) {
                        // console.log(res);
                        if (res.data.code === 0) {
                            $state.reload('home.product');
                            $rootScope.modalAlert('删除成功');
                        }else {
                            $rootScope.modalAlert('删除异常')
                        }
                    },function () {
                        $rootScope.modalAlert('删除失败')
                    })
            }
        });
    };
    //类型： ng-repeat
    vm.proStatus = [
        {value: '' , name: '请选择'},
        {value: '1', name: '上架'},
        {value: '0', name: '下架'},
    ];
}
// -------------------------------------product-------------------------------