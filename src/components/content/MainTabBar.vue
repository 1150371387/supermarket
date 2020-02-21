<template>
  <tab-bar>
    <tab-bar-item :path="'/home'" :activeColor="'#008000'">
      <img src="./assets/logo.png" alt="首页" slot="item-icon">
      <div slot="item-title">首页</div>
    </tab-bar-item>
    <tab-bar-item :path="'/category'" :activeColor="'#ffaaff'">
      <img src="./assets/logo.png" alt="分类" slot="item-icon">
      <div slot="item-title">分类</div>
    </tab-bar-item>
    <tab-bar-item :path="'/cart'" :activeColor="'#ffff7f'">
      <img src="./assets/logo.png" alt="购物车" slot="item-icon">
      <div slot="item-title">购物车</div>
    </tab-bar-item>
    <tab-bar-item :path="'/profile'">
      <img src="./assets/images/tabbar/my.png" alt="我的" slot="item-icon">
      <div slot="item-title">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from './components/TabBar'
  import TabBarItem from './components/TabBarItem'
  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
