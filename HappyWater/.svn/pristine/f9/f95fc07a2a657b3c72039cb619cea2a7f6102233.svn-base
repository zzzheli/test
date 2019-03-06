angular.module("myApp")
    .controller('suggestReplyCtrl', ['$state', '$stateParams', '$rootScope', 'myService', suggestReplyCtrl]);
function suggestReplyCtrl ($state, $stateParams, $rootScope, myService) {
    var vm = this;
    // 回复意见
    myService.getSuggestDetail($stateParams.id)
        .then(function (res) {
            // console.log(res.data);
            if (res.data.status === true) {
                vm.detail = res.data.data;
            }
        });
    vm.reply =function(){
        vm.params = {
            suggestionId: $stateParams.id,
            replyContent: vm.replyContent
        };
        myService.replySuggestion($stateParams.id,vm.params)
            .then(function (res) {
                // console.log(res);
                if (res.data.status === true){
                    $rootScope.modalAlert('操作成功','回复成功',window.history.go(-1));
                }else {
                    $rootScope.modalAlert('操作失败','回复异常');
                }
            },function () {
                $rootScope.modalAlert('操作失败','回复失败');
            })
    };



}
