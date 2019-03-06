angular.module("myApp")
    .controller('bannerCtrl', ['$state', '$stateParams', '$rootScope', 'myService',bannerCtrl]);
function bannerCtrl ($state, $stateParams, $rootScope, myService) {
    var vm = this;
    vm.bannerId = $stateParams.serialId;
    vm.bannerTitle = $stateParams.title;
    vm.creator = $stateParams.createdBy;
    vm.status = $stateParams.status;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

    //请求表格数据
    vm.getBanners = function(){
        vm.params = {
            serialId: $stateParams.serialId,
            title: $stateParams.title,
            createdBy: $stateParams.createdBy,
            status: $stateParams.status,
            pageNum: $stateParams.pageNumber || 1,
            pageSize: $stateParams.pageSize || 10
        };
        // console.log(vm.params);
        myService.searchBanner(vm.params)
            .then(function(res){
                // console.log(res.data);
                if (res.data.status === true) {
                    vm.bannerList = res.data.data.banners;
                    vm.page = $stateParams.pageNumber;              //搜索后的页数
                    vm.totalItems = res.data.data.total;       //搜索后的数据总条数
                }
            });
    };
    vm.getBanners();

    //条件筛选
    vm.search = function(){
        let page;
        if (vm.newPage === undefined) {     //若newPage有值，则点击页码是跳转到newPage（无论点的哪页）
            page = vm.page;
        }else {
            page = vm.newPage;
        }
        $state.go('home.bannere',{
            serialId: vm.bannerId,
            title: vm.bannerTitle,
            createdBy: vm.creator,
            status: vm.status,
            pageSize: vm.size,
            pageNumber: page
        });
    };

    // 清空搜索
    vm.reset = function(){
        vm.bannerId = undefined;
        vm.bannerTitle = undefined;
        vm.creator = undefined;
        vm.status = undefined;
        vm.search();
    };


    //进入编辑页面
    vm.editBanner = function(id){
        $state.go('home.newBanner',{
            id: id
        });
    };

    //Banner上下线(接口有误）
    vm.lineBanner = function(id,status){
        if(status === false){
            vm.tip1 =
                `<p align="center">您确认要上架当前banner图吗？<br>上架后当前banner图将在前台可见，并可点击查看。</p>`;
            vm.tip2 =
                `<p align="center">上架成功。</p>`;
        }else{
            vm.tip1 =
                `<p align="center">您确认要下架当前banner图吗？下架后当前banner图将在前台不可见，并不可点击查看。</p>`;
            vm.tip2 =
                `<p align="center">下架成功。</p>`;
        }
        vm.operatTip = status === true ? '下架' : '上架' ;
        $rootScope.modalConfirm(vm.operatTip, vm.tip1, function (result) {
            if (result === true) {
                vm.params = {
                    status: (status === true) ? 'false' : 'true'
                };
                myService.putBanner(id, vm.params,{
                    header: {'Content-Type': 'text/html'}
                })
                    .then(function (res) {
                        // console.log(vm.params);
                        if (res.data.status === true) {
                            $state.reload('home.bannere');
                            $rootScope.modalAlert(vm.operatTip, vm.tip2);
                        }else {
                            $rootScope.modalAlert(vm.operatTip,'操作异常');
                        }
                    },function () {
                        $rootScope.modalAlert(vm.operatTip,'提交失败');
                    });
            }
        });

    };
    //删除
    vm.deleteBanner = function(id){
        vm.deleteTip = `<p align="center">您确认要删除吗？<br>删除后当前banner图将永久消失。</p>`;
        $rootScope.modalConfirm('删除',vm.deleteTip,function (result) {
            if (result === true) {
                myService.deleteBanner(id)
                    .then(function (res) {
                        // console.log(res);
                        if (res.data.status === true) {
                            $state.reload('home.bannere');
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
    //状态：ng-repeat
    vm.reStatus = [
        {value: '', name: '全部'},
        {value: true, name: '上架'},
        {value: false, name: '下架'}
    ]
}