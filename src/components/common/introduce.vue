<template>
    <div class="wrap">
      <h4>介绍</h4>
      <p class="mt">这是一个学习 element-ui 源码的vue.js项目，并不是重复造轮子，由于本人在业务开发中大量使用 element-ui，故而对其整体的架构及其组件的实现方式有了丰富的兴趣，想要一探究竟，把自己对 element-ui 每个组件的实现方式记录下来，这个项目正是为此而生。</p>
      <p class="mt">这个项目会按照 element-ui 官方提供的组件顺序依次进行源码解读，由于本人能力有限，并不能非常详细完整的分析，但是我会尽我所能讲述明白。</p>
      <p class="mt"></p>
      <div>
        <miniElButton
          type="primary"
          round
          @click="handleClick"
        >开始</miniElButton>
      </div>
    </div>
</template>

<script>
export default {
  name: 'introduce',
  methods: {
    handleClick () {
      this.$router.push('/components')
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/common/index";

.wrap{
  padding: @baseGap;
  color: #666;
  line-height: 22px;
  div{
    margin-top: 28px;
    text-align: center;
  }
}
h4,.mt{
  margin-bottom: @baseGap;
}
</style>
