angular.module("myApp")
    .controller('suggestDetailCtrl', ['$state', '$stateParams', '$rootScope', 'myService', suggestDetailCtrl]);
function suggestDetailCtrl ($state, $stateParams, $rootScope, myService) {
    var vm = this;
    //查看意见
    myService.viewSuggestion($stateParams.id)
        .then(function(res){
            // console.log(res.data);
            // console.log(res.data.data);
            if (res.data.status === true) {
                vm.detail = res.data.data;
            }
        })
}