<template>
    <div>
      <miniEleHeader></miniEleHeader>
      <div class="content">
        <div class="container">
          <introduce></introduce>
        </div>
      </div>
    </div>
</template>

<script>
import introduce from '@/components/common/introduce'

export default {
  name: 'index',
  components: {
    introduce
  }
}
</script>

<style scoped lang="less">
  .content{
    position: fixed;
    left: 0;
    right: 0;
    top: 80px;
    bottom: 0;
    .container{
      width: 1140px;
      margin: auto;
    }
  }
</style>
