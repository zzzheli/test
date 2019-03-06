angular.module("myApp")
    .controller('seeCompactCtrl', ['$http', '$state', '$stateParams', seeCompactCtrl]);
function seeCompactCtrl ($http,$state, $stateParams) {
        let vm = this;
        vm.amount = $stateParams.amount;
        // var userInfoNow = JSON.parse(sessionStorage.getItem("userInfoNow"));
        // console.log(userInfoNow);
        // vm.phoneNum = userInfoNow.phoneNum;
        // vm.realName = userInfoNow.realName;
        // vm.idCard = userInfoNow.idCard;
        vm.phoneNum = $stateParams.phoneNum;
        vm.realName = $stateParams.realName;
        vm.idCard = $stateParams.idCard;


    }
// --------------------------------seeCompact-------------------------------