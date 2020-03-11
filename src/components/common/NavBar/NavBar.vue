<template>
  <div class="nav-bar">
    <div class="left">
      <div><slot name="left"></slot></div>
    </div>
    <div class="center">
      <slot name="center"></slot>
     </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .nav-bar{
    height: 44px;
    display: flex;
    line-height: 44px;
    text-align: center;
  }
  .left,.right{
    width: 60px;
    background-color: #42B983;
  }
  .center{
    flex: 1;
    background-color: #ff00ff;
  }
</style>
