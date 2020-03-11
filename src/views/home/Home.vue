<template>
  <div>
    <nav-bar>
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </nav-bar>

    <my-carousel :banners="banner"></my-carousel>
    <!-- 推荐列表-->
    <Recommend :recommends="recommend"></Recommend>
    <!-- 选项卡-->
    <my-tabs @itemClick="showGoods">
      <goods-list :goods="currentGoods"></goods-list>
      <!-- <Commodity :list="currentGoods"></Commodity> -->
    </my-tabs>

  </div>

</template>

<script>
  // 项目数据
  // import {multidata,recommend} from './childCom/data.js'

  import NavBar from 'components/common/NavBar/NavBar.vue'
  import Commodity from 'components/content/Commodity.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'

  import MyCarousel from './childCom/MyCarousel.vue'
  import MyTabs from './childCom/MyTabs.vue'
  import Recommend from './childCom/Recommend.vue'
  /* 发送网络请求*/
  // import {getHomeMutidata} from 'network/home.js'
  import axios from 'axios'
  export default {
    methods:{
      getGoods(type){
        // 请求新数据
        console.log(this.goods[type].page)
        const page = this.goods[type].page
        axios({
          url:this.reUrl,
          params:{type,page}
        }).then(res => {
          // console.log(res.data.data.list)
          this.goods[type].list.push(... res.data.data.list)
          this.goods[type].page += 1
        })
        console.log(this.goods[type].list)
      },
      showGoods(name){
        // 展示数据
        console.log(name)
        switch (name) {
          case 'pop':
            this.currentGoods = this.goods.pop.list
            break;
          case 'new':
           this.currentGoods = this.goods.new.list
            break;
          case 'sell':
           this.currentGoods = this.goods.sell.list
           break;
        }
        console.log(this.currentGoods)
      }
    },
    components: {
      NavBar,
      Commodity,
      MyCarousel,
      MyTabs,
      Recommend,
      GoodsList
    },
    data() {
      return {
        banner: [],
        recommend:[],
        goods:{
          pop:{
            // 存放流行数据
            page:1,
            list:[]
          },
          new:{
            // 存放新款数据
            page:1,
            list:[]
          },
          sell:{
            // 存放精选数据
            page:1,
            list:[]
          }
        },
        reUrl: "http://123.207.32.32:8000/api/hy/home/data",
        currentGoods :{

        }
      }
    },
    created() {
      // 获取导航数据
      axios({
        url: 'http://123.207.32.32:8000/api/hy/home/multidata'
      }).then(res => {
        // console.log(res)
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
      this.getGoods('pop')
      this.getGoods('sell')
      this.getGoods('new')
    },

  }
</script>

<style>
</style>
