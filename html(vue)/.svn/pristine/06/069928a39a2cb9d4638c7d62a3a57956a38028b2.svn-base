<template>
  <div class="company-list">
    <div class="container">
      <div class="row">
        <img class="company-list-banner" src="../assets/img/companyListBanner.jpg" alt="">
      </div>
      <!--搜索部分开始-->
      <div class="row search-company">
        <form action="">
          <div class="form-group">
            <label class="search-title">公司地点：</label>
            <select-area :the-area="companyArea" @update:the-area="val => companyArea = val"></select-area>
          </div>
          <div class="form-group">
            <label class="search-title">融资阶段：</label>
            <a class="choseBoxes"
               v-for="(financingList,index) in financingList"
               :key="index"
               :class="{redstyle:financingList.selected}"
               @click="financing(financingList.id, index)">
              {{financingList.type}}
            </a>
          </div>
          <div class="form-group">
            <label class="search-title">行业领域：</label>
            <a class="choseBoxes"
               v-for="(fieldList,index) in fieldList"
               :key="index"
               :class="{redstyle:fieldList.selected}"
               @click="industry(fieldList.id, index)">
              {{fieldList.type}}
            </a>
          </div>
        </form>
        <div class="row">
          <div class="col-xs-12">
            <div class="pull-right">
              <button class="btn btn-xs choseBoxes btn-default"
                      @click="clear()"
              >清除
              </button>
              <button class="btn btn-xs choseBoxes btn-danger"
                      @click="companySearch()">
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--搜索部分结束-->


      <div class="row search-company-list">
        <!--公司内容开始-->
        <div class="search-company-content col-md-4 col-sm-6 col-xs-12"
             v-if="!searchResult"
             v-for="(companyList,index) in companyList"
             :key="index">
            <div class="company-box">
              <div class="company-card pointer" @click="details(companyList.companyId,companyList.companyName)">
                <div class="company-logo">
                  <img class="company-img object-fit" :src="companyList.companyLogo">
                </div>
                <div class="company-text">
                  <p class="company-name">{{companyList.companyName}}</p>
                  <p class="common-slogan">{{companyList.companySlogan}}</p>
                  <p class="company-jobs">
                    <span style="color: #fc2b47">{{companyList.countJob}}</span>个在招职位
                  </p>
                </div>
              </div>
              <!--公司内容底部内容开始-->
              <div class="company-message">
                <div>
                  <img src="../assets/img/companyListType.png" alt="">
                  <span class="font-size-12">&nbsp;{{companyList.companyTrade[0] | trade}}</span>
                </div>
                <div>
                  <img src="../assets/img/companyListfinancing.png">
                  <span class="font-size-12">&nbsp;{{companyList.companySize | size}}</span>
                </div>
                <div>
                  <img src="../assets/img/companyListMap.png">
                  <span class="font-size-12">&nbsp;{{companyList.companyArea | area}}</span>
                </div>
              </div>
              <!--公司内容底部内容结束-->
            </div>

        </div>
        <!--公司内容结束-->

        <!--分页标签-->
        <div class="col-md-12 col-xs-12 col-sm-12"  v-if="!searchResult">
          <div class="block float-right">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :page-size="size"
              :current-page.sync="currentPage"
              layout="prev, pager, next, jumper"
              :total="Number(total)">
            </el-pagination>
          </div>
        </div>
        <!--搜索不到的提示开始-->
        <div class="row no-find" v-if="searchResult">
          <div class="no-find-img">
            <img src="../assets/img/no-result.png" alt="网速炸了别看了">
          </div>
          <div class="no-find-text">
              <span style="font-size: 20px; color: #2b3d51">
                   <strong>暂时没有符合该搜索条件的内容</strong>
              </span><br>
            <span style="font-size: 18px; color: #536a82">
               <strong>请重新修改搜索条件后再次进行搜索</strong>
            </span>
          </div>
        </div>
        <!--搜索不到的提示结束-->
      </div>

    </div>

  </div>
</template>

<script>
  import SelectArea from "../components/selectArea"
  import {getComlist} from '@/request/api'
    export default {
        name: 'companyList',
        components: {SelectArea},
        data() {
            return {
                companyList: {},
                total:"",
                size: 9,
                currentPage: 1,
                companyArea: JSON.parse(sessionStorage.getItem("compArea")) || '',
                companySize : JSON.parse(sessionStorage.getItem("companySize")) || [],
                orderType:1,
                companyTrade: JSON.parse(sessionStorage.getItem("companyTrade")) || [],
                //融资阶段//存的sessionStorage不在这取的话，会出现点击清楚后，内容没有了
                financingList:JSON.parse(sessionStorage.getItem("financingList")) || [
                    {type: "不限", selected: true},
                    {id: 0, type: "天使轮", selected: false},
                    {id: 1, type: "A轮", selected: false},
                    {id: 2, type: "B轮", selected: false},
                    {id: 3, type: "C轮", selected: false},
                    {id: 4, type: "D轮及以上", selected: false},
                    {id: 5, type: "上市公司", selected: false},
                    {id: 6, type: "无需融资", selected: false},
                ],
                //行业领域
                fieldList: JSON.parse(sessionStorage.getItem("fieldList")) || [
                    {type: "不限", selected: true},
                    {id: 0, type: "移动互联网", selected: false},
                    {id: 1, type: "电子商务", selected: false},
                    {id: 2, type: "企业服务", selected: false},
                    {id: 3, type: "O2O", selected: false},
                    {id: 4, type: "教育", selected: false},
                    {id: 5, type: "金融", selected: false},
                    {id: 6, type: "游戏", selected: false},
                ],
                searchResult: false,
            }
        },
        mounted() {
            let vm = this;
            vm.companyArea = JSON.parse(sessionStorage.getItem("compArea"))
            this.getCompanyList(vm.size,vm.currentPage,vm.companyArea,vm.companySize,vm.orderType,vm.companyTrade);//最开始调用可以不用传参
        },
        methods: {
            //请求
            getCompanyList: function (size,currentPage,companyArea,companySize,orderType,companyTrade) {
              getComlist({
                size: size,
                currentPage: currentPage,
                companyArea: companyArea,
                companySize: companySize,
                orderType: orderType,
                companyTrade: companyTrade,
                })
                .then((res) => {
                  if (res.data.code === 0) {
                    this.searchResult = false;
                    this.companyList = res.data.data.companyList;
                    this.total = res.data.data.total;
                  }
                  else if(res.data.code === 1){
                    this.searchResult = true;
                  }
                  else {
                    console.log("服务器没有响应");
                  }
                }).catch((error) => {
                    console.log(error);
                })
            },

            //融资阶段，点击事件
            financing: function (id,index) {
                let vm = this;//如果不这样写的话，后续this的指向可能会乱。
                if(index === 0){
                    vm.financingList.forEach(function(x){
                        x.selected = false;
                    });
                    vm.financingList[0].selected = true;
                }
                else if(index >= 1 && index <= 8){
                    //点击内容高亮
                    vm.financingList.forEach(function (x) {
                        if (x.id === id && x.id !== undefined) {
                            x.selected = !x.selected;
                            vm.financingList[0].selected = false;
                        }
                    });
                    //遍历financingList数组，检查“不限”是否高亮
                    vm.financingList[0].selected = vm.financingList.every(function(item){
                        return item.selected === false;
                    });
                }
                // sessionStorage.setItem("financingList",JSON.stringify(vm.financingList));

            },

            //行业领域，点击事件
            industry: function (id,index) {
                //原理同“融资阶段”
                let vm = this;
                if(index === 0){
                    vm.fieldList.forEach(function(x){
                        x.selected = false;
                    });
                    vm.fieldList[0].selected = true;
                }
                else if(index >= 1 && index <= 8){
                    vm.fieldList.forEach(function(y){
                        if(y.id === id){
                            y.selected = !y.selected;
                            vm.fieldList[0].selected = false;
                        }
                    });
                    vm.fieldList[0].selected = vm.fieldList.every(function(item){
                        return item.selected === false;
                    })
                }
                // sessionStorage.setItem("fieldList",JSON.stringify(vm.fieldList));
            },

            //搜索
            companySearch: function () {
                let vm = this;
                //融资规模
                vm.companySize = [];
                //行业领域
                vm.companyTrade = [];

                vm.financingList.forEach(function(x){//将选中的“融资规模”放进数组用来请求
                    if(x.selected === true && x.id !== undefined){
                        vm.companySize.push(x.id);
                        // vm.companySize = vm.companySize.join(",");//我这里傻了！放在forEach里面？？！！
                    }
                });
                vm.fieldList.forEach(function(x){//将选中的“行业领域”放进数组用来请求
                    if(x.selected === true && x.id !== undefined){
                        vm.companyTrade.push(String(x.id));
                        // vm.companyTrade = vm.companyTrade.join(",");
                    }
                });

                vm.companySize = vm.companySize.join(",");//这不能写在forEach里面
                vm.companyTrade = vm.companyTrade.join(",");
                //存搜索的值，实现刷新保存
                sessionStorage.setItem("compArea",JSON.stringify(vm.companyArea));
                sessionStorage.setItem("companySize",JSON.stringify(vm.companySize));
                sessionStorage.setItem("companyTrade",JSON.stringify(vm.companyTrade));

                //存搜索选中的值，实现刷新渲染原来的值
                sessionStorage.setItem("financingList",JSON.stringify(vm.financingList));
                sessionStorage.setItem("fieldList",JSON.stringify(vm.fieldList));

                //发送请求
                vm.getCompanyList(vm.size,vm.currentPage,vm.companyArea,vm.companySize,vm.orderType,vm.companyTrade);
            },
            //清除
            clear : function(){
                let vm = this;
                //公司地点恢复默认
                vm.value = ''
                vm.companyArea = "";
                //融资阶段恢复默认
                vm.financingList.forEach(function(x){
                    x.selected = false;
                });
                vm.financingList[0].selected = true;
                //行业领域恢复默认
                vm.fieldList.forEach(function(x){
                    x.selected = false;
                });
                vm.fieldList[0].selected = true;
                //清除所有缓存
              sessionStorage.removeItem('companySize');
              sessionStorage.removeItem('companyTrade');
              sessionStorage.removeItem('financingList');
              sessionStorage.removeItem('fieldList');
              sessionStorage.removeItem('compArea');

                vm.getCompanyList('','','','',vm.orderType,'');
            },

            //以下是公司内容点击跳转
            details(id,name){
                this.$router.push({path:"/findElites/companyDetail",query:{companyId:id,companyName:name}});
            },
            //分页点击
            handleCurrentChange:function(){
                let vm = this;
                vm.getCompanyList(vm.size, vm.currentPage, vm.companyArea, vm.companySize, vm.orderType, vm.companyTrade, vm.companyName);
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/css/companyList";
</style>
