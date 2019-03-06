//------------------消息管理---------------------
angular.module("myApp")
    .controller('msgsCtrl',['$rootScope', '$state', 'userService', msgsCtrl]);

function msgsCtrl ($rootScope, $state, userService) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    userService.userMessages(user.id)
        .then(function (res) {
            // console.log(res);
            if (res.data.status === true) {
                vm.messages = res.data.data;
                // vm.messages =[];
            }else {
                $rootScope.toaster(res.data.data);
            }
        });
}

//-------------------查看消息------------------------
angular.module("myApp")
    .controller('viewMsgCtrl',function ($state, $http) {
    let vm = this;
});
