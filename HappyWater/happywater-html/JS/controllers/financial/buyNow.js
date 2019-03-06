angular.module("myApp")
    .controller("buyNowCtrl",['$scope','$http','$state','financialService','$rootScope',buyNowCtrl]);

function buyNowCtrl ($scope,$http,$state,financialService,$rootScope) {
    let vm = this;
    let financesNow = JSON.parse(sessionStorage.getItem("financesNow"));
    // console.log(financesNow);
    vm.name = financesNow.productName;
    vm.proProfit = financesNow.proProfit;
    vm.investmentCycle = financesNow.investmentCycle;
    vm.minAmount = financesNow.minAmount;
    vm.minIncrement = financesNow.minIncrement;
    vm.maxAmount = financesNow.maxAmount;

    let loginForm = JSON.parse(localStorage.getItem("loginForm"));

    vm.inReckon = function () {
        vm.exRevenue = (Number(vm.moneyAmount)*Number(vm.proProfit)/100/365)*Number(vm.investmentCycle);

    };

    //获取银行卡信息
    vm.getCard = function () {
        financialService.getBankInfo(loginForm.id)
            .then(function success (response) {
                vm.cardList = response.data.data;
            })
    };
    vm.getCard();

    // 目前购买页面的产品信息是在sessionStorage中保存的，之后改成id获取要改变写法，然后在来写跳转银行卡的功能。
    vm.addBank = function () {
        vm.addBankTip = `<p align="center">您确认要添加银行卡吗？</p>`;
        $rootScope.modalConfirm(vm.addBankTip,function (result) {
            if (result === true) {
                $state.go('addCard_step1',{});
            }
        });

    };
    vm.myCompact = function () {
        $state.go('myCompact',{
            amount:vm.moneyAmount || 0,
        });
    };

    vm.buyConfirm = function () {
        //购买金额判断
        let arrInvest = [];
        for ( i=vm.minAmount; i<vm.maxAmount; i+=vm.minAmount){arrInvest.push(i);}
        function test(a) {
            return a !== vm.moneyAmount
        }
        let isInvest = arrInvest.every(test);

        if (isInvest === true){
            $rootScope.toaster('购买金额必须需满足产品投资条件哦！')
        }else {
            //确认购买 信息
            let formData = new FormData();
            formData.append('productId',financesNow.id);
            formData.append('moneyAmount',vm.moneyAmount);
            formData.append('paymentWay',10);
            financialService.buyConfirmInfo(loginForm.id,formData,
                {headers:{'content-type':undefined}})
                .then(function (res) {

                    if (res.data.status === true) {
                        $state.go('buyConfirm',{
                            moneyAmount:vm.moneyAmount,
                            cardInfo:vm.cardInfo,
                        },{reload:true});
                        // console.log(vm.cardInfo,vm.moneyAmount);
                    }else {
                        vm.toaster('确认异常')
                    }
                },function () {
                    vm.toaster('确认失败')
                });
        }
    }
}

// -------------------------------buyNow end-------------------------------------