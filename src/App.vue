<template>
  <div id="app">
    <ww-header></ww-header>
    <router-view class="markdown"/>
  </div>
</template>

<script>
import wwHeader from './containers/header'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    wwHeader
  }
}
</script>

<style>
@import 'highlight.js/styles/monokai-sublime.css';
.markdown{
  padding: 74px 20px;
}
.markdown p,
.markdown pre {
  padding: 20px;
  font-size: 16px;
  background-color: #282c34;
  border-radius: 6px;
  line-height: 1.5em;
  overflow: auto;
}
.markdown blockquote {
  font-size: 90%;
  color: #0d1a26;
  border-left: 4px solid #ebedf0;
  padding-left: 0.8em;
  margin: 1em 0;
}
.markdown blockquote p {
  margin: 0;
}
.markdown hr {
  height: 1px;
  border: 0;
  background: #ebedf0;
  clear: both;
}
.markdown code {
  font-family: Microsoft YaHei;
  width: 100%;
  margin: 0 1px;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-size: 0.9em;
  color: #fff;
}
</style>
