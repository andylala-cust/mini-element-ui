<template>
    <div class="t-wrap">
      <router-link
        v-for="(route, index) in routeList"
        :key="index"
        :to="route.value"
        exact
      >{{route.name}}</router-link>
    </div>
</template>

<script>
import { routeList } from '@/assets/constants/routeList'

export default {
  name: 'leftTree',
  data () {
    return {
      routeList
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/common/var";

.t-wrap{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  padding: 50px 0;
}
a{
  display: block;
  height: 40px;
  color: #444;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  &:hover{
    color: @color-primary;
  }
  &.router-link-active{
    color: @color-primary;
  }
}
</style>
