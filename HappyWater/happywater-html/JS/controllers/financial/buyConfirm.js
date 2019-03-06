angular.module("myApp")
    .controller("buyConCtrl",['$scope','$rootScope','$http','$state','$stateParams','financialService',buyConCtrl]);

function buyConCtrl ($scope,$rootScope,$http,$state,$stateParams,financialService) {
    let vm = this;
    vm.moneyAmount = $stateParams.moneyAmount;
    vm.cardNum = $stateParams.cardInfo;
    vm.cardType = $stateParams.cardInfo;

    // let financesNow = JSON.parse(sessionStorage.getItem("financesNow"));
    // console.log(financesNow);

    let loginForm = JSON.parse(localStorage.getItem("loginForm"));
    // console.log(loginForm);
    vm.realName = loginForm.realName;
    vm.idCard = loginForm.idCard;
    vm.isDisabled = true;
    vm.valid = function () {
        vm.isDisabled = vm.phoneNumber.length !== 11;
    };
    vm.getCode = function () {
        // })
        if (vm.phoneNumber) {
            vm.params = {phoneNumber: vm.phoneNumber};
            financialService.buyConfirmGetCode(loginForm.id, vm.params)
                .then(function success(response) {
                    if (response.data.status === true) {
                        // console.log(response.data);
                    } else {
                        vm.warn = response.data.data;
                    }
                })
        }
    };

    //确认购买发验证码
    vm.payConfirm = function () {
        vm.buyTip = `<p align="center">您确认要购买该产品吗？<br>购买成功后不可撤回。</p>`;
        $rootScope.modalConfirm(vm.buyTip, function (result) {
            if (result === true) {
                //确认购买验验证码
                vm.params = {
                    phoneNumber: vm.phoneNumber,
                    msgCode: vm.msgCode,
                    moneyAmount: $stateParams.moneyAmount,
                    paymentWay: 10
                };
                financialService.buyConfirmPostCode(loginForm.id, vm.params,
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                )
                    .then(function (res) {
                        // console.log(res);
                        if (res.data.status === true) {
                            $state.go("nav.financial");
                            $rootScope.modalAlert('购买成功');
                        } else {
                            $rootScope.toaster('购买异常')
                        }
                    }, function () {
                        $rootScope.toaster('购买失败')
                    })
            }
        });
    }
}
// -------------------------------buyConfirm end-------------------------------------