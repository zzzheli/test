//消息详情
angular.module("myApp")
    .controller('messageDetailCtrl', ['$state', '$stateParams', 'myService', messageDetailCtrl]);
function messageDetailCtrl ($state, $stateParams, myService) {
    var vm = this;
    myService.getMessageDetail($stateParams.id)
        .then(function (res) {
            // console.log(res.data.data);
            if (res.data.status === true) {
                vm.detail = res.data.data;
            }
        })
}
