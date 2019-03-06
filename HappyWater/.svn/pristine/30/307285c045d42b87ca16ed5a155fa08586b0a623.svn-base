//-----------------------银行卡------------------------
angular.module("myApp")
    .controller('bankCardCtrl',['$state', '$http', 'userService', bankCardCtrl]);

function bankCardCtrl ($state, $http, userService) {
    let vm = this;
    let loginForm = JSON.parse(localStorage.getItem("loginForm"));
    //银行卡列表
    userService.getBankIdList(loginForm.id)
        .then(function (res) {
            vm.cards = res.data.data;
            // vm.cards = [];
        });
    vm.detail = function (item) {
        console.log(item);
        $state.go('deleteCard',{
            cardId: item.id,
            cardType: item.type,
            cardNumber: item.card
        });
    }
}
//-----------------------支持银行-----------------------
angular.module("myApp")
    .controller('supportCardCtrl',function ($http) {
    let vm = this;
    $http.get('../../JSON/support-bank.json')
        .then(function (res) {
            vm.cards = res.data.banks;
        })
});