angular.module("myApp")
    .controller('matchingCtrl', ['$http', '$state', '$stateParams', '$rootScope', 'myService', matchingCtrl]);
function matchingCtrl ($http,$state, $stateParams,$rootScope,myService) {
    let vm = this;
    vm.companyId = $stateParams.id;
    vm.companySerialId = $stateParams.serialId;
    vm.companyBrrowMoney = Number($stateParams.borrowMoney);
    //获取债权公司id,serialId,金额（上个页面）
    vm.clickAble = true;

    vm.getMatching = function () {
        //债权匹配 推荐债权
        // $http({
        //     method: 'GET',
        //     url: '/happywater-admin-ajax/a/business/business/company/compactsmatching/'+$stateParams.id,
        //     params: {
        //         // serialId: $stateParams.serialId,
        //         // phoneNumber: $stateParams.phoneNumber,
        //     }
        // })
        myService.matchingDebtGet($stateParams.id)
            .then(function successCallback(response) {
                vm.matchingList = response.data.data;
                // console.log(vm.matchingList);
            });
    };
    vm.getMatching();
    //获取投资信息

    vm.matchingMoney = vm.companyBrrowMoney;
    // $scope.matchingMoney = 2500;

    vm.matchingSum = function (add, sum, id) {
        // console.log( $scope.companyBrrowMoney);
        if (vm.matchingMoney > sum) {
            vm.clickAble = true;
            if (!add) {
                vm.matchingMoney =  vm.matchingMoney - sum;
            } else if (add) {
                vm.matchingMoney =  vm.matchingMoney + sum;
            }
        }
        else if (vm.matchingMoney < sum) {
            if (add) {
                vm.matchingMoney =  vm.matchingMoney + sum;
                vm.clickAble = true;
            }else {
                vm.clickAble = false;
                $rootScope.modalAlert("提示","待匹配金额不足，请不要再添加投资合同");
            }
        }

        //匹配债权功能；
        var compactArr = [];
        vm.matchSave = function () {
            angular.forEach(vm.matchingList, function (item) {
                if (item.add) {
                    compact = item.serialId;
                    compactArr.push(compact);
                }
            });

            // console.log(typeof stringM);
            //确认匹配
            // $http({
            //     method: 'POST',
            //     url: '/happywater-admin-ajax/a/business/business/company/compactsmatching/'+$stateParams.id,
            //     headers: {
            //         'Content-type': 'application/json;charset=UTF-8'
            //     },
            //     // params: {
            //     //     unmatchMoney:$scope.matchingMoney,
            //     //
            //     //     compactSerialIds:stringM
            //     // },
            //     data:{
            //         unmatchMoney:$scope.matchingMoney,
            //         compactSerialIds:compactArr,
            //     },})
            vm.params = {
                unmatchMoney:vm.matchingMoney,
                compactSerialIds:compactArr,
            };
            myService.matchingDebtPost($stateParams.id,vm.params)
                .then(function successCallback(response) {
                    if (response.data.code === 0) {
                        $rootScope.modalAlert("提示","匹配成功");
                        $state.go("home.company", {}, {reload: true});
                    }else {
                        $rootScope.modalAlert("提示",response.data.code);
                    }
                });
        }
    };
}
// -------------------------------------matching-------------------------------