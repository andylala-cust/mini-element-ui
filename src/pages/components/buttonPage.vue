<template>
  <div class="button-demo">
    <div>
      <miniElButton>默认按钮</miniElButton>
      <miniElButton
        type="primary"
      >主要按钮</miniElButton>
      <miniElButton
        type="success"
      >成功按钮</miniElButton>
      <miniElButton
        type="info"
      >信息按钮</miniElButton>
      <miniElButton
        type="warning"
      >警告按钮</miniElButton>
      <miniElButton
        type="danger"
      >危险按钮</miniElButton>
    </div>
    <div>
      <miniElButton
        round
      >圆角按钮</miniElButton>
      <miniElButton
        type="primary"
        round
      >主要按钮</miniElButton>
      <miniElButton
        type="success"
        round
      >成功按钮</miniElButton>
      <miniElButton
        type="info"
        round
      >信息按钮</miniElButton>
      <miniElButton
        type="warning"
        round
      >警告按钮</miniElButton>
      <miniElButton
        type="danger"
        round
      >危险按钮</miniElButton>
    </div>
    <div>
      <miniElButton
        circle
      ></miniElButton>
      <miniElButton
        type="primary"
        circle
      ></miniElButton>
      <miniElButton
        type="success"
        circle
      ></miniElButton>
      <miniElButton
        type="info"
        circle
      ></miniElButton>
      <miniElButton
        type="warning"
        circle
      ></miniElButton>
      <miniElButton
        type="danger"
        circle
      ></miniElButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonPage'
}
</script>

<style scoped lang="less">
  .button-demo{
    > div{
      margin-bottom: 20px;
    }
  }
</style>
