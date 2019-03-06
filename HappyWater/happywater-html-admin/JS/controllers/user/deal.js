angular.module("myApp")
    .controller('dealCtrl', ['$http', '$state', '$stateParams', 'myService', dealCtrl]);
function dealCtrl ($http,$state, $stateParams,myService) {
        let vm = this;
        vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

        //GET请求表格数据渲染
        vm.getSearch = function () {
            //用户详情 交易记录
            // $http({
            //     method: 'GET',
            //     url: '/happywater-admin-ajax/a/business/business/user/deals/'+$stateParams.id,
            //     params: {
            //         pageNumber:$stateParams.pageNumber || 1,
            //         pageSize:$stateParams.pageSize || 10,
            //     }
            // })
            vm.params = {
                pageNumber:$stateParams.pageNumber || 1,
                pageSize:$stateParams.pageSize || 10,
            };
            myService.userInfoDeal($stateParams.id,vm.params)
                .then(function successCallback(response) {

                    vm.dealList = response.data.data.dealRecords;
                    vm.page = $stateParams.pageNumber;                     //搜索后的页数
                    vm.totalItems = response.data.data.total;        //搜索后的数据总条数
                    // console.log(response);
                });
        };

        vm.getSearch();


        //分页
        vm.search = function () {
            let page ;
            if(vm.newPage === undefined ){
                page = vm.page;
            }else {
                page = vm.newPage;
            }
            $state.go('home.deal',{
                pageNumber:page,
                pageSize:vm.size,
            });
            //自身页面传参
        };

    }
// --------------------------------deal-------------------------------