angular.module("myApp")
    .controller('moduleCtrl', ['$rootScope', '$state', '$stateParams', 'myService', moduleCtrl]);
function moduleCtrl ($rootScope, $state, $stateParams, myService) {

    var vm = this;

    vm.serialId = $stateParams.serialId;
    vm.moduleName = $stateParams.moduleName;
    vm.moduleFather = $stateParams.moduleFatherName;
    vm.creator = $stateParams.createdBy;
    vm.size = $stateParams.pageSize === undefined ? 10 : $stateParams.pageSize;

    vm.getModules = function(){
        vm.params = {
            serialId: $stateParams.serialId,
            moduleName: $stateParams.moduleName,
            moduleFatherName: $stateParams.moduleFatherName,
            createdBy: $stateParams.createdBy,
            pageNum: $stateParams.pageNumber || 1,
            pageSize: $stateParams.pageSize || 10
        };
        myService.searchModule(vm.params)
            .then(function (res) {
                // console.log('模块列表',res.data);
                if (res.data.status === true){
                    vm.moduleList = res.data.data.modules;
                    vm.page = $stateParams.pageNumber;              //搜索后的页数
                    vm.totalItems = res.data.data.pageTotal;       //搜索后的数据总条数
                }
            });
    };
    vm.getModules();

    //重置  多条件查询及重置有问题
    vm.reset = function () {
        vm.serialId = undefined;
        vm.moduleName = undefined;
        vm.moduleFather = undefined;
        vm.creator = undefined;
        vm.search();
    };
    //条件筛选
    vm.search = function () {
        let page;
        if (vm.newPage === undefined) {     //若newPage有值，则点击页码是跳转到newPage（无论点的哪页）
            page = vm.page;
        }else {
            page = vm.newPage;
        }
        $state.go('home.module',{
            pageSize: vm.size,
            pageNumber: page,
            serialId: vm.serialId,
            moduleName: vm.moduleName,
            moduleFatherName: vm.moduleFather,
            createdBy: vm.creator
        })
    };

    //编辑
    vm.editModule = function (id) {
        // vm.moduleDetail = this.x;
        $state.go('home.newModule',{
            id: id
        },{reload:true});
    };

    //删除
    vm.deleteModule = function (id) {
        vm.moduleId = id;
        vm.deleteTip = `<p align="center">您确定要删除吗？删除后<br>当前模块功能将会被永久消失。</p>`;
        $rootScope.modalConfirm('删除',vm.deleteTip,function (result) {
            if (result === true) {
                myService.deleteModule(vm.moduleId)
                    .then(function (res) {
                        if (res.data.status === true) {
                            $state.reload('home.module');
                            $rootScope.modalAlert('删除','删除成功');
                        }else {
                            $rootScope.modalAlert('删除',res.data.msg)
                        }
                    },function () {
                        $rootScope.modalAlert('删除','删除失败')
                    })
            }
        })
    };

}