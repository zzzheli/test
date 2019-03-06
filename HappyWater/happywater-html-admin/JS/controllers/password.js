angular.module("myApp")
    .controller('passwordCtrl',['$rootScope', '$state', '$timeout', 'myService', '$cookies', passwordCtrl]);
function passwordCtrl ($rootScope, $state, $timeout, myService,$cookies) {
    var vm = this;
    var userId = $cookies.getObject('userData').userId;
    // console.log(vm.userId);
    vm.savePassword = function () {
        // console.log(vm.newPassword, vm.confirmPassword);
        var reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,18}$/;
        if (vm.oldPassword === vm.newPassword) {
            vm.newMessage = '新密码与旧密码重复，请重试。';
            $timeout(function () {
                vm.newMessage = '';
            }, 2000);
        } else if (!reg.test(vm.newPassword)) {
            vm.newMessage = '新密码格式错误，请重试。';
            $timeout(function () {
                vm.newMessage = '';
            }, 2000);
        } else if (vm.newPassword !== vm.confirmPassword) {
            vm.confirmMessage = '新密码两次输入不一致，请重试。';
            $timeout(function () {
                vm.confirmMessage = '';
            }, 2000);
        } else {
            vm.params = {
                confirmPassword: vm.oldPassword,
                newPassword: vm.newPassword,
                usedPassword: vm.confirmPassword
            };
            myService.changePassword(userId, vm.params,{
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
                .then(function (res) {
                    // console.log(res);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('提示', `<p align='center'>密码更改成功，请重新登录</p>`, function () {
                            $cookies.remove('token');
                            $cookies.remove('userData');
                            $state.go('login');
                        });
                    } else {
                        vm.oldMessage = res.data.msg;
                    }
                })
        }
    }
}