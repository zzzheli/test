angular.module("myApp")
    .controller("forgetCtrl", ['$scope','$http','$state','loginService',forgetCtrl]);

function forgetCtrl ($scope,$http,$state,loginService) {
    let vm = this;
    vm.isDisabled = true;
    vm.valid = function () {
        vm.isDisabled = vm.phoneNumber.length !== 11;
    };
    vm.getCode = function () {
        vm.params = {phoneNumber : vm.phoneNumber};
        loginService.resetMsgCode(vm.params)
            .then( function success (response) {
                if (response.data.status === true){
                    // console.log(response.data);
                }else {
                    vm.warn = response.data.message;
                }
            })
    };
    vm.forBtn = function () {
        let formData = new FormData();
        formData.append('phoneNumber',vm.phoneNumber);
        formData.append('msgCode',vm.msgCode);
        loginService.verifyResetCode(formData,
            {headers:{'content-type':undefined}})
            .then( function success (response) {
                if (response.data.status === true){
                    $state.go("forgetSet",{phoneNumber:vm.phoneNumber});
                }else {
                    vm.warn = response.data.message;
                }
            })
    };
}
// -------------------------------forget end-------------------------------------