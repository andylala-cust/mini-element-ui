<template>
  <div>
    <div>
      <miniElLink>默认链接</miniElLink>
      <miniElLink
        type="primary"
      >主要链接</miniElLink>
      <miniElLink
        type="success"
      >成功链接</miniElLink>
      <miniElLink
        type="warning"
      >警告链接</miniElLink>
      <miniElLink
        type="danger"
      >危险链接</miniElLink>
      <miniElLink
        type="info"
      >信息链接</miniElLink>
    </div>
    <div>
      <miniElLink disabled>默认链接</miniElLink>
      <miniElLink
        type="primary"
        disabled
      >主要链接</miniElLink>
      <miniElLink
        type="success"
        disabled
      >成功链接</miniElLink>
      <miniElLink
        type="warning"
        disabled
      >警告链接</miniElLink>
      <miniElLink
        type="danger"
        disabled
      >危险链接</miniElLink>
      <miniElLink
        type="info"
        disabled
      >信息链接</miniElLink>
    </div>
    <div>
      <miniElLink :underline="false">无下划线</miniElLink>
      <miniElLink underline>有下划线</miniElLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'linkPage'
}
</script>

<style scoped lang="less">
  div{
    margin-bottom: 20px;
  }
</style>
