angular.module("myApp")
    .controller('loginCtrl', ['$http', '$timeout', '$state', 'myService', '$cookies', loginCtrl]);
function loginCtrl ($http, $timeout, $state, myService,$cookies){
    let vm = this;
    vm.submit = function () {
        data = {
                account:vm.user.name,
                password:vm.user.pwd
            };
        myService.login(data)
            .then(function successCallback(res){
                if (res.data.status === true) {
                    //获取token，并保存到cookie
                    let JWT = res.headers().jwt;
                    let expireDate  = new Date();
                    expireDate.setDate(expireDate.getDate() + 30);
                    $cookies.put('token',JWT,{'expires': expireDate});
                    let userData = {
                        'account': vm.user.name,
                        'userId': res.data.data.id,
                        'roleName': res.data.data.roles ? res.data.data.roles[0].roleName : '无身份'
                    };
                    $cookies.putObject('userData', userData,{'expires': expireDate});
                    vm.message = res.data.msg;
                    $timeout(function () {
                        console.log('登陆成功……');
                        vm.goHome();
                    }, 500);
                } else {
                    vm.message = res.data.msg;
                    $timeout(function () {
                        vm.message = '';
                    },2000);
                }
            })
        };
        //$state.go跳转页面
        vm.goHome = function(){
            $state.go('home');
        };
}