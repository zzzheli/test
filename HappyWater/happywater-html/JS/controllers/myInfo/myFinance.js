//-------------------我的理财----------------------
angular.module("myApp")
    .controller('myFinanceCtrl',['$rootScope', '$state', '$http', 'userService', myFinanceCtrl]);

function myFinanceCtrl ($rootScope, $state, $http,userService) {
    let vm = this;
    let loginForm = JSON.parse(localStorage.getItem("loginForm"));

    vm.type = "invest";  //默认显示
    vm.myClick = function(type) {
        vm.type = type;
    };
    //我的理财
    vm.Finances = function () {
        userService.userFinancial(loginForm.id)
            .then(function success (response) {
                vm.financeList = response.data.data;
                // console.log(response,vm.financeList);
            })
    };
    vm.Finances();

    //预约续投
    vm.reservation = function (item) {
        vm.compactId = item.id;
        if (item.status === 10){
            vm.compactTip = `<p align="center">您确认要续投吗？<br>续投仅支持本金续投，可重复续投。</p>`;
            $rootScope.modalConfirm(vm.compactTip,function (result) {
                if (result === true) {
                    let formData = new FormData();
                    formData.append('compactingId',vm.compactId);
                    userService.reserveInvestment(loginForm.id,formData,
                        {headers:{'content-type':undefined}})
                        .then(function (res) {
                            // console.log(res);
                            if (res.data.status === true) {
                                $state.reload('myFinance');
                                $rootScope.modalAlert('续投成功');
                            }else {
                                $rootScope.toaster('续投异常')
                            }
                        },function () {
                            $rootScope.toaster('续投失败')
                        })
                }
            });
        }else {
            vm.compactTip = `<p align="center">您确认要取消续投吗？<br>已预约续投在本轮理财结束前可取消。</p>`;
            $rootScope.modalConfirm(vm.compactTip,function (result) {
                if (result === true) {
                    let formData = new FormData();
                    formData.append('compactingId',vm.compactId);
                    userService.cancelInvestment(loginForm.id,formData,
                        {headers:{'content-type':undefined}})
                        .then(function (res) {
                            // console.log(res);
                            if (res.data.status === true) {
                                $state.reload('myFinance');
                                $rootScope.modalAlert('取消成功');
                            }else {
                                $rootScope.toaster('取消异常')
                            }
                        },function () {
                            $rootScope.toaster('取消失败')
                        })
                }
            });
        }
    };

    //我的理财 过滤
    vm.investFilter = function (obj) {
        if (obj.status == 10 | 20 | 30) {
            return true;
        }
        return false;
    };
    vm.refillFilter = function (obj) {
        if (obj.status == 20) {
            return true;
        }
        return false;
    };
    vm.quitFilter = function (obj) {
        if (obj.status == 30) {
            return true;
        }
        return false;
    };

    //查看合同
    vm.myCompact = function (item) {
        $state.go('myCompact',{
            amount:item.amount,
            createdAt:item.createdAt
        });
    }

}

//-------------------查看合同-----------------------
angular.module("myApp")
    .controller('myCompactCtrl',function ($state, $http, $stateParams) {
    let vm = this;
    let loginForm = JSON.parse(localStorage.getItem("loginForm"));
    vm.realName = loginForm.realName;
    vm.idCard = loginForm.idCard;
    vm.phoneNum = loginForm.phoneNumber;

    vm.amount = $stateParams.amount;
    vm.createdAt = $stateParams.createdAt;
});
