<template>
  <div class="ww-sidebar">
     <mu-drawer :open="open" :docked="docked" @close="toggle()">
       <div class="sidebar-header">
         vhen
       </div>
       <div class="sidebar-content">
         <ww-tree :data="tree"></ww-tree>
       </div>
     </mu-drawer>
  </div>
</template>

<script>
  import wwTree from '../tree'
  import { data } from './data'
  export default {
    props: {
      open: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        docked: true,
        tree: data
      }
    },
    components: {
      wwTree
    },
    methods: {
      toggle() {
        this.$router.push('/vue1')
        this.docked = !this.open
        this.$emit('toggle')
      }
    },
  }
</script>

<style scoped lang="scss">
.ww-sidebar {
  .sidebar-header {
    display: flex;
    align-items: center;
    height: 56px;
    padding: 20px;
    border-bottom: 1px solid #e6e6e6;
  }
  .sidebar-content {
    padding: 20px;
  }
}
</style>
