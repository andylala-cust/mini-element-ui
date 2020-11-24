<template>
    <div class="wrapper">
      <miniEleHeader></miniEleHeader>
      <leftTree></leftTree>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import leftTree from '@/components/common/leftTree'

export default {
  name: 'index',
  components: {
    leftTree
  }
}
</script>

<style scoped lang="less">
  .wrapper{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 80px;
    width: 1140px;
    margin: auto;
    padding: 50px 0;
    .content{
      position: absolute;
      left: 240px;
      right: 0;
      top: 50px;
      bottom: 0;
    }
  }
</style>
