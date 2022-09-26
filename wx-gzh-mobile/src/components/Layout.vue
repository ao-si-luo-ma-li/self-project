<template>
  <div class="page-body">
    <!-- 通用顶部工具栏 -->
    <nav-header></nav-header>
    <div class="layout-content m-container">
    <Row>
      <Col span="5">
        <!-- 通用树形菜单 -->
      <tree-menu></tree-menu>
      </Col>
      <Col span="19">
        <!-- 要切换的页面 -->
      <router-view></router-view>
      </Col>
    </Row>
  </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
/*左边菜单栏*/
.menu-left {
  background: #fff;
  .nav-topBar {
    border-bottom: 1px solid #eee;
    .has-next {
      position: relative;
        display: block;
        padding: 10px 15px;
      color: #ababab;
    }
  }
  .secList {
    li > a {
      padding-left: 42px;
    }
  }
}
</style>
