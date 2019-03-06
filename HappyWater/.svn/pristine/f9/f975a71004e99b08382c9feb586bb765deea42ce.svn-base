angular.module("myApp")
    .controller("productCtrl", ['$scope','$rootScope','$http','$state','financialService',productCtrl]);

function productCtrl ($scope,$rootScope,$http,$state,financialService) {
    let vm = this;
    let financesNow = JSON.parse(sessionStorage.getItem("financesNow"));
    // console.log(financesNow);
    vm.name = financesNow.productName;
    vm.proProfit = financesNow.proProfit;
    vm.investmentCycle = financesNow.investmentCycle;
    vm.minAmount = financesNow.minAmount;
    vm.minIncrement = financesNow.minIncrement;
    vm.productId = financesNow.id;
    vm.maxAmount = financesNow.maxAmount;

    let loginForm = JSON.parse(localStorage.getItem("loginForm"));
    // console.log(loginForm);

    vm.type = "introduction";  //默认显示
    vm.productInfo = function(type) {
        vm.type = type;
    };
    //产品简介，更多信息，投资记录

    //购买记录
    vm.getRecords = function () {
        // let vm = this;
        vm.currentCount = 0;    // 当前(条数)
        vm.totalCount = 5;      // 总(条数)
        vm.recordsList = [];     // 存放数据
        vm.loadMore = function() {
            if (vm.currentCount < vm.totalCount) {
                vm.params = {productId : vm.productId};
                financialService.getProductRecords( loginForm.id,vm.params)
                    .then(function(res) {
                        vm.load = function () {
                            let getArr = res.data.data.slice(vm.currentCount,vm.currentCount+5);
                            for (let i in getArr) {
                                vm.recordsList.push(getArr[i]);
                            }
                            vm.totalCount = res.data.data.length;
                            vm.currentCount += 5;
                        };
                        vm.load();
                    });
            }else {
                $rootScope.toaster('没有更多了哟');
            }
        };
        // 默认第一次加载数据
        vm.loadMore();
    };
    vm.getRecords();

    vm.buyNow = function () {
        if ( loginForm.realName === undefined){
            $rootScope.modalConfirm('您还未实名认证，购买前需要完成实名认证，请您先前往实名认证。',function (result) {
                if (result) {
                    $state.go("verify_step1",{
                        productId: financesNow.id
                    });
                }
            });
        }else {
            $state.go("buyNow");
        }
    };
}
// -------------------------------product end-------------------------------------