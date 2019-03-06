angular.module("myApp")
    .controller('checkDebtCtrl', ['$http', '$state', '$stateParams', 'myService', checkDebtCtrl]);
function checkDebtCtrl ($http,$state, $stateParams,myService) {
    let vm = this;
    vm.companySerialId = $stateParams.serialId;
    vm.check = function () {
        //债权匹配 查看合同
        // $http({
        //     method: 'GET',
        //     url: '/happywater-admin-ajax/a/business/business/company/compacts/'+$stateParams.id,
        //     params: {}
        // })
        myService.checkCompact($stateParams.id)
            .then(function successCallback(response) {
                if (response.data.code === 0) {
                    vm.checkList = response.data.data;
                }
            });
    };
    vm.check();
}
// -------------------------------------checkDebtCtrl-------------------------------