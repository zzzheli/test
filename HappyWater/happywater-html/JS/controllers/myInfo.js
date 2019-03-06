//------------------个人信息---------------------
angular.module("myApp")
    .controller('myInfoCtrl',['$state', '$rootScope', 'userService',myInfoCtrl]);

function myInfoCtrl ($state, $rootScope, userService) {
    $rootScope.navCoa = false;
    $rootScope.navCob = false;
    $rootScope.navCoc = true;
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    if (!user){
          $rootScope.modalAlert('请登陆后再查看个人信息！',function () {
            $state.go('login');
        });
        return;
    }
    // console.log(user);
    //获取用户信息
    userService.getUserInfo(user.id)
        .then(function (res) {
            // console.log('用戶信息',res.data.data);
            if (res.data.status === true) {
                vm.userInfo = res.data.data;
            }else {
                $rootScope.modalAlert(res.data.data,function () {
                    $state.go('login');
                });
            }
        });
    userService.unreadMsg(user.id)
        .then(function (res) {
            // console.log(res.data);
            if (res.data.status === true) {
                vm.unreadCount = res.data.data;
            }else {
                // console.log(res.data.data);
                // $rootScope.toaster(res.data.data);
            }
        });


    vm.user_finance = function () {
        $state.go("myFinance")
    };
    vm.user_record = function () {
        $state.go("record")
    };
    vm.user_card = function () {
        $state.go("bankCard")
    };
    vm.using_help = function () {
        $state.go("usingHelp")
    };
    vm.user_suggest = function () {
        $state.go("suggest")
    };
    vm.setting = function () {
        $state.go("setting")
    };
    vm.messages = function () {
        $state.go("messages")
    };
    vm.information = function () {
        $state.go("information")
    };

}


//---------------------交易记录---------------------
angular.module("myApp")
    .controller('recordCtrl',['$rootScope', '$state', '$http', 'userService',recordCtrl]);

function recordCtrl ($rootScope, $state, $http, userService) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    userService.transactionRecord(user.id)
        .then(function (res) {
            // console.log(res.data);
            if (res.data.status === true) {
                vm.records = res.data.data;
                // vm.records = [
                // {'id':1,'record':'回款-聚月赚','money':'66.66','date':'2018-09-15 16:13:43','status':'成功'},
                // {'id':2,'record':'回款-新手礼','money':'33.66','date':'2018-09-03 12:00:00','status':'成功'}
                // ];
            }else {
                $rootScope.toaster(res.data.data);
            }
        });

}


//---------------------意见反馈-----------------------
angular.module("myApp")
    .controller('suggestCtrl',['$rootScope', '$state', '$http', 'userService',suggestCtrl]);

function suggestCtrl ($rootScope, $state, $http, userService) {
    let vm = this;
    let user = JSON.parse(localStorage.getItem('loginForm'));
    vm.submitSuggestion = function () {
        // console.log(vm.suggestion);
        let formData = new FormData();
        formData.append('content',vm.suggestion);
        if (vm.suggestion === undefined) {
            $rootScope.toaster('请输入内容后再进行提交！')
        }else{
            userService.userFeedBack(user.id,formData,{
                headers:{'Content-Type':undefined}
            })
                .then(function (res) {
                    // console.log(res);
                    if (res.data.status === true) {
                        $rootScope.modalAlert('提交成功',function () {
                            $state.go('nav.myInfo');
                        });
                    }else{
                        $rootScope.toaster(res.data.data);
                    }
                });
        }

    }

}

//-------------------使用帮助-----------------------
angular.module("myApp")
    .controller('usingHelpCtrl',['$state', '$http', '$rootScope',usingHelpCtrl]);

function usingHelpCtrl ($state, $http,$rootScope) {
    let vm = this;
    vm.currentCount = 0;    // 当前(条数)
    vm.totalCount = 5;      // 总(条数)
    vm.helps = [];      // 存放数据
    vm.loadMore = function() {
        if (vm.currentCount < vm.totalCount) {
            $http.get('../../JSON/helps.json')
                .then(function(res) {
                    vm.load = function () {
                        //组织数据
                        let getArr = res.data.lists.slice(vm.currentCount,vm.currentCount+5);
                        for (let i in getArr) {
                            vm.helps.push(getArr[i]);
                        }
                        vm.totalCount = res.data.lists.length;
                        vm.currentCount += 5;
                    };
                    vm.load();
                });
        }else {
            $rootScope.toaster('没有更多了哟');
        }
    };
    // 默认第一次加载数据
    vm.loadMore();
}

