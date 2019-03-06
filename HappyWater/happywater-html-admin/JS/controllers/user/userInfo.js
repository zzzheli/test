angular.module("myApp")
    .controller('userInformCtrl', ['$http', '$state', '$stateParams', 'myService', userInformCtrl]);
function userInformCtrl ($http,$state, $stateParams,myService) {
        let vm = this;
        // var userInfoNow = JSON.parse(sessionStorage.getItem("userInfoNow"));
        // console.log(userInfoNow);
        // vm.serialId = userInfoNow.serialId;
        // vm.phoneNum = userInfoNow.phoneNum;
        // vm.bankId = userInfoNow.banks[0].card;
        // vm.bankType = userInfoNow.banks[0].type;
        // vm.realName = userInfoNow.realName;
        // vm.idCard = userInfoNow.idCard;
        // vm.createdAt = userInfoNow.createdAt;
        // vm.balance = userInfoNow.balance;
        // vm.profit = userInfoNow.profit;
        // vm.id = userInfoNow.id;

        vm.serialId = $stateParams.serialId;
        vm.phoneNum = $stateParams.phoneNum;
        vm.bankId = $stateParams.card;
        vm.bankType = $stateParams.type;
        vm.realName = $stateParams.realName;
        vm.idCard = $stateParams.idCard;
        vm.createdAt = $stateParams.createdAt;
        vm.balance = $stateParams.balance;
        vm.profit = $stateParams.profit;
        vm.id = $stateParams.id;


        vm.replace = function () {
            vm.shadePhone = true;
        };

        vm.getCode = function () {

            //更换手机 发短信 用户
            // $http({
            //     method:"GET",
            //     url:"/happywater-admin-ajax/a/business/business/user/phonemsg",
            //     params: {
            //         phoneNumber : vm.phoneNumber
            //     },
            //
            // })
            vm.params = {phoneNumber : vm.phoneNumber};
            myService.userChangePhoneGet(vm.params)
                .then( function success (response) {
                    if (response.data.code == 0){

                        var time = 60;
                        var get1 = document.getElementById('get1');
                        get1.setAttribute("disabled", "true");

                        var timer = setInterval(function () {
                            get1.value = ('重新发送'+(time) + 'S');
                            if (time == 1) {
                                clearInterval(timer);
                                time = 60;
                                get1.value = "获取验证码";
                                get1.removeAttribute("disabled");
                            }
                            time--;
                        }, 1000);

                    }else {
                        vm.warn = response.data.message;
                    }

                });

        };

        vm.sure = function () {
            //更换手机 用户
            // $http({
            //     method: 'PUT',
            //     url: '/happywater-admin-ajax/a/business/business/user/phone/'+vm.id,
            //     params:{
            //         phoneNumber : vm.phoneNumber,
            //         msgCode:vm.msgCode
            //     }
            // })
            vm.params = {
                phoneNumber : vm.phoneNumber,
                msgCode:vm.msgCode
            };
            myService.userChangePhonePut(vm.id,vm.params,
                {headers:{"Content-Type": "application/x-www-form-urlencoded"}})
                .then(function successCallback(response) {

                    if (response.data.code == 0){
                        vm.confirm = true;
                        vm.success = true;
                    }else {
                        vm.warn = response.data.message;
                    }
                });
        };

        vm.cancel  =function () {
            vm.shadePhone = false;
        };

        vm.makeSure  =function () {
            vm.shadePhone = false;
            vm.success = false;
            vm.confirm = false;
        };

    }
// --------------------------------userInform-------------------------------