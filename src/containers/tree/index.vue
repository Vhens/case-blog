<template>
  <ul class="ww-tree">
    <li class="ww-tree-list" v-for="(item, index) of data" :key="index">
      {{item.title}}
      <ul class="ww-sub-tree">
        <li class="ww-sub-tree-list" v-for="(subItem, subIndex) of item.chidren" :class="{active: subIndex===selectIndex&&index===currentIndex}" :key="subIndex" @click="handleClick(subIndex,index)">
          {{subItem.title}}
        </li>
      </ul>
    </li>
  </ul>

</template>

<script>
export default {
  props: {
    data: {
      type: [Object,Array],
      default: []
    }
  },
  data() {
    return {
      selectIndex: null,
      currentIndex: null
    }
  },
  methods: {
    handleClick(subIndex,index) {
      this.selectIndex = subIndex
      this.currentIndex = index
    }
  },
}
</script>

<style scoped lang="scss">
.ww-tree{
  .ww-sub-tree {
    padding-left: 20px;
  }
  .ww-tree-list,.ww-sub-tree-list{
    line-height: 25px;
  }
  .active{
    color: #2196f3
  }
}
</style>
