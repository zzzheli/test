// 薪资水平
let salary = value => {
  salary = {
    0: '8K以下',
    1: '8-10K',
    2: '10-15K',
    3: '15-20K',
    4: '20K以上'
  }
  return salary[value]
}
// 学历
let edu = value => {
  edu = {
    0: '高中',
    1: '大专',
    2: '本科',
    3: '硕士',
    4: '博士及以上'
  }
  return edu[value]
}
// 经验
let exp = value => {
  exp = {
    0: '无',
    1: '应届',
    2: '0-1年',
    3: '1-2年',
    4: '3-5年',
    5: '6-9年',
    6: '10年以上'
  }
  return exp[value]
}
// 公司行业过滤
let trade = value => {
  trade = {
    0: '移动互联网',
    1: '电子商务',
    2: '企业服务',
    3: 'O2O',
    4: '教育',
    5: '金融',
    6: '游戏'
  }
  return trade[Number(value)]
}
// 公司规模过滤
let size = value => {
  size = {
    0: '天使轮',
    1: 'A轮',
    2: 'B轮',
    3: 'C轮',
    4: 'C轮以上',
    5: '上市公司',
    6: '无需融资'
  }
  return size[value]
}
// 时间戳
let time = value => {
  let d = new Date(value)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
  let hour = d.getHours()
  let minutes = d.getMinutes()
  let seconds = d.getSeconds()
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
}
// 公司人数
let peo = value => {
  if (value <= 50) {
    value = '30-50'
  } else if (value < 50 || value <= 100) {
    value = '50-100'
  } else if (value < 100 || value <= 200) {
    value = '100-200'
  } else if (value < 200 || value <= 500) {
    value = '200-500'
  } else if (value < 500 || value <= 1000) {
    value = '500-1000'
  } else if (value > 1000) {
    value = '1000以上'
  }
  return value
}
// 地区
let area = value => {
  area = {
    '11':  '北京',
    '12':  '天津',
    '13':  '河北',
    '14':  '山西',
    '15':  '内蒙古',
    '21':  '辽宁',
    '22':  '吉林',
    '23':  '黑龙江',
    '31':  '上海',
    '32':  '江苏',
    '33':  '浙江',
    '34':  '安徽',
    '35':  '福建',
    '36':  '江西',
    '37':  '山东',
    '41':  '河南',
    '42':  '湖北',
    '43':  '湖南',
    '44':  '广东',
    '45':  '广西',
    '46':  '海南',
    '50':  '重庆',
    '51':  '四川',
    '52':  '贵州',
    '53':  '云南',
    '54':  '西藏',
    '61':  '陕西',
    '62':  '甘肃',
    '63':  '青海',
    '64':  '宁夏',
    '65':  '新疆',
    '70':  '港澳台'
  }
  return area[value]
}
export { salary, trade, size, edu, exp, time, peo, area }
