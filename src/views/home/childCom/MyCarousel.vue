<template>
  <div>
     <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="item in banners" :key="item.title">
            <a :href="item.link">
              <img :src="item.image" :alt="item.title">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
  </div>

</template>

<script>

  import {Carousel,CarouselItem } from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  export default{
    components: {
      'el-carousel':Carousel,
      'el-carousel-item':CarouselItem
    },
    props: {
      banners:{

      }
    }
  }


</script>
<style>
  /* @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css"); */
  .el-carousel__item img {
    height: 200px;
  }
</style>
