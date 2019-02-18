<template>
  <div class="areaSelect">
    <h1 style="display: none">{{theArea}}</h1>
    <el-select
      v-model="value"
      filterable
      placeholder="请选择"
      style="height: 30px"
      @change="changeArea"
    >
      <el-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span class="label-text">{{ item.label }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "selectArea",
    props: ['theArea'],
    data () {
      return {
        cities: [{
          label: '不限', value: '',
        }, {
          label: '北京', value: '11',
        }, {
          label: '天津', value: '12',
        }, {
          label: '河北', value: '13',
        }, {
          label: '山西', value: '14',
        }, {
          label: '内蒙古', value: '15',
        }, {
          label: '辽宁', value: '21',
        }, {
          label: '吉林', value: '22',
        }, {
          label: '黑龙江', value: '23',
        }, {
          label: '上海', value: '31',
        }, {
          label: '江苏', value: '32',
        }, {
          label: '浙江', value: '33',
        }, {
          label: '安徽', value: '34',
        }, {
          label: '福建', value: '35',
        }, {
          label: '江西', value: '36',
        }, {
          label: '山东', value: '37',
        }, {
          label: '河南', value: '41',
        }, {
          label: '湖北', value: '42',
        }, {
          label: '湖南', value: '43',
        }, {
          label: '广东', value: '44',
        }, {
          label: '广西', value: '45',
        }, {
          label: '海南', value: '46',
        }, {
          label: '重庆', value: '50',
        }, {
          label: '四川', value: '51',
        }, {
          label: '贵州', value: '52',
        }, {
          label: '云南', value: '53',
        }, {
          label: '西藏', value: '54',
        }, {
          label: '陕西', value: '61',
        }, {
          label: '甘肃', value: '62',
        }, {
          label: '青海', value: '63',
        }, {
          label: '宁夏', value: '64',
        }, {
          label: '新疆', value: '65',
        }, {
          label: '港澳台', value: '70',
        }],
        value: this.theArea,
      }
    },
    updated () {
      this.value = this.theArea
    },
    watch: {
      value: function (val) {
        this.$emit('update:the-area', val)
      }
    },
    methods: {
      // 地区选择
      changeArea (val) {
        this.value = val
      }
    }
  }
</script>

<style scoped>

</style>