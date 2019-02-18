<template>
  <div class="company-search">
    <div class="container cont-box">
      <div class="row title-box">
        <div class="search-title-btn pointer" @click="clear">公司</div>
        <router-link to="/findJob/jobSearch" class="search-title-btn search-title-btn-off pointer">职业</router-link>
      </div>
      <div class="row search-company">
        <form action="">
          <div class="form-group align-center">
            <label class="search-option">关 键 词：</label>
            <input type="text" class="search-input form-control" v-model="companyName">
          </div>
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
        <!--搜索开始-->
        <div class="row">
          <div class="col-xs-12">
            <div class="pull-right">
              <button class="btn btn-xs  choseBoxes btn-default"
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
        <!--搜索结束-->
      </div>

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

        <!--分页标签开始-->
        <div class="col-md-12 col-xs-12 col-sm-12" v-if="!searchResult">
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
        <!--分页标签结束-->

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

        <!--搜索不到时，默认三个推荐公司开始-->
        <div class="row" v-if="searchResult" style="padding:0 15px;">
          <div class="search-company-content col-md-4 col-sm-6 col-xs-12"
               v-for="(companyList,index) in companyListNull"
               :key="index"
                v-if="index < 3">
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
                  <span class="font-size-14">&nbsp;{{companyList.companyTrade[0] | trade}}</span>
                </div>
                <div>
                  <img src="../assets/img/companyListfinancing.png">
                  <span class="font-size-14">&nbsp;{{companyList.companySize | size}}</span>
                </div>
                <div>
                  <img src="../assets/img/companyListMap.png">
                  <span class="font-size-14">&nbsp;{{companyList.companyArea | area}}</span>
                </div>
              </div>
              <!--公司内容底部内容结束-->
            </div>

          </div>
        </div>
        <!--搜索不到时，默认三个推荐公司结束-->
      </div>

    </div>
  </div>
</template>

<script>
  import SelectArea from "../components/selectArea"
  import {getComlist} from '@/request/api'
    export default {
        name: "companySearch",
      components: {SelectArea},
        data() {
            return {
                companyList: {},
                total: "",
                size: 9,
                currentPage: 1,
                companyArea: JSON.parse(sessionStorage.getItem("compArea2")) || '',
                companySize: JSON.parse(sessionStorage.getItem("companySize2")) || [],
                orderType: null,
                companyTrade: JSON.parse(sessionStorage.getItem("companyTrade2")) || [],
                //第一个值为找职位传过来的值
                companyName: JSON.parse(sessionStorage.getItem("companyNamess")) || JSON.parse(sessionStorage.getItem("companyName2")) || "",
                //融资阶段//存的sessionStorage不在这取的话，会出现点击清楚后，内容没有了
                financingList: JSON.parse(sessionStorage.getItem("financingList2")) || [
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
                fieldList: JSON.parse(sessionStorage.getItem("fieldList2")) || [
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
                companyListNull: [],
            }
        },

        methods: {
          // 地区选择
          // changeArea (val) {
          //   this.companyArea = val
          // },
            //公司列表请求
            getCompanyList: function (size, currentPage, companyArea, companySize, orderType, companyTrade, companyName) {
              getComlist({
                size: size,
                currentPage: currentPage,
                companyArea: companyArea,
                companySize: companySize,
                orderType: orderType,
                companyTrade: companyTrade,
                companyName: companyName,
              })
                .then((res) => {
                  if (res.data.code === 0) {
                    this.searchResult = false;
                    this.companyList = res.data.data.companyList;
                    this.total = res.data.data.total;
                  }
                  else if (res.data.code === 1) {
                    this.companyListNull = res.data.data.companyListNull;
                    this.searchResult = true;
                  }
                  else {
                    console.log("服务器没有响应");
                  }
                }).catch((error) => {
                console.log(error);
                })
            },
            //请求不到时，默认推荐三个

            //融资阶段，点击事件
            financing: function (id, index) {
                let vm = this;//如果不这样写的话，后续this的指向可能会乱。
                if (index === 0) {
                    vm.financingList.forEach(function (x) {
                        x.selected = false;
                    });
                    vm.financingList[0].selected = true;
                }
                else if (index >= 1 && index <= 8) {
                    //点击内容高亮
                    vm.financingList.forEach(function (x) {
                        if (x.id === id && x.id !== undefined) {
                            x.selected = !x.selected;
                            vm.financingList[0].selected = false;
                        }
                    });
                    //遍历financingList数组，检查“不限”是否高亮
                    vm.financingList[0].selected = vm.financingList.every(function (item) {
                        return item.selected === false;
                    });
                }
                // sessionStorage.setItem("financingList",JSON.stringify(vm.financingList));

            },

            //行业领域，点击事件
            industry: function (id, index) {
                //原理同“融资阶段”
                let vm = this;
                if (index === 0) {
                    vm.fieldList.forEach(function (x) {
                        x.selected = false;
                    });
                    vm.fieldList[0].selected = true;
                }
                else if (index >= 1 && index <= 8) {
                    vm.fieldList.forEach(function (y) {
                        if (y.id === id) {
                            y.selected = !y.selected;
                            vm.fieldList[0].selected = false;
                        }
                    });
                    vm.fieldList[0].selected = vm.fieldList.every(function (item) {
                        return item.selected === false;
                    })
                }

            },

            //搜索
            companySearch: function () {
                let vm = this;
                //清空找职位页面传过来的公司名
                sessionStorage.removeItem('companyNamess');

                //融资规模
                vm.companySize = [];
                //行业领域
                vm.companyTrade = [];
                vm.companyName = String(vm.companyName);
                vm.financingList.forEach(function (x) {//将选中的“融资规模”放进数组用来请求
                    if (x.selected === true && x.id !== undefined) {
                        vm.companySize.push(String(x.id));
                    }
                });
                vm.fieldList.forEach(function (x) {//将选中的“行业领域”放进数组用来请求
                    if (x.selected === true && x.id !== undefined) {
                        vm.companyTrade.push(String(x.id));
                    }
                });
                vm.companySize = vm.companySize.join(",");//这不能写在forEach里面
                vm.companyTrade = vm.companyTrade.join(",");
                //存搜索的值，实现刷新保存
              sessionStorage.setItem("compArea2",JSON.stringify(vm.companyArea));
              sessionStorage.setItem("companyName2", JSON.stringify(vm.companyName));
                sessionStorage.setItem("companySize2", JSON.stringify(vm.companySize));
                sessionStorage.setItem("companyTrade2", JSON.stringify(vm.companyTrade));
                //存搜索选中的值，实现刷新渲染原来的值
                sessionStorage.setItem("financingList2", JSON.stringify(vm.financingList));
                sessionStorage.setItem("fieldList2", JSON.stringify(vm.fieldList));

                //发送请求
                vm.getCompanyList(vm.size, vm.currentPage, vm.companyArea, vm.companySize, vm.orderType, vm.companyTrade, vm.companyName);

            },
            //清除
            clear: function () {
                let vm = this;
                vm.companyName = ''
                //公司地点恢复默认
              vm.value = ''
              vm.companyArea = "";
                //融资阶段恢复默认
                vm.financingList.forEach(function (x) {
                    x.selected = false;
                });vu
                vm.financingList[0].selected = true;
                //行业领域恢复默认
                vm.fieldList.forEach(function (x) {
                    x.selected = false;
                });
                vm.fieldList[0].selected = true;

                // //重置“未找到”页面，让其消失
                // vm.searchResult= false;
                //清除所有缓存
              sessionStorage.removeItem('companySize2');
              sessionStorage.removeItem('companyTrade2');
              sessionStorage.removeItem('financingList2');
              sessionStorage.removeItem('fieldList2');
              sessionStorage.removeItem('companyName2');
              sessionStorage.removeItem('companyNamess');
              sessionStorage.removeItem('compArea2');
              vm.getCompanyList();
            },

            //以下是公司内容点击跳转
            details(id, name) {
                this.$router.push({path: "/findElites/companyDetail", query: {companyId: id, companyName: name}});
            },
            //分页点击
            handleCurrentChange:function(){
                let vm = this;
                vm.getCompanyList(vm.size, vm.currentPage, vm.companyArea, vm.companySize, vm.orderType, vm.companyTrade, vm.companyName);
                console.log(this.currentPage);
            }
        },

        mounted() {
            let vm = this;
            vm.companyArea = JSON.parse(sessionStorage.getItem("compArea2"))
            vm.getCompanyList(vm.size, vm.currentPage, vm.companyArea, vm.companySize, vm.orderType, vm.companyTrade, vm.companyName);
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/css/companySearch";
</style>