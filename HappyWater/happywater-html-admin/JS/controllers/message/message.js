angular.module("myApp")
    .controller('newsCtrl', ['$rootScope', '$state', '$stateParams', 'myService', newsCtrl]);
function newsCtrl ($rootScope, $state, $stateParams, myService) {

    var vm = this;
    vm.keyWord = $stateParams.keyword;
    vm.msgType = $stateParams.status;
    vm.createdBy = $stateParams.createdBy;
    vm.startDate =  ($stateParams.startAt === undefined) ? undefined : Number($stateParams.startAt);
    vm.endDate = ($stateParams.endAt === undefined) ? undefined : Number($stateParams.endAt);
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

        //请求消息列表
        vm.getMessage = function () {
            vm.params = {
                keyword: $stateParams.keyword,
                type: $stateParams.status,
                createdBy: $stateParams.createdBy,
                startSendAt: $stateParams.startAt,
                endSendAt: $stateParams.endAt,
                pageNum: $stateParams.pageNumber || 1,
                pageSize: $stateParams.pageSize || 10
            };
            myService.searchMessage(vm.params)
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.status === true) {
                        vm.msgList = res.data.data.banners;
                        vm.page = $stateParams.pageNumber;              //搜索后的页数
                        vm.totalItems = res.data.data.total;       //搜索后的数据总条数
                    }
                })
        };
        vm.getMessage();

        //查询消息
        vm.search = function(){
            // console.log('查询···');
            let page,startD,endD;
            if(vm.startDate === undefined){
                startD = undefined;
            }else {
                startD = isNaN(vm.startDate.toString()) ? vm.startDate.getTime() : vm.startDate;
            }
            if (vm.endDate === undefined) {
                endD = undefined;
            }else {
                endD = isNaN(vm.endDate.toString()) ? vm.endDate.getTime() + 86399999 : vm.endDate;     //86399999为一天（差1毫秒），数据获取到endDay的最后一毫秒
            }
            if (vm.newPage === undefined) {     //若newPage有值，则点击页码是跳转到newPage（无论点的哪页）
                page = vm.page;
            }else {
                page = vm.newPage;
            }
            $state.go('home.message',{
                pageSize: vm.size,
                pageNumber: page,
                keyword: vm.keyWord,
                status: vm.msgType,
                createdBy: vm.createdBy,
                startAt: startD,
                endAt: endD
            });
        };

        vm.clear = function(){
            vm.keyWord = undefined;
            vm.msgType = undefined;
            vm.createdBy = undefined;
            vm.startDate = undefined;
            vm.endDate = undefined;
            vm.search();
        };

        vm.view = function (id) {
            // console.log(id);
            $state.go('home.newsDetail',{
                id: id
            });
        };

        vm.edit = function (id) {
            $state.go('home.newNews',{
                id: id
            });
        };

        vm.cancel = function () {
            vm.messageId = this.x.id;
            vm.cancelTip = `<p align="center">确认取消当前推送？<br>取消后将停止推送。</p>`;
            $rootScope.modalConfirm('取消',vm.cancelTip,function (result) {
                if (result === true) {
                    myService.cancelMessage(vm.messageId)
                        .then(function (res) {
                            // console.log(res.data);
                            if (res.data.code === 0) {
                                $state.reload('home.news');
                                $rootScope.modalAlert('取消','取消成功');
                            }else {
                                $rootScope.modalAlert('取消','操作异常')
                            }
                        },function () {
                            $rootScope.modalAlert('取消','取消失败')
                        })
                }
            });
        };

        vm.delete = function () {
            vm.messageId = this.x.id;
            vm.deleteTip = `<p align="center">确认删除当前消息？<br>确认后将无法恢复。</p>`;
            $rootScope.modalConfirm('删除',vm.deleteTip,function (result) {
                if (result === true) {
                    myService.deleteMessage(vm.messageId)
                        .then(function (res) {
                            // console.log(res.data);
                            if (res.data.code === 0) {
                                $state.reload('home.news');
                                $rootScope.modalAlert('删除','删除成功');
                            }else {
                                $rootScope.modalAlert('删除','操作异常')
                            }
                        },function () {
                            $rootScope.modalAlert('删除','删除失败')
                        })
                }
            });
        };
    //状态：ng-repeat
    vm.msgStatus = [
        {value: '', name: '全部'},
        {value: 10, name: '待推送'},
        {value: 20, name: '已推送'},
        {value: 30, name: '已取消'}
    ];
    }