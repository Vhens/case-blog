<template>
  <div class="md-block" @mouseenter="tip = true" @mouseleave="tip = false">
    <div class="md-block-header">
      {{title}}
    </div>
     <transition name="fade">
      <slot v-if="show"></slot>
     </transition>
    <div class="md-block-footer">
      <div @click="toggle">
          <mu-icon :value="icon" class="icon"></mu-icon>
          <span v-if="tip">{{text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: [String, Number],
        default: '标题'
      }
    },
    data() {
      return {
        show: true,
        tip: false,
      }
    },
    computed: {
      icon() {
        return this.show ? 'arrow_drop_up' : 'arrow_drop_down'
      },
      text() {
        return this.show ? '隐藏代码' : '显示代码'
      }
    },
    methods: {
      toggle() {
        this.show = !this.show
      }
    }
  }
</script>

<style scoped lang="scss">
.md-block {
  border: 1px solid #ebebeb;
  border-radius: 6px;
  box-shadow: 0  2px 2px #ebebeb;
  .md-block-header,
  .md-block-footer{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: #f7f7f7
  }
  .md-block-header {
    border-bottom: 1px solid #ebebeb;
    padding: 0 20px;
  }
  .md-block-footer{
    &:hover{
      color: #2196f3
    }
    .icon {
      vertical-align: middle;
    }
  }
  section{
    background-color: #282c34
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
