<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goods-item="item">
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    components:{
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default :[]
      }
    }
  }
</script>

<style>
  .goods-list{
    /* 设置子元素一行显示2个*/
    display: flex;
    /* 设置包裹，默认不包裹全部显示在一行*/
    flex-wrap: wrap;
    /* 均等分*/
    justify-content: space-around;
  }
</style>
