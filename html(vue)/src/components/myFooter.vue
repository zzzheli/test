<template>
  <div class="footer">
    <div class="container">
      <div class="foot row">
        <div class="about col-md-4 col-xs-12">
          <router-link :to="{name: 'about', query: {on: 0}}" class="aboutus pointer">关于我们</router-link>
          <span class="about-text">萝卜多-知根知底的社群招聘</span>
        </div>
        <div class="contact col-md-5 col-xs-12">
          <router-link :to="{name: 'about', query: {on: 1}}" class="contactus pointer">联系我们</router-link>
          <div class="phone">
            <img src="../assets/img/phone-icon.png"/>
            <span class="contact-text">&nbsp;&nbsp;联系电话&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="contact-text">(010)59478634</span>
          </div>
          <div class="email">
            <img src="../assets/img/email-icon.png"/>
            <span class="contact-text">&nbsp;&nbsp;邮箱支持&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="contact-text">kefu@ptteng.com</span>
          </div>
          <div class="address">
            <img src="../assets/img/ads-icon2.png"/>
            <span class="contact-text">&nbsp;&nbsp;地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="contact-text">北京市亦庄经济技术开发区科创十二街鸿坤云时代B2座B303室</span>
          </div>
        </div>
        <div class="qr-code col-md-3 col-xs-12">
          <img class="code-pic" src="../assets/img/qrcode.jpg"/>
          <span class="wechat">&nbsp;微信号：pttent-fuhuaqi</span>
        </div>
      </div>
    </div>
    <div class="cpr col-xs-12">
      <span>Copyright © 2015 北京葡萄藤信息技术有限公司 All Rights Reserved | 京ICP备15035574号-3</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFooter'
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/myFooter";
</style>
