//--------------------通用设置------------------------
angular.module("myApp")
    .controller('settingCtrl',['$rootScope', '$state', 'loginService', settingCtrl]);

function settingCtrl ($rootScope, $state, loginService){
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));

    //退出登录
    vm.logout = function(){
        $rootScope.modalConfirm('是否退出当前登录状态？',function (result) {
            if (result) {
                console.log(result);
                loginService.logout(user.id)
                    .then(function (res) {
                        console.log(res);
                        if (res.data.status === true) {
                            localStorage.removeItem('loginForm');
                            $state.go('login');
                        }else {
                            $rootScope.toaster(res.data.data);
                        }
                    });
            };
        });

    };

    //修改密码
    vm.changePassword = function(){
        $state.go('changePassword');
    };
    vm.aboutUs = function () {
        $state.go('aboutUs');
    };
    vm.update = function () {
        $rootScope.toaster('当前已是最新版本')
    }
}

//--------------------修改密码-------------------------
angular.module("myApp")
    .controller('changePwdCtrl',['$rootScope', '$state', '$http', '$timeout', 'userService', changePwdCtrl]);

function changePwdCtrl ($rootScope, $state, $http, $timeout, userService) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));

    vm.submit = function () {
        console.log(vm.newPassword,vm.confirmPassword);
        var reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,16}$/;
        if (vm.oldPassword == vm.newPassword) {
            vm.newMessage = '新密码与旧密码重复，请重试。';
            $timeout(function () {
                vm.newMessage = '';
            },2000);
        }else if(!reg.test(vm.newPassword)){
            vm.newMessage = '新密码格式错误，请重试。';
            $timeout(function () {
                vm.newMessage = '';
            },2000);
        }else if (vm.newPassword != vm.confirmPassword) {
            vm.confirmMessage = '新密码两次输入不一致，请重试。';
            $timeout(function () {
                vm.confirmMessage = '';
            },2000);
        }else{
            let formData = new FormData();
            formData.append('oldPassword',vm.oldPassword);
            formData.append('firstPassword',vm.newPassword);
            formData.append('secondPassword',vm.confirmPassword);
            userService.changeUserPassword(user.id, formData,{
                headers: {'Content-Type': undefined}
            })
                .then(function (res) {
                    console.log(res);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('密码更改成功，请重新登录！',function () {
                            $state.go('login');
                        });
                    }else{
                        $rootScope.toaster(res.data.data);
                    }
                });
        }
    }
}