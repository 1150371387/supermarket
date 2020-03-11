<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">

      <el-tab-pane :label="item.label" :name="item.name" v-for="item in menu"></el-tab-pane>
     <!-- <el-tab-pane label="流行" name="pop" v-for=""></el-tab-pane>
      <el-tab-pane label="新款" name="new"></el-tab-pane>
      <el-tab-pane label="精选" name="sell"></el-tab-pane> -->
      
    </el-tabs>
    <slot></slot>
  </div>
</template>
<script>
  import {Tabs,TabPane} from 'element-ui'
  export default {
    data() {
      return {
        activeName: 'second',
        menu:[
          {
            name:"pop",
            label:"流行"
          },
          {
            name:"new",
            label:"新款"
          },
          {
            name:"sell",
            label:"精选"
          }
        ]
      };
    },
    methods: {
      handleClick(tab) {
        console.log(tab.name)
        this.$emit("itemClick",tab.name)
      }
    },
    components:{
      'el-tabs':Tabs,
      'el-tab-pane':TabPane
    },
    props:{
    },
    created(){

    }
  };
</script>

<style>
  .tabs{
    display: flex;
    width: 100%;
  }

  .tabs-item{
    flex: 1;
  }
</style>
