<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span  class="goods-info-price">{{goodsItem.price}}</span>
      <span class="goods-info-cfav">收藏  {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      goodsItem:{
        type:Object,
        default :{}
      }
    }
  }
</script>

<style>
  .goods-item{
    width: 47%;
    background-color: #D3DCE6;
    margin-bottom: 10px;
    /* margin: auto; */
    border-radius: 8px;
  }
  .goods-item img{
    border-radius: 8px;
    width: 100%;
  }
  .goods-info{
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
  }
  .goods-info p{
    font-size: 12px;
    /* 设置文字多了省略*/
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info-price{
    font-size: 12px;
    color: red;
    margin-right: 10px;
  }
  .goods-info-cfav{
    font-size: 12px;
  }
</style>
