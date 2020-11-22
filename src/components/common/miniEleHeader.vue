<template>
    <div class="wrap">
      <div class="container">
        <h1>MINI-ELEMENT-UI</h1>
      </div>
    </div>
</template>

<script>
export default {
  name: 'miniEleHeader'
}
</script>

<style scoped lang="less">
@import "../../assets/less/common/var";
@import "../../assets/less/common/index";

.wrap{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  height: 80px;
  line-height: 80px;
  .container{
    width: 1140px;
    height: 100%;
    margin: auto;
    border-bottom: 1px solid @border-color-base;
    color: @color-primary;
  }
}
</style>
