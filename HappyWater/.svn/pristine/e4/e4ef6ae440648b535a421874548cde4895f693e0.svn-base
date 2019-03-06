//新增消息
angular.module("myApp")
    .controller('newMessageCtrl', ['$state', '$stateParams', '$http', 'myService',newMessageCtrl]);
function newMessageCtrl ($state, $stateParams, $http, myService) {
    var vm = this;
    // if ($stateParams.id == undefined){
    //     $state.go('login');
    // }
    if ($stateParams.id){
        myService.getMessageDetail($stateParams.id)
            .then(function (res) {
                // console.log(res.data.data);
                if (res.data.status === true) {
                    vm.detail = res.data.data;
                }
            });
    }

    vm.consoleIt = function () {
        let date = new Date(vm.sendDate);
        let time = new Date(vm.sendTime);
        // let current = new Date();
        let milliSec = time.getHours()*3600000 + time.getMinutes()*60000;
        // console.log(date.getTime() + milliSec,current.getTime());
    }

}