angular.module("myApp")
    .controller("registeCtrl", ['$scope','$http','$state','loginService',registeCtrl]);

function registeCtrl ($scope,$http,$state,loginService) {
    let vm = this;
    vm.isDisabled = true;
    vm.valid = function () {
        vm.isDisabled = vm.phoneNumber.length !== 11;
    };
    vm.getCode = function () {
        vm.params = {phoneNumber : vm.phoneNumber};
        loginService.registerMsgCode(vm.params)
            .then( function success (response) {
                if (response.data.status === true){
                    // console.log(response.data);
                }else {
                    vm.warn = response.data.message;
                }
            })
    };
    vm.regBtn = function () {
        let formData = new FormData();
        formData.append('phoneNumber',vm.phoneNumber);
        formData.append('msgCode',vm.msgCode);
        loginService.verifyRegisterCode(formData,
            {headers:{'content-type':undefined}})
            .then( function success (response) {
                if (response.data.status === true){
                    $state.go("registeSet",{phoneNumber:vm.phoneNumber});
                }else {
                    vm.warn = response.data.message;
                }
            })
    };
}
// -------------------------------registe end-------------------------------------