angular.module("myApp")
    .controller("forSetCtrl", ['$scope','$http','$state','$stateParams','$timeout','loginService',forSetCtrl]);

function forSetCtrl ($scope,$http,$state,$stateParams,$timeout,loginService) {
    let vm = this;
    vm.faEyeF = true;
    vm.faEyeS = true;
    vm.forSetBtn = function () {
        let formData = new FormData();
        formData.append('phoneNumber',$stateParams.phoneNumber);
        formData.append('firstPassword',vm.firstPassword);
        formData.append('secondPassword',vm.secondPassword);
        loginService.resetPassword(formData,
            {headers:{'content-type':undefined}})
            .then( function success (response) {
                if (response.data.status === true){
                    vm.show = true;
                    $timeout(function() {
                        $state.go("login");
                    }, 3000);
                }else {
                    vm.warn = response.data.message;
                }
            })
    }
}
// -------------------------------forgetSet-------------------------------------