angular.module("myApp")
    .controller("regSetCtrl", ['$scope','$http','$state','$timeout','$stateParams','loginService',regSetCtrl]);

function regSetCtrl ($scope,$http,$state,$timeout,$stateParams,loginService) {
    let vm = this;
    vm.faEyeF = true;
    vm.faEyeS = true;
    vm.regSetBtn = function () {
        let formData = new FormData();
        formData.append('phoneNumber',$stateParams.phoneNumber);
        formData.append('firstPassword',vm.firstPassword);
        formData.append('secondPassword',vm.secondPassword);
        loginService.settingPassword(formData,
            {headers:{'content-type':undefined}})
            .then( function success (response) {
                if (response.data.status === true){
                    vm.params = {
                        phoneNumber : $stateParams.phoneNumber,
                        password: vm.secondPassword
                    };
                    loginService.frontLogin(vm.params)
                        .then(function success (response) {
                            // console.log(response);
                            if (response.data.status === true){
                                vm.loginForm = response.data.data;
                                loginForm = vm.loginForm;
                                loginForm = JSON.stringify(loginForm);
                                localStorage.setItem("loginForm",loginForm);
                                vm.show = true;
                                $timeout(function() {
                                    $state.go("nav.home");
                                }, 3000)
                            }else {
                                vm.warn = response.data.message;
                            }
                        });
                }else {
                    vm.warn = response.data.message;
                }
            });
    };
    vm.userAgrt = function () {
        $state.go('userAgrt');
    }
}

// -------------------------------registeSet end-------------------------------------