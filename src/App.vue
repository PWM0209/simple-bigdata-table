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
        hasIndex: true,
        height: 500,
        headerCellStyle: { height: '30px', padding:0 },
        cellStyle: { padding:0 },
        rowStyle: { padding:0, height: '18px' },
        columns: [
          { label: 'labelName', prop: 'propName', align: 'center', 'header-align': 'center', 'show-overflow-tooltip': true },
          { label: 'labelName', prop: 'propName', align: 'center', 'header-align': 'center', 'show-overflow-tooltip': true },
          { label: 'labelName', prop: 'propName', align: 'center', 'header-align': 'center', 'show-overflow-tooltip': true },
          { label: 'labelName', prop: 'propName', align: 'center', 'header-align': 'center', 'show-overflow-tooltip': true }
        ],
        tableRowClick(data, row, event) {
          console.log(data, row, event)
        }
      },
      dlist: []
    }
  },
  created() {
    for (let i = 0; i < 190; i++) {
      this.dlist.push({ propName: 'TEST_VALUE' + i})
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
