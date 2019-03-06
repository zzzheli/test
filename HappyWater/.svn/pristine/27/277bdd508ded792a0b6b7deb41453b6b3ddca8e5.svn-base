angular.module("myApp")
    .controller('suggestCtrl',['$state', '$stateParams', '$rootScope', 'myService', suggestCtrl]);
function suggestCtrl ($state, $stateParams, $rootScope, myService) {
    var vm = this;
    vm.serialId = $stateParams.serialId;
    vm.keyWord = $stateParams.keyWord;
    vm.commitBy = $stateParams.commitBy;
    vm.phoneNumber = $stateParams.phoneNumber;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

    //请求意见列表
    vm.getSuggestion = function () {
        vm.params = {
            serialId: $stateParams.serialId,
            keyword: $stateParams.keyWord,
            createdBy: $stateParams.commitBy,
            phoneNumber: $stateParams.phoneNumber,
            pageNum: $stateParams.pageNumber || 1,
            pageSize: $stateParams.pageSize || 10
        };
        myService.searchSuggestion(vm.params)
            .then(function (res) {
                // console.log(res.data);
                if (res.data.status === true) {
                    vm.opinionList = res.data.data.Ideas;
                    vm.page = $stateParams.pageNumber;              //搜索后的页数
                    vm.totalItems = res.data.data.total;       //搜索后的数据总条数
                }
            })
    };
    vm.getSuggestion();

    //意见查询
    vm.search = function() {
        let page;
        if (vm.newPage === undefined) {     //若newPage有值，则点击页码是跳转到newPage（无论点的哪页）
            page = vm.page;
        }else {
            page = vm.newPage;
        }
        $state.go('home.idea',{
            pageSize: vm.size,
            pageNumber: page,
            serialId: vm.serialId,
            keyWord: vm.keyWord,
            commitBy: vm.commitBy,
            phoneNumber: vm.phoneNumber
        });
    };

    //清空搜索
    vm.reset = function () {
        vm.serialId = undefined;
        vm.keyWord = undefined;
        vm.commitBy = undefined;
        vm.phoneNumber = undefined;
        vm.search();
    };

    //查看意见
    vm.view = function (id) {
        $state.go('home.suggestDetail',{
            id: id
        });
    };

    //回复意见
    vm.reply = function (id) {
        $state.go('home.suggestReply',{
            id: id
        })
    };

    //删除意见
    vm.delete = function(id) {
        vm.deleteTip = `<p align="center">您确认要删除吗？<br>删除后当前意见将永久消失。</p>`;
        $rootScope.modalConfirm('删除', vm.deleteTip, function (result) {
                if (result === true) {
                    myService.deleteSuggestion(id)
                        .then(function (res) {
                            if (res.data.status === true) {
                                $state.reload('home.opinion');
                                $rootScope.modalAlert('删除', '删除成功');
                            } else {
                                $rootScope.modalAlert('删除', '操作异常')
                            }
                        }, function () {
                            $rootScope.modalAlert('删除', '删除失败')
                        })
                }
            });
        }
}