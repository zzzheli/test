angular.module("myApp")
    .controller("navCtrl",['$rootScope','$http','$state',navCtrl]);

function navCtrl ($rootScope,$http,$state) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    vm.homeDetail = function(){
        $state.go("nav.home",{},{reload:true});
    };
    vm.myInfo = function(){
        if (user) {
            $state.go("nav.myInfo",{},{reload:true});
        } else {
            $rootScope.modalAlert('请登陆后再查看个人信息！',function () {
                $state.go('login');
            });
        }
    };
    vm.financial = function () {
        $state.go("nav.financial",{},{reload:true});
    };
}
