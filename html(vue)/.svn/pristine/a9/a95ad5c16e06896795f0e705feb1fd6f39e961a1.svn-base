// 引入封装的请求
import { getJoblist } from '@/request/api'

export default {
  install: function (Vue, options) {
    // 发布时间选项
    Vue.prototype.changeUpdate = function (index) {
      let vm = this
      vm.jobupdate[index].btn = !vm.jobupdate[index].btn
      // 遍历取出不限选项外的btn布尔值
      let arr = []
      for (let i = 1; i < vm.jobupdate.length; i++) {
        arr.push(vm.jobupdate[i].btn)
      }

      // 除不限外的选项都未选
      function check (btn) {
        return btn === false
      }

      let checkBtn = arr.every(check)
      // 选项状态变化
      // 状态1，不限外的选项都未选
      if (checkBtn === true || index === 0) {
        for (let i = 1; i < vm.jobupdate.length; i++) {
          vm.jobupdate[i].btn = false
        }
        vm.jobupdate[0].btn = true
        vm.updateModel = undefined
        vm.updateNum = undefined
        // 状态2，不限外的选项有选
      } else if (index !== 0) {
        // 判断点击选项选中或取消
        if (vm.jobupdate[index].btn === true) {
          vm.updateModel = vm.jobupdate[index].type
          switch (vm.updateModel) {
            case '24h以内' :
              vm.updateModel = new Date().getTime() - (1000 * 60 * 60 * 24)
              vm.updateNum = 0
              break
            case '三天内' :
              vm.updateModel = new Date().getTime() - (1000 * 60 * 60 * 24 * 3)
              vm.updateNum = 1
              break
            case '七天内' :
              vm.updateModel = new Date().getTime() - (1000 * 60 * 60 * 24 * 7)
              vm.updateNum = 2
              break
          }
        } else {
          vm.updateModel = undefined
          vm.updateNum = undefined
        }
        vm.jobupdate[0].btn = false
      }
      // 变为单选
      for (let i = 0; i < vm.jobupdate.length; i++) {
        if (vm.jobupdate[index].btn === true) {
          vm.jobupdate[i].btn = false
          vm.jobupdate[index].btn = true
        }
      }
    }

    // 职位类型选项
    Vue.prototype.changeType = function (index) {
      let vm = this
      // 选项开关
      vm.jobtypes[index].btn = !vm.jobtypes[index].btn
      // 遍历取出不限选项外的btn布尔值
      let arr = []
      for (let i = 1; i < vm.jobtypes.length; i++) {
        arr.push(vm.jobtypes[i].btn)
      }
      // 多选数量
      let num = 0
      for (let i = 1; i < vm.jobtypes.length; i++) {
        if (index !== 0 && vm.jobtypes[i].btn === true) {
          num++
        }
      }
      // joblevel深拷贝
      if (vm.copylevel == '') {
        vm.copylevel = JSON.parse(JSON.stringify(vm.joblevel))
      }
      vm.joblevel = vm.copylevel
      // 除不限外的选项都未选
      function check (btn) {
        return btn === false
      }
      let checkBtn = arr.every(check)
      // 选项状态变化
      // 状态1，选择不限或不限外的选项都取消
      if (checkBtn === true || index === 0) {
        for (let i = 1; i < vm.jobtypes.length; i++) {
          vm.jobtypes[i].btn = false
        }
        vm.on = false
        vm.jobtypes[0].btn = true
        vm.arrType.splice(0, vm.arrType.length)
        vm.joblevel = vm.copylevel
        vm.arrLevelIndex = []
      }
      // 状态2，不限外的选项有选
      else if (index !== 0) {
        // 判断是否展开二级菜单
        if (num === 1) {
          vm.on = true
        } else {
          vm.on = false
        }
        // 判断点击选项选中或取消
        if (vm.jobtypes[index].btn === true) {
          vm.arrType.push(index - 1)
          vm.arrLevelIndex.push(index)
          if (num === 1) {
            vm.joblevel = vm.joblevel[index].data
          } else {
            vm.copylevel.forEach(function (val, index) {
              if (index !== 0) {
                val.data[0].btn = true
                val.data.forEach(function (val2, index2) {
                  if (index2 !== 0) {
                    val2.btn = false
                  }
                })
              }
            })
            vm.joblevel = vm.copylevel
            vm.arrLevel = []
            vm.levelModel = ''
          }
        } else {
          vm.arrType.splice(vm.arrType.indexOf(index - 1), 1)
          vm.arrLevelIndex.splice(vm.arrLevelIndex.indexOf(index), 1)
          vm.joblevel = vm.joblevel[vm.arrLevelIndex[0]].data
        }
        vm.jobtypes[0].btn = false
      }
      vm.typeModel = vm.arrType.join(',')
    }

    // 找职位-多选
    Vue.prototype.judge = function (index) {
      let vm = this

      // 点击选项判断
      switch (vm.judgeNum) {
        case 0 :
          vm.judgeData = vm.comptrades
          vm.judgeArr = vm.arrTrade
          break
        case 1 :
          vm.judgeData = vm.jobedu
          vm.judgeArr = vm.arrEdu
          break
        case 2 :
          vm.judgeData = vm.jobExp
          vm.judgeArr = vm.arrExp
          break
        case 3 :
          vm.judgeData = vm.jobsalary
          vm.judgeArr = vm.arrSalary
          break
        case 4 :
          vm.judgeData = vm.joblevel
          vm.judgeArr = vm.arrLevel
          break
      }

      // 选项开关
      vm.judgeData[index].btn = !vm.judgeData[index].btn
      // 遍历取出不限选项外的btn布尔值
      let arr = []
      for (let i = 1; i < vm.judgeData.length; i++) {
        arr.push(vm.judgeData[i].btn)
      }

      // 除不限外的选项都未选
      function check (btn) {
        return btn === false
      }

      let checkBtn = arr.every(check)
      // 选项状态变化
      // 状态1，选择不限或不限外的选项都取消
      if (checkBtn === true || index === 0) {
        for (let i = 1; i < vm.judgeData.length; i++) {
          vm.judgeData[i].btn = false
        }
        vm.judgeData[0].btn = true
        vm.judgeArr.splice(0, vm.judgeArr.length)
        // 状态2，不限外的选项有选
      } else if (index !== 0) {
        // 判断点击选项选中或取消
        if (vm.judgeData[index].btn === true) {
          vm.judgeArr.push(index - 1)
        } else {
          vm.judgeArr.splice(vm.judgeArr.indexOf(index - 1), 1)
        }
        vm.judgeData[0].btn = false
      }

      // 选项赋值
      switch (vm.judgeNum) {
        case 0 :
          vm.arrTrade = vm.judgeArr
          vm.tradeModel = vm.judgeArr.join(',')
          break
        case 1 :
          vm.arrEdu = vm.judgeArr
          vm.eduModel = vm.judgeArr.join(',')
          break
        case 2 :
          vm.arrExp = vm.judgeArr
          vm.expModel = vm.judgeArr.join(',')
          break
        case 3 :
          vm.arrSalary = vm.judgeArr
          vm.salaryModel = vm.judgeArr.join(',')
          break
        case 4 :
          vm.arrLevel = vm.judgeArr
          vm.levelModel = vm.judgeArr.join(',')
          break
      }
    }

    // 搜索
    Vue.prototype.searchBtn = function () {
      let vm = this
      // 存储职位等级
      let copyLv = vm.copylevel
      let changedLv = vm.joblevel
      sessionStorage.setItem('copyLv', JSON.stringify(copyLv)) // 职位等级深拷贝
      sessionStorage.setItem('changedLv', JSON.stringify(changedLv)) // 职位等级
      // 请求数据
      vm.getjobList(vm.areaModel, vm.tradeModel, vm.eduModel, vm.expModel, vm.levelModel, vm.nameModel, vm.salaryModel, vm.typeModel, vm.orderModel, vm.updateModel, vm.nowPage, vm.nowSize)
      // 判断最新\推荐职位
      let url = ''
      if (vm.job === 1 || vm.job === 0) {
        url = '/findJob/jobList'
      } else {
        url = '/findJob/jobSearch'
      }
      // 路由传参
      this.$router.replace({
        path: url,
        query: {
          companyArea: vm.areaModel,
          companyTrade: vm.tradeModel,
          jobEducation: vm.eduModel,
          jobExperience: vm.expModel,
          jobLevel: vm.levelModel,
          jobName: vm.nameModel,
          jobSalary: vm.salaryModel,
          jobType: vm.typeModel,
          orderType: vm.orderModel,
          updateAt: vm.updateModel,
          currentPage: vm.nowPage,
          size: vm.nowSize,
          job: vm.job, // 页面判断
          updateNum: vm.updateNum, // 更新时间Number
          load: true // 刷新判断
        }
      })
    }

    // 清空
    Vue.prototype.clearBtn = function () {
      let vm = this
      // 判断最新\推荐职位
      let url = ''
      let arrAllbtn = []
      if (vm.job === 0 || vm.job === 1) {
        url = '/findJob/jobList'
        arrAllbtn = [vm.comptrades, vm.jobedu, vm.jobExp, vm.jobsalary, vm.jobtypes, vm.jobupdate]
      } else {
        url = '/findJob/jobSearch'
        arrAllbtn = [vm.comptrades, vm.jobedu, vm.jobExp, vm.jobsalary, vm.jobtypes, vm.jobupdate, vm.joblevel]
      }
      // 职位等级选项消失
      vm.on = false
      // 清除sessionStorage
      sessionStorage.removeItem('copyLv')
      sessionStorage.removeItem('changedLv')
      // 清除btn样式
      arrAllbtn.forEach(function (val) {
        val.forEach(function (val, index, arr) {
          arr[index].btn = false
        })
        val[0].btn = true
      })
      // 清除数据ID数组
      vm.arrType = []
      vm.arrLevel = []
      vm.arrTrade = []
      vm.arrEdu = []
      vm.arrExp = []
      vm.arrSalary = []
      // 清除数据ID Model
      vm.areaModel = undefined
      vm.tradeModel = undefined
      vm.eduModel = undefined
      vm.expModel = undefined
      vm.levelModel = undefined
      vm.nameModel = undefined
      vm.salaryModel = undefined
      vm.typeModel = undefined
      vm.orderModel = undefined
      vm.updateModel = undefined
      vm.nowPage = 1
      vm.nowSize = 10
      // 清空数据
      vm.getjobList(vm.areaModel, vm.tradeModel, vm.eduModel, vm.expModel, vm.levelModel, vm.nameModel, vm.salaryModel, vm.typeModel, vm.orderModel, vm.updateModel, vm.nowPage, vm.nowSize)
      // 清空路由参数
      this.$router.replace({
        path: url,
        query: {
          companyArea: vm.areaModel,
          companyTrade: vm.tradeModel,
          jobEducation: vm.eduModel,
          jobExperience: vm.expModel,
          jobLevel: vm.levelModel,
          jobName: vm.nameModel,
          jobSalary: vm.salaryModel,
          jobType: vm.typeModel,
          orderType: vm.orderModel,
          updateAt: vm.updateModel,
          currentPage: vm.nowPage,
          size: vm.nowSize
        }
      })
    }

    // 刷新\跳转获取选项状态
    Vue.prototype.getSession = function () {
      let vm = this
      // 选项下标数组
      let arrIndex = []
      if (this.$route.query.companyTrade) {
        arrIndex.push(this.$route.query.companyTrade.split(','))
      } else {
        arrIndex.push('')
      }
      if (this.$route.query.jobEducation) {
        arrIndex.push(this.$route.query.jobEducation.split(','))
      } else {
        arrIndex.push('')
      }
      if (this.$route.query.jobExperience) {
        arrIndex.push(this.$route.query.jobExperience.split(','))
      } else {
        arrIndex.push('')
      }
      if (this.$route.query.jobSalary) {
        arrIndex.push(this.$route.query.jobSalary.split(','))
      } else {
        arrIndex.push('')
      }
      if (this.$route.query.jobType) {
        arrIndex.push(this.$route.query.jobType.split(','))
      } else {
        arrIndex.push('')
      }
      if (this.$route.query.jobLevel) {
        arrIndex.push(this.$route.query.jobLevel.split(','))
      } else {
        arrIndex.push('')
      }
      if (this.$route.query.updateNum) {
        arrIndex.push(this.$route.query.updateNum)
      } else {
        arrIndex.push('')
      }
      // 找职位banner选项判断赋值
      var copyLv = null
      var changedLv = null
      if (this.$route.query.findJob) {
        copyLv = vm.joblevel
        changedLv = vm.joblevel[Number(arrIndex[4]) + 1].data
        if (Number(this.$route.query.findJob) === 1) {
          changedLv[0].btn = true
        } else {
          changedLv[0].btn = false
          changedLv[Number(arrIndex[5][0]) + 1].btn = true
        }
        sessionStorage.setItem('copyLv', JSON.stringify(copyLv)) // 职位等级拷贝
        sessionStorage.setItem('changedLv', JSON.stringify(changedLv)) // 职位等级
      }
      copyLv = JSON.parse(sessionStorage.getItem('copyLv'))
      changedLv = JSON.parse(sessionStorage.getItem('changedLv'))
      // 若获取路由参数
      if (this.$route.query.load) {
        // 获取Btn状态
        if (arrIndex[0]) {
          arrIndex[0].forEach(function (val, index) {
            arrIndex[0][index] = Number(val)
            vm.comptrades[0].btn = false
            vm.comptrades[Number(val) + 1].btn = true
          })
        }
        if (arrIndex[1]) {
          arrIndex[1].forEach(function (val, index) {
            arrIndex[1][index] = Number(val)
            vm.jobedu[0].btn = false
            vm.jobedu[Number(val) + 1].btn = true
          })
        }
        if (arrIndex[2]) {
          arrIndex[2].forEach(function (val, index) {
            arrIndex[2][index] = Number(val)
            vm.jobExp[0].btn = false
            vm.jobExp[Number(val) + 1].btn = true
          })
        }
        if (arrIndex[3]) {
          arrIndex[3].forEach(function (val, index) {
            arrIndex[3][index] = Number(val)
            vm.jobsalary[0].btn = false
            vm.jobsalary[Number(val) + 1].btn = true
          })
        }
        if (arrIndex[4]) {
          arrIndex[4].forEach(function (val, index) {
            arrIndex[4][index] = Number(val)
            vm.jobtypes[0].btn = false
            vm.jobtypes[Number(val) + 1].btn = true
          })
        }
        if (arrIndex[5]) {
          arrIndex[5].forEach(function (val, index) {
            arrIndex[5][index] = Number(val)
          })
        }
        if (arrIndex[6]) {
          arrIndex[6] = Number(arrIndex[6])
          vm.jobupdate[0].btn = false
          vm.jobupdate[arrIndex[6] + 1].btn = true
        }
        // 职位等级状态保存
        if (arrIndex[4].length === 1) {
          vm.on = true
        }
        // 职位等级赋值
        if (changedLv) {
          vm.joblevel = changedLv
        }
        // 职位等级深拷贝
        if (changedLv) {
          vm.copylevel = copyLv
        }
        // 选项数组赋值
        vm.arrTrade = arrIndex[0] || []
        vm.arrEdu = arrIndex[1] || []
        vm.arrExp = arrIndex[2] || []
        vm.arrSalary = arrIndex[3] || []
        vm.arrType = arrIndex[4] || []
        vm.arrLevel = arrIndex[5] || []
        // 请求数据赋值
        vm.areaModel = this.$route.query.companyArea
        vm.tradeModel = this.$route.query.companyTrade
        vm.eduModel = this.$route.query.jobEducation
        vm.expModel = this.$route.query.jobExperience
        vm.levelModel = this.$route.query.jobLevel
        vm.nameModel = this.$route.query.jobName
        vm.salaryModel = this.$route.query.jobSalary
        vm.typeModel = this.$route.query.jobType
        vm.orderModel = this.$route.query.orderType
        vm.updateModel = this.$route.query.updateAt
        vm.nowPage = Number(this.$route.query.currentPage) || 1
        vm.nowSize = Number(this.$route.query.size) || 10
        // 职位类型下标赋值
        if (arrIndex[4]) {
          arrIndex[4].forEach(function (val, index) {
            vm.arrLevelIndex.push(arrIndex[4][index] + 1)
          })
        }
      }
    }

    // 请求数据
    Vue.prototype.getjobList = function (companyArea, companyTrade, jobEducation, jobExperience, jobLevel, jobName, jobSalary, jobType, orderType, updateAt, currentPage, size) {
      let vm = this
      // 最新\推荐排序判断
      if (vm.job === 1) {
        vm.orderModel = 1
      } else if (vm.job === 0) {
        vm.orderModel = null
      }
      // 请求数据
      getJoblist({
        companyArea: companyArea,
        companyTrade: companyTrade,
        jobEducation: jobEducation,
        jobExperience: jobExperience,
        jobLevel: jobLevel,
        jobName: jobName,
        jobSalary: jobSalary,
        jobType: jobType,
        orderType: orderType,
        updateAt: updateAt,
        currentPage: currentPage,
        size: size
      })
        .then((res) => {
          let vm = this
          vm.jobs = res.data.data.jobList
          vm.jobsTotal = res.data.data.total
          vm.rcmd = res.data.data.rcmdJobList
          let sucess = 0
          let unfind = 1
          if (res.data.code === sucess) {
            vm.result = false
          } else if (res.data.code === unfind) {
            vm.result = true
          }
          // 切割转换所属行业
          let arr = []
          for (let i = 0; i < vm.jobs.length; i++) {
            let sp = vm.jobs[i].companyTrade
            let newsp = sp.split(',')
            arr.push(newsp)
          }
          vm.comptrade = arr
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
