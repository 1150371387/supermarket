<!-- 商品组件开发 -->
<template>
  <div class="commodity">
    <img :src="item.show.img" alt="" v-for="item in list">
  </div>
</template>

<script>
  export default{
    props:{
      list:{

      }
    }
  }
</script>

<style>
  .commodity{
    margin: auto;
    width: 45%;
  }
  .commodity img{
    
  }
</style>
