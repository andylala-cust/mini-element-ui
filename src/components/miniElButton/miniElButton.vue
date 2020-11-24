<template>
    <button
      :class="[
        'mini-el-button',
        buttonSize ? buttonSize : '',
        buttonType,
        {'is-round': round},
        {'is-circle': circle}
      ]"
      @click="handleButtonClick"
    >
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
</template>

<script>
export default {
  name: 'miniElButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonType () {
      return `mini-el-button-${this.type}`
    },
    buttonSize () {
      return this.size ? `mini-el-button-${this.size}` : ''
    }
  },
  methods: {
    handleButtonClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style scoped lang="less">
</style>
