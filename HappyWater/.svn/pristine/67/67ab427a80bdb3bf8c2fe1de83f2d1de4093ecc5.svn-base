//--------------------个人信息-------------------------
angular.module("myApp")
    .controller('informationCtrl',['$rootScope', '$state', '$http', 'userService', informationCtrl]);

function informationCtrl ($rootScope, $state, $http, userService) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    userService.getUserInfo(user.id)
        .then(function (res) {
            // console.log(res);
            if (res.data.status === true) {
                vm.userInfo = res.data.data;
            }else {
                $rootScope.toaster(res.data.data);
            }
        });
    vm.verify = function () {
        if (vm.userInfo.realName) {
            $rootScope.toaster('该账户已实名');
        } else {
            $state.go('verify_step1');
        }
    }
}

//---------------------实名认证--------------------------
angular.module("myApp")
    .controller('verifyCtrl',['$rootScope', '$state', '$stateParams', '$http', '$timeout', 'userService', 'cardType', verifyCtrl]);

function verifyCtrl ($rootScope, $state, $stateParams, $http,$timeout, userService, cardType) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    console.log(user);
    // vm.userPhone = user.phoneNumber;
    vm.userPhone = $stateParams.phoneNum;
    vm.cardType = $stateParams.bank;
    $http.get('../../JSON/support-bank.json')
        .then(function (res) {
            vm.cardArr = res.data.abbr;
        });
    //第一步 填写姓名卡号身份证
    vm.writeBankCard = function () {
        console.log(vm.userName,vm.userIdCard,vm.userBankCard);
        var reg1=/^[1-9]\d{16}[0-9Xx]$/;
        var reg2=/^\d{16,19}$/;
        if (!reg1.test(vm.userIdCard)){
            $rootScope.toaster('身份证号码格式错误，请重试。')
        }else if (!reg2.test(vm.userBankCard)){
            vm.toastTip = '银行卡号格式错误，请重试。';
            $timeout(function () {
                vm.toastTip = '';
            },2000);
            $rootScope.toaster('银行卡号格式错误，请重试。')
        }else {
            let formData = new FormData();
            formData.append('realName',vm.userName);
            formData.append('idCard',vm.userIdCard);
            formData.append('card',vm.userBankCard);

            cardType.discernCardType(vm.userBankCard)
                .then(function (res) {
                    console.log('银行卡信息',res);
                    if (res.statusText === 'OK') {
                        vm.theBankType = res.data.bank;
                        vm.theCardType = res.data.cardType;
                        if (vm.theCardType !== 'DC') {
                            $rootScope.toaster('该产品仅支持储蓄卡');
                        }else if(vm.cardArr.indexOf(vm.theBankType) === -1){
                            $rootScope.toaster('不支持该银行的银行卡哦')
                        }else {
                            userService.verifyUserInfo(user.id,formData,{
                                headers:{'Content-Type':undefined}
                            })
                                .then(function (res) {
                                    console.log(res.data);
                                    if (res.data.status === true){
                                        user.realName = vm.userName;
                                        user.idCard = vm.userIdCard;
                                        localStorage.setItem('loginForm',JSON.stringify(user));
                                        $state.go('verify_step2',{
                                            bank: vm.theBankType,
                                            productId: $stateParams.productId
                                        });
                                    }else {
                                        $rootScope.toaster('该用户已实名，请重试。')
                                    }
                                });
                        }
                    }
                });
        }
    };
    //卡类型、银行预留手机号
    vm.completeVerify = function () {
        console.log(vm.userPhone);
        var reg3 = /^[1]\d{10}$/;
        if (!reg3.test(vm.userPhone)) {
            $rootScope.toaster('手机号格式错误，请重试。');
            console.log($('#agreement').prop("checked"))
        }else if (!$('#agreement').prop("checked")) {
            $rootScope.toaster('请阅读支付协议并勾选同意。');
        } else {
            let formData = new FormData();
            formData.append('cardType', vm.cardType);
            formData.append('phoneNumber',vm.userPhone);

            userService.verifyCardInfo(user.id,formData,{
                headers: {'Content-Type': undefined}
            })
                .then(function (res) {
                    console.log(res.data);
                    if (res.data.status === true) {
                        $state.go('verify_step3',{
                            phoneNum:vm.userPhone,
                            productId: $stateParams.productId
                        });
                    }else if (res.data.data == '306') {
                        $rootScope.toaster('卡类型输入错误');
                    }
                });
        }
    };
    //发送验证码
    vm.sendMsgCode = function(){
        vm.params = {
            phoneNumber: vm.userPhone
        };
        userService.getVerifyMsgCode(user.id, vm.params)
            .then(function (res) {
                console.log(res.data);
                if (res.data.status === true){
                    $rootScope.toaster('请注意查收短信')
                }else {
                    $rootScope.toaster('短信发送失败')
                }
            })
    };
    //校验验证码 完成认证
    vm.verifyDone = function () {
        console.log(vm.smsCode);
        let formData = new FormData();
        formData.append('phoneNumber',vm.userPhone);
        formData.append('msgCode',vm.smsCode);
        userService.verifyMsgCode(user.id,formData,{
            headers:{'Content-Type': undefined}
        })
            .then(function (res) {
                console.log(res.data);
                if (res.data.status === true) {
                    $rootScope.modalAlert('实名认证成功！',function () {
                        if ($stateParams.productId) {
                            $state.go('product',{
                                productId: $stateParams.productId
                                //等理财产品接口改成用id获取详情，然后实名成功可跳转回去
                            })
                        }else {
                            $state.go('nav.home');
                        }
                    });
                }else {
                    $rootScope.toaster('验证码输入错误');
                }
            });
    }
}

//--------------------更换手机--------------------------
angular.module("myApp")
    .controller('changeTelCtrl',['$rootScope', '$state', '$http', '$timeout', 'userService', changeTelCtrl]);

function changeTelCtrl ($rootScope, $state, $http, $timeout, userService) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    //获取手机号
    userService.changeUserPhone(user.id)
        .then(function (res) {
            // console.log(res);
            if (res.data.status === true) {
                vm.phoneNumber = res.data.data.phoneNumber;
            }else {
                $rootScope.toaster(res.data.data);
            }
        });
    //发送短信
    vm.getCode = function(){
        vm.params={
            phoneNumber: vm.phoneNumber
        };
        userService.changeMsgCode(user.id, vm.params)
            .then(function (res) {
                console.log(res);
                if (res.data.status === true) {
                    console.log(res.data);
                }else {
                    $rootScope.toaster(res.data.data);
                }
            });
    };
    //验证短信验证码
    vm.confirmCode = function () {
        let formData = new FormData();
        formData.append('phoneNumber',vm.phoneNumber);
        formData.append('msgCode',vm.smsCode);
        userService.changeVerifyMsgCode(user.id, formData, {
            headers: {'Content-Type': undefined}
        })
            .then(function (res) {
                console.log(res);
                if (res.data.status === true) {
                    $state.go('changeTel_step2');
                }else {
                    $rootScope.toaster(res.data.data);
                }
            });
    };
    //发送短信获取新手机号验证码
    vm.getMsgCode = function(){
        vm.params = {
            phoneNumber: vm.newPhone
        };
        userService.newMsgCode(user.id, vm.params)
            .then(function (res) {
                console.log(res.data);
            });
    };
    //确认完成更换手机
    vm.completeChangeTel = function () {
        let formData = new FormData();
        formData.append('msgCode',vm.newCode);
        userService.verifyNewMsgCode(user.id, formData,{
            headers: {'Content-Type':undefined}
        })
            .then(function (res) {
                console.log(res);
                $rootScope.modalAlert('更换手机成功!<br>为了保证您的账号安全，您需要重新进行登录。',function () {
                    localStorage.clear();
                    $state.go('login');
                });
            });
    }
}