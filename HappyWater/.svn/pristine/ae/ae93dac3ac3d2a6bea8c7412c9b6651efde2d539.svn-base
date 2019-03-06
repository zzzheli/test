angular.module("myApp")
    .controller('newDebtCtrl', ['$rootScope', '$http', '$state', '$stateParams', 'myService', '$timeout', newDebtCtrl]);
function newDebtCtrl ($rootScope, $http,$state, $stateParams,myService,$timeout ) {
    let vm = this;
    // console.log($stateParams.id);
    //获取 编辑/新增页面 带ID:
    if($stateParams.id) {
        vm.pageTitle = '债权编辑';

        //编辑债权 根据id获取
        // $http({
        //     method: 'GET',
        //     url: '/happywater-admin-ajax/a/business/business/company/compact/' + $stateParams.id
        // })
        myService.editorDebtGet($stateParams.id)
            .then(function successCallback(res) {
                // console.log(res);
                function getdate() {
                    let now = new Date(res.data.data.borrowingDate),
                        y = now.getFullYear(),
                        m = ("0" + (now.getMonth() + 1)).slice(-2),
                        d = ("0" + now.getDate()).slice(-2);
                    return y + "-" + m + "-" + d;
                }

                vm.borrowingDate = getdate();
                vm.newDebt = res.data.data;
                // vm.companyName = res.data.data.companyName;
                // vm.debtPerson = res.data.data.debtPerson;
                // vm.phoneNumber = res.data.data.phoneNumber;
                // vm.idCardNum = res.data.data.idCardNum;
                // vm.borrowMoney = res.data.data.borrowMoney;
                // vm.borrowingCycle = res.data.data.borrowingCycle;
                // vm.repaymentDate = res.data.data.repaymentDate;
            });
    }else {
        vm.pageTitle = '债权新增';
    }

    //保存 编辑/新增页面 带ID:
    vm.saveDebt = function () {
        vm.params = {
            companyName:vm.newDebt.companyName,
            debtPerson:vm.newDebt.debtPerson,
            phoneNumber:vm.newDebt.phoneNumber,
            idCardNum:vm.newDebt.idCardNum,
            borrowDateStr:vm.borrowingDate,
            borrowMoney:vm.newDebt.borrowMoney,
            borrowCycle:vm.newDebt.borrowingCycle
        };

        // console.log(typeof $scope.params,$scope.params);
        var reg = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))$|^((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[13579][26])00))-02-29)$/;
        if (!reg.test(vm.newDebt.borrowingDate)){
            vm.dateMsg = '日期格式不正确，别忘了平润年哟;如：2018-02-28';
            $timeout(function () {
                vm.dateMsg = '';
            }, 2000);
        }
        else {
            if($stateParams.id) {

                // $http({
                //     method: 'PUT',
                //     url: '/happywater-admin-ajax/a/business/business/product/product/' + $stateParams.id,
                //     data:{
                //         companyName:$scope.companyName,
                //         debtPerson:$scope.debtPerson,
                //         phoneNumber:$scope.phoneNumber,
                //         idCardNum:$scope.idCardNum,
                //         borrowingDate:$scope.borrowingDate,
                //         borrowMoney:$scope.borrowMoney,
                //         borrowingCycle:$scope.borrowingCycle
                //
                //     }
                // })
                //债权编辑
                myService.putDebt($stateParams.id,vm.params,
                    {headers:{"Content-Type": "application/x-www-form-urlencoded"}})
                //请求头格式：根据接口形式
                    .then(function successCallback(res) {
                        if (res.data.code === 0) {
                            $rootScope.modalAlert('提示','债权编辑成功！',function () {
                                $state.go("home.company",{},{reload: true});
                            });
                        }else {
                            $rootScope.modalAlert('提示','债权编辑异常！');
                        }
                    }, function () {
                        $rootScope.modalAlert('提示','债权编辑失败！');

                    });
            } else {

                // $http({
                //     method: 'POST',
                //     url: '/happywater-admin-ajax/a/business/business/company/company',
                //     headers: {'content-type':'application/x-www/form-urlencoded'},
                //     params:{
                //         companyName:$scope.companyName,
                //         debtPerson:$scope.debtPerson,
                //         phoneNumber:$scope.phoneNumber,
                //         idCardNum:$scope.idCardNum,
                //         borrowingDateStr:$scope.borrowingDate,
                //         borrowMoney:$scope.borrowMoney,
                //         borrowingCycle:$scope.borrowingCycle
                //     }
                // })
                //债权新增
                myService.postDebt(vm.params,
                    {headers:{"Content-Type": "application/x-www-form-urlencoded"}})
                    .then(function successCallback(res) {
                        if (res.data.code === 0) {
                            $rootScope.modalAlert('提示','债权新增成功！',function () {
                                $state.go("home.company", {}, {reload: true});
                            });
                        }else {
                            $rootScope.modalAlert('提示','债权新增异常！');
                        }
                    }, function () {
                        $rootScope.modalAlert('提示','债权新增失败！');
                    });
            }
        }
    };
}
// -------------------------------------nweDebt-------------------------------