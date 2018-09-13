<template>
  <div class="ww-header">
    <mu-appbar :title="title">
      <mu-button icon slot="left" @click="toggle(true)">
        <mu-icon value="menu"></mu-icon>

      </mu-button>
       <mu-button icon slot="right">
         <mu-icon size="36" value=":mudocs-icon-action-home" color="amber"></mu-icon>
       </mu-button>
    </mu-appbar>
    <ww-sidebar :open="open" @toggle="toggle()"></ww-sidebar>
  </div>
</template>

<script>
import wwSidebar from '../sidebar'
export default {
  name: 'Header',
  data() {
    return {
      open: false,
      title: '案例'
    }
  },
  components: {
    wwSidebar
  },
  methods: {
    toggle(flag) {
      this.open = !this.open
    }
  }
}
</script>

<style scoped lang="scss">
.ww-header {
  .mu-appbar {
    text-align: center;
    position: fixed;
    width: 100%;
    background: #2196f3;
    color: #fff;
  }
  .mu-badge-circle {
    border-radius: 12px;
    padding: 0 9px;
    width: 100%;
  }
}
</style>
