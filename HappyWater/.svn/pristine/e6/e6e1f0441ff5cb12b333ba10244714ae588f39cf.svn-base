angular.module("myApp")
    .controller('newProductCtrl', ['$rootScope', '$http', '$state', '$stateParams', 'myService',newProductCtrl]);
function newProductCtrl ($rootScope, $http, $state, $stateParams, myService) {
    let vm = this;
    //获取 编辑/新增页面 带ID:
    if($stateParams.id) {
        vm.pageTitle = '产品编辑';

        //编辑产品 根据id获取
        // $http({
        //     method: 'GET',
        //     url: '/happywater-admin-ajax/a/business/business/product/product/' + $stateParams.id
        // })
        myService.editorProductGet($stateParams.id)
            .then(function successCallback(res) {
                // console.log(res);
                vm.newProduct = res.data.data;
                vm.productName = res.data.data.productName;
                vm.proProfit = res.data.data.proProfit;
                vm.investmentCycle = res.data.data.investmentCycle;
                vm.minAmount = res.data.data.minAmount;
                vm.minIncrement = res.data.data.minIncrement;
                vm.repaymentWay = res.data.data.repaymentWay;
                vm.productIntro = res.data.data.productIntro;
                vm.moreInformation = res.data.data.moreInformation;
            });

    }else {
        vm.pageTitle = '产品新增';
    }

    //保存 编辑/新增页面 带ID:
    vm.savePro = function () {
        vm.params = {
            productName:vm.productName,
            proProfit:vm.proProfit,
            investmentCycle:vm.investmentCycle,
            minAmount:vm.minAmount,
            minIncrement:vm.minIncrement,
            repaymentWay:vm.repaymentWay,
            productIntro:vm.productIntro,
            moreInformation:vm.moreInformation
        };

        // console.log(typeof vm.params,vm.params);

        if($stateParams.id) {

            // $http({
            //     method: 'PUT',
            //     url: '/happywater-admin-ajax/a/business/business/product/product/' + $stateParams.id,
            //     data:{
            //         productName:$scope.productName,
            //         proProfit:$scope.proProfit,
            //         investmentCycle:$scope.investmentCycle,
            //         minAmout:$scope.minAmout,
            //         minIncrement:$scope.minIncrement,
            //         repaymentWay:$scope.repaymentWay,
            //         productIntro:$scope.productIntro,
            //         moreInformation:$scope.moreInformation,
            //
            //     }
            // })
            myService.putProduct($stateParams.id,vm.params)
                .then(function successCallback(res) {
                    if (res.data.code === 0) {
                        $rootScope.modalAlert('提示','产品编辑成功！',function () {
                            $state.go("home.product", {}, {reload: true});
                        });
                    }else {
                        $rootScope.modalAlert('提示','产品编辑异常！');
                    }
                }, function () {
                    $rootScope.modalAlert('提示','编辑失败！');

                });

        }else {

            // $http({
            //     method: 'POST',
            //     url: '/happywater-admin-ajax/a/business/business/product/product',
            //     data:{
            //         productName:$scope.productName,
            //         proProfit:$scope.proProfit,
            //         investmentCycle:$scope.investmentCycle,
            //         minAmout:$scope.minAmout,
            //         minIncrement:$scope.minIncrement,
            //         repaymentWay:$scope.repaymentWay,
            //         productIntro:$scope.productIntro,
            //         moreInformation:$scope.moreInformation,
            //
            //     }
            // })
            myService.postProduct(vm.params,)
                .then(function successCallback(res) {
                    if (res.data.code === 0) {
                        $rootScope.modalAlert('提示','产品新增成功！',function () {
                            $state.go("home.product", {}, {reload: true});
                        });
                    }else {
                        $rootScope.modalAlert('提示','产品新增异常！');
                    }
                }, function () {
                    $rootScope.modalAlert('提示','产品新增失败！');
                });
        }
    };
    //类型： ng-repeat
    vm.reType = [
        {value: '' , name: '请选择'},
        {value: '10', name: '本息还款'},
        {value: '20', name: '先本后息'},
    ];

}
// -------------------------------------newProduct-------------------------------