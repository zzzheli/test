angular.module("myApp")
    .controller('userCtrl', ['$rootScope', '$http', '$state', '$stateParams', 'myService', userCtrl]);
function userCtrl ($rootScope,$http,$state, $stateParams,myService) {
    var vm = this;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;
   vm.serialId = $stateParams.serialId;
   vm.realName = $stateParams.realName;
   vm.phoneNum = $stateParams.phoneNumber;
   vm.locked = $stateParams.status;

    //模糊查询 用户
   vm.getSearch = function () {
       vm.params = {
            pageNumber:$stateParams.pageNumber || 1,
            pageSize:$stateParams.pageSize || 10,
            serialId:$stateParams.serialId,
            realName:$stateParams.realName,
            phoneNumber:$stateParams.phoneNumber,
            status:$stateParams.status,
        };
        myService.userSearch(vm.params)
            .then(function successCallback(response) {
            if (response){
                vm.userList = response.data.data.users;
                // vm.id = vm.userList.id;
                // vm.locked = vm.userList.locked;
                vm.page = $stateParams.pageNumber;                     //搜索后的页数
                vm.totalItems = response.data.data.total;        //搜索后的数据总条数
            }
        });
    };

   vm.getSearch();

    //查询
   vm.search = function () {
        let page ;
        if(vm.newPage === undefined ){
            page =vm.page;
        }else {
            page =vm.newPage;
        }
        $state.go('home.user',{
            pageNumber:page,
            pageSize:vm.size,
            serialId:vm.serialId,
            realName:vm.realName,
            phoneNumber:vm.phoneNum,
            status:vm.locked,
        },{reload:true});
        // console.log(vm.phoneNum,vm.size,page);
        //自身页面传参
    };

    //清空
   vm.reset = function () {
       vm.serialId = undefined;
       vm.realName = undefined;
       vm.phoneNum = undefined;
       vm.locked = undefined;
       vm.search();
    };

    //冻结用户
   vm.uLocked = function(id,locked){
       //  console.log(this.x);
       // vm.id = this.x.id;
       // vm.locked = this.x.locked;
       vm.locked = locked;
       if(vm.locked === 0){
           vm.tip1 =
                `<p align="center">您确认要冻结该用户吗？<br>冻结后该用户账号将无法登陆。</p>`;
           vm.tip2 =
                `<p align="center">冻结成功。</p>`;
        }else{
           vm.tip1 =
                `<p align="center">您确认要解冻该用户吗？<br>解冻后该用户账号将恢复使用。</p>`;
           vm.tip2 =
                `<p align="center">解冻成功。</p>`;
        }
       vm.status =vm.locked === 0 ? "0" : "1" ;
       vm.operatTip =vm.locked === 0 ? '冻结' : '解冻' ;
        $rootScope.modalConfirm(vm.operatTip,vm.tip1, function (result) {
            if (result === true) {
               vm.params = {
                    status:vm.status,

                };
                //冻结用户请求
                myService.userLock(id,vm.params,
                {headers:{"Content-Type": "application/x-www-form-urlencoded"}})
                //请求头格式：根据接口形式 www-form
                    .then(function (res) {
                        // console.log(vm.params);
                        if (res.data.code === 0) {
                            $state.reload('home.user');
                            $rootScope.modalAlert(vm.operatTip, vm.tip2);
                        }else {
                            $rootScope.modalAlert(vm.operatTip,'操作异常');
                        }
                    },function () {
                        $rootScope.modalAlert(vm.operatTip,'提交失败');
                    });

                // $http({
                //     method: 'PUT',
                //     url: 'happywater-admin-ajax/a/business/business/user/status/' + vm.id,
                //     params: {
                //         status: vm.status
                //     },
                //     headers:{
                //         'Content-type': 'application/x-www-form-urlencoded'
                //     }
                // }).then(function successCallback(response) {
                //     $state.reload('home.user');
                //     vm.modalAlert(vm.operatTip, vm.tip2);
                //
                // });
            }
        });

    };


   vm.userInfo = function (x) {
        // $state.go("home.userInform");
        // Now = this.$index;
        // userInfoNow =vm.userList[Now];
        // //获取选中用户信息的下标，并提出
        //
        // userInfoNow = JSON.stringify(userInfoNow);
        // sessionStorage.setItem("userInfoNow",userInfoNow);
        // console.log(userInfoNow,Now);
       // console.log(x);
       $state.go("home.userInform",{
           serialId : x.serialId,
           phoneNum : x.phoneNum,
           card : x.banks[0].card,
           type : x.banks[0].type,
           realName : x.realName,
           idCard : x.idCard,
           createdAt : x.createdAt,
           balance : x.balance,
           profit : x.profit,
           id : x.id,
       });
    };


    //类型： ng-repeat
   vm.userStatus = [
        {value: '' , name: '请选择'},
        {value: '0', name: '正常'},
        {value: '1', name: '冻结'},
    ];

}
// -------------------------------------user-------------------------------