//--------------------添加银行卡---------------------
angular.module("myApp")
    .controller('addCardCtrl',['$rootScope', '$state', '$stateParams', '$http', '$timeout', 'cardType', 'userService', addCardCtrl]);

function addCardCtrl ($rootScope, $state, $stateParams, $http,$timeout,cardType,userService) {
    let vm = this;
    let loginForm = JSON.parse(localStorage.getItem("loginForm"));
    vm.idCard = loginForm.idCard;
    vm.cardType = $stateParams.bank;
    vm.cardBindPhone = $stateParams.phoneNum;
    //首先 填充个人信息
    //银行卡信息
    vm.userInfo = function () {
        userService.getBankIdInfo(loginForm.id)
            .then(function success (response) {
                // console.log(response);
                vm.realName = response.data.data.realName;
            })
    };
    vm.userInfo();
    $http.get('../../JSON/support-bank.json')
        .then(function (res) {
            vm.cardArr = res.data.abbr;
        });
    //第一步 输入银行卡号
    vm.confirmCard = function(){
        var reg=/^\d{16,19}$/;
        if (!reg.test(vm.userBankCard)){
            $rootScope.toaster('银行卡号格式错误，请重试。')
        }else {
            cardType.discernCardType(vm.userBankCard)
                .then(function (res) {
                    if (res.statusText === 'OK') {
                        vm.cardType = res.data.bank;
                        if (vm.cardArr.indexOf(vm.cardType) > -1) {
                            //添加 提交卡号
                            let formData = new FormData();
                            formData.append('card',vm.userBankCard);
                            formData.append('cardType',vm.cardType);
                            userService.addBankCardNum(loginForm.id,formData,
                                {headers:{'content-type':undefined}})
                                .then(function (res) {
                                    console.log(res);
                                    if (res.data.status === true ) {
                                        $state.go('addCard_step2',{
                                            bank: vm.cardType
                                        })
                                    }else {}
                                })
                        }else {
                            $rootScope.toaster('这个银行的银行卡不行的咯')
                        }
                    }
                });
        }
    };
    //第二步 填手机号
    vm.agreeProtocol = function(){
        console.log(vm.userPhone);
        var reg2 = /^[1]\d{10}$/;
        if (!reg2.test(vm.userPhone)) {
            $rootScope.toaster('手机号格式错误，请重试。');
            // console.log($('#agreement').prop("checked"))
        }else if (!$('#agreement').prop("checked")) {
            $rootScope.toaster('请阅读支付服务协议并勾选同意。')
        } else {
            //添加 提交手机号
            let formData = new FormData();
            formData.append('phoneNumber',vm.userPhone);
            userService.addBankPhoneNum(loginForm.id,formData,
                {headers:{'content-type':undefined}})
                .then(function (res) {
                    if (res.data.status === true) {
                        // console.log(res);
                        $state.go('addCard_step3',{
                            phoneNum: vm.userPhone
                        });
                    }else {
                        $rootScope.toaster('操作异常');
                    }
                });
        }
    };

    //添加 获取短信验证码
    vm.getMsg = function () {
        userService.untieBankGetCode(loginForm.id)
            .then( function success (response) {
                if (response.data.status == true){
                    console.log(response.data);
                }else {
                    vm.warn = response.data.message;
                }
            })
    };

    //完成绑定
    vm.addCardDone = function () {
        //添加 验证短信
        let formData = new FormData();
        formData.append('msgCode',vm.smsCode);
        userService.addBankMsgCode(loginForm.id,formData,
            {headers:{'content-type':undefined}})
            .then(function (res) {
                // console.log(res.data);
                if (res.data.status === true) {
                    $rootScope.modalAlert('银行卡绑定成功',function () {
                        $state.go('bankCard');
                    })
                }else {
                    $rootScope.toaster('银行卡绑定异常')
                }
            });
    }
}