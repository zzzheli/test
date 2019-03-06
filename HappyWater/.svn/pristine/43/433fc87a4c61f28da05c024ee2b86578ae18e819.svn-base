angular.module("myApp")
    .controller('compactCtrl',['$http', '$state', '$stateParams', 'myService', compactCtrl]);
function compactCtrl ($http,$state, $stateParams,myService) {
        let vm = this;
        vm.realName = $stateParams.realName;
        vm.phoneNum = $stateParams.phoneNum;
        // console.log($stateParams.phoneNum,$stateParams.realName);
        vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;
        vm.idCard = $stateParams.idCard;

        vm.getSearch = function () {
            //用户详情 合同
            // $http({
            //     method: 'GET',
            //     url: '/happywater-admin-ajax/a/business/business/user/compacts/'+$stateParams.id,
            //     params:{
            //         pageNumber:$stateParams.pageNumber || 1,
            //         pageSize:$stateParams.pageSize || 10,
            //     }
            // })
            vm.params = {
                pageNumber:$stateParams.pageNumber || 1,
                pageSize:$stateParams.pageSize || 10,
            };
            myService.userInfoCompact($stateParams.id,vm.params)
                .then(function successCallback(response) {

                    vm.compactList = response.data.data.compacts;
                    vm.page = $stateParams.pageNumber;                     //搜索后的页数
                    vm.totalItems = response.data.data.total;        //搜索后的数据总条数
                    // console.log(response);
                    if (vm.compactList == ""){
                        vm.noCompact = true;
                    }
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
            $state.go('home.compact',{
                pageNumber:page,
                pageSize:vm.size,
            });
            //自身页面传参
        };


    }
// --------------------------------compact-------------------------------