<template>
  <div id="app">
    <sbgTable :data="dlist" :option="option"/>
  </div>
</template>

<script>
import sbgTable from './components/sbgTable.vue'

export default {
  name: 'App',
  components: {
    sbgTable
  },
  data() {
    return {
      option: {
        lineHeight: 25,
        column: [
          { label: 'labelName', prop: 'propName' },
          { label: 'labelName', prop: 'propName' },
          { label: 'labelName', prop: 'propName' }
        ]
      },
      dlist: []
    }
  },
  created() {
    for (let i = 0; i < 200; i++) {
      this.dlist.push({ labelName: 'TEST_LABEL_' + i, propName: 'TEST_VALUE'})
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
