angular.module("myApp")
    .controller("loginCtrl", ['$scope','$http','$state','$cookies','loginService',loginCtrl]);

function loginCtrl ($scope,$http,$state,$cookies,loginService) {
    let vm = this;
    vm.faEye = true;
    vm.logBtn = function () {
        //登录 获取验证码
        let formData = new FormData();
        formData.append('phoneNumber',vm.phoneNumber);
        formData.append('password',vm.passWord);
        loginService.frontLogin(formData,
            {headers:{'content-type':undefined}})
            //requestParam formData写法
            .then(function success (response) {
            // console.log(response);
            if (response.data.status === true){
                //获取token，并保存到cookie
                let JWT = response.headers().jwt;
                let expireDate  = new Date();
                expireDate.setDate(expireDate.getDate() + 30);
                $cookies.put('userToken',JWT,{'expires': expireDate});

                vm.loginForm = response.data.data;
                let loginForm = vm.loginForm;
                loginForm = JSON.stringify(loginForm);
                localStorage.setItem("loginForm",loginForm);

                $state.go("nav.home",{});
            }else {
                vm.warn = response.data.data;
            }
        })
    };
    vm.registe = function () {
        $state.go("registe",{});
    };
    vm.forget = function () {
        $state.go("forget",{});
    };
}
// -------------------------------login end-------------------------------------





