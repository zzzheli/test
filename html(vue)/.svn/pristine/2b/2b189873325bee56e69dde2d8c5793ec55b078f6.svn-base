<template>
  <div class="header">
    <nav class="head container navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <button type="button" class="header-tog navbar-toggle" data-toggle="collapse"
                data-target="#navbar-collapse">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="header-ctr">
          <router-link :to="{name: 'index'}">
            <img class="h-img pointer" src="../assets/img/crt-logo.png"/>
          </router-link>
          <a class="h-address">
            <router-link :to="{name: 'index'}">
              <img src="../assets/img/ads-icon1.png">
            </router-link>
            <span class="h-address-text">全国站</span>
          </a>
        </div>
      </div>
      <div class="h-collapse collapse navbar-collapse" id="navbar-collapse">
        <ul class="header-nav nav navbar-nav">
          <li class="bar-list">
            <router-link :to="{name: 'index'}" class="bar" exact>
              <span class="bar-text">首页</span>
              <div class="bar-line"></div>
            </router-link>
          </li>
          <li class="bar-list">
            <router-link :to="{name: 'findJob'}" class="bar">
              <span class="bar-text">找职位</span>
              <div class="bar-line"></div>
            </router-link>
          </li>
          <li class="bar-list">
            <router-link :to="{name: 'findElites'}" class="bar">
              <span class="bar-text">找精英</span>
              <div class="bar-line"></div>
            </router-link>
          </li>
          <li class="bar-list">
            <router-link :to="{name: 'about', query: {on: 0}}" class="bar">
              <span class="bar-text">关于我们</span>
              <div class="bar-line"></div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="h-border"></div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/myHeader";
</style>
