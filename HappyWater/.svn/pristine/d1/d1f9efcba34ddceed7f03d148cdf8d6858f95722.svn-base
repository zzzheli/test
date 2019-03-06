angular.module("myApp")
    .controller('homeCtrl',['$state', '$http', 'myService', '$cookies', '$rootScope', homeCtrl]);
function homeCtrl ($state,$http,myService,$cookies,$rootScope){
    let vm = this;
    if ($cookies.get('token')){
        vm.admin = $cookies.getObject('userData');
        // console.log('账户信息',vm.admin);

        vm.clickuser = function(){
            $state.go('home.user')
        };
        vm.clickrole = function(){
            $state.go('home.role')
        };
        vm.logout = function () {
            myService.logout(vm.admin.userId)
                .then(function (res) {
                    if (res.data.status === true) {
                        $rootScope.modalConfirm('退出',
                            `<p align="center">确定要退出后台管理系统吗？</p>`,
                            function (result) {
                                if (result) {
                                    $cookies.remove('token');
                                    $cookies.remove('userData');
                                    $state.go('login')
                                }
                        })
                    }
                })
        };
        vm.goHome = function(){
            sessionStorage.clear();
            $state.go('home',{},{reload:true});
        };
    } else {
        $state.go('login');
    }
}