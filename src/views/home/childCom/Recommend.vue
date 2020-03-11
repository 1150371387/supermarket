<!-- 推荐列表 -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item">

      <img :src="item.image" :alt="item.title">
      <div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      recommends:{
        type:Array

      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    background-color: aliceblue;
  }
  .recommend-item{
    flex:1;
    text-align: center;
    margin-bottom: 10px;
  }
  .recommend-item img{
    width: 64px;
    border-radius: 32px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
</style>
