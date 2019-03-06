//-------------------删除银行卡--------------------
angular.module("myApp")
    .controller('deleteCardCtrl',['$rootScope', '$state', '$http', 'userService','$stateParams', deleteCardCtrl]);

function deleteCardCtrl ($rootScope, $state, $http, userService, $stateParams,) {
        let vm = this;
        let loginForm = JSON.parse(localStorage.getItem("loginForm"));
        vm.phoneNumber = loginForm.phoneNumber;

        //跳转至解绑页
        vm.card = {
            id: $stateParams.cardId,
            type: $stateParams.cardType,
            number: $stateParams.cardNumber
        };
        console.log(vm.card);
        if (vm.card === undefined) {
            $state.go('bankCard');
        }
        vm.deleteTip = function () {
            $rootScope.modalConfirm('解除绑定后银行服务<br>不可用，确认取消绑定？',function (result) {
                if (result) {
                    $state.go('deleteCardVerify',{cardId:vm.card.id});
                }else {
                    $state.go('bankCard');
                }
            })
        };

        //获取短信验证码 解绑银行卡
        vm.getCode = function () {
            vm.params = {phoneNumber : vm.phoneNumber};
            userService.untieBankGetCode(loginForm.id,vm.params)
                .then( function success (response) {
                    if (response.data.code === 0){
                        // console.log(response.data);
                    }else {
                        vm.warn = response.data.message;
                    }
                })
        };
        //解绑银行卡
        vm.deleteDone = function () {
            if ($stateParams.cardId === undefined) {
                return $state.go('bankCard');
            }
            vm.params = {
                bankId: $stateParams.cardId,
                msgCode: vm.smsCode
            };
            console.log(vm.params);
            userService.untieBankDelete(loginForm.id,vm.params)
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('银行卡解绑成功',function () {
                            $state.go('bankCard');
                        })
                    }else {
                        $rootScope.toaster('银行卡解绑异常')
                    }
                })
        }
    }
