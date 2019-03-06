angular.module("myApp")
    .controller('recommendCtrl', ['$state', 'myService', '$stateParams', '$rootScope', recommendCtrl]);
function recommendCtrl ($state, myService, $stateParams, $rootScope) {
    var vm = this;
    vm.bannerId = $stateParams.serialId;
    vm.productTitle = $stateParams.title;
    vm.createdBy = $stateParams.createdBy;
    vm.updatedBy = $stateParams.updatedBy;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

    //获取列表
    vm.getRecommend = function () {
        vm.params = {
            serialId: $stateParams.serialId,
            title: $stateParams.title,
            createdBy: $stateParams.createdBy,
            updatedBy: $stateParams.updatedBy,
            pageNum: $stateParams.pageNumber || 1,
            pageSize: $stateParams.pageSize || 10
        };
        myService.searchRecommendation(vm.params)
            .then(function (res) {
                // console.log(res.data);
                if (res.data.status === true) {
                    vm.recommendationsList = res.data.data.recommendations;
                    vm.page = $stateParams.pageNumber;              //搜索后的页数
                    vm.totalItems = res.data.data.total;       //搜索后的数据总条数
                }
            })
    };
    vm.getRecommend();

    //查询推荐
    vm.search = function () {
        let page;
        if (vm.newPage === undefined) {     //若newPage有值，则点击页码是跳转到newPage（无论点的哪页）
            page = vm.page;
        }else {
            page = vm.newPage;
        }
        $state.go('home.recommendation',{
            pageSize: vm.size,
            pageNumber: page,
            serialId: vm.bannerId,
            title: vm.productTitle,
            createdBy: vm.createdBy,
            updatedBy: vm.updatedBy
        });
    };

    //清空查询
    vm.reset = function () {
        vm.bannerId = undefined;
        vm.productTitle = undefined;
        vm.createdBy = undefined;
        vm.updatedBy = undefined;
        vm.search();
    };

    //进入编辑页
    vm.edit = function (id) {
        $state.go('home.newRecommend',{
            id: id
        });
    };


    //删除
    vm.delete = function (id) {
        vm.deleteTip = `<p align="center">您确认要删除吗？删除后当前图片将永久消失。</p>`;
        $rootScope.modalConfirm('删除',vm.deleteTip,function (result) {
            if (result === true) {
                myService.deleteRecommendation(id)
                    .then(function (res) {
                        // console.log(res);
                        if (res.data.status === true) {
                            $state.reload('home.recommendation');
                            $rootScope.modalAlert('删除成功');
                        }else {
                            $rootScope.modalAlert('操作异常')
                        }
                    },function () {
                        $rootScope.modalAlert('删除失败')
                    })
            }
        });
    };

    //上下线
    vm.line = function (id,status) {
        if(status === false){
            vm.tip1 =
                `<p align="center">您确认要上架当前图片吗？上架后当前图片将在前台可见，并可点击查看。</p>`;
            vm.tip2 =
                `<p align="center">上架成功。</p>`;
        }else{
            vm.tip1 =
                `<p align="center">您确认要下架当前图片吗？下架后当前图片将在前台不可见，并不可点击查看。</p>`;
            vm.tip2 =
                `<p align="center">下架成功。</p>`;
        }
        vm.lineTip = status === true ? '下架' : '上架' ;
        $rootScope.modalConfirm(vm.operatTip, vm.tip1, function (result) {
            if (result === true) {
                vm.params = {
                    status: (status === true) ? 'false' : 'true'
                };
                myService.putRecommendation(id, status)
                    .then(function (res) {
                        // console.log(res.data);
                        if (res.data.status === true) {
                            $state.reload('home.Banner');
                            $rootScope.modalAlert(vm.lineTip, vm.tip2);
                        }else {
                            $rootScope.modalAlert(vm.lineTip,'操作异常');
                        }
                    },function () {
                        $rootScope.modalAlert(vm.lineTip,'提交失败');
                    });
            }
        });
    };

}