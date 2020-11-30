<template>
  <a
    :class="[
      'mini-el-link',
      type ? `mini-el-link-${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'miniElLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style  scoped lang="less">

</style>
