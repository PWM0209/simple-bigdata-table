<template>
  <div class="sbgt-panel" :style="{'height': tableHeight + 'px'}">    
    <div class="bdtable-box" style="height:100%;overflow: auto;" ref="scrollDom" @scroll="scroll" @wheel.prevent="scrollBarWheel">
      <div :style="{height:data.length * lineHeight + headerHeight + 'px'}"></div>
      <el-table
      :data="splitData" border
      :style="{position:'absolute',width: data.length < limitCount ? '100%' : 'calc(100% - 16px)',top:'0px',left:'0px'}" height="100%"
      :row-style="rowStyle"
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
      @row-click="option.tableRowClick">
        <el-table-column type="index" v-if="option.hasIndex"></el-table-column>
        <el-table-column v-for="(col, idx) in columns" :key="'col-'+idx" :prop="col.prop" :label="col.label" :align="col.align" :header-align="col['header-align']" :show-overflow-tooltip="col['show-overflow-tooltip']"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-bigdata-table',
  props: ['data', 'option'],
  data() {
    return {
      lineHeight: 23,
      startIndex: 0,
      headerHeight: 0,
      tableHeight: 400,
      headerCellStyle: {},
      style: {},
      cellStyle: {},
      rowStyle: {},
      columns: []
    }
  },
  watch: {
    lineHeight() {
      this.$set(this.rowStyle, 'height', this.lineHeight + 'px')
    }
  },
  created() {
    if (this.option.lineHeight) {
      this.lineHeight = this.option.lineHeight
    }
    if (this.option.height) {
      this.tableHeight = this.option.height
    }
    if (Object.prototype.toString.call(this.option.columns) === '[object Array]') {
      this.columns = this.option.columns
    }
    if (Object.prototype.toString.call(this.option.headerCellStyle) === '[object Object]') {
      this.headerCellStyle = this.option.headerCellStyle
      this.headerHeight = +this.headerCellStyle.height.replace(/[^0-9]/ig, '')
    }
    if (Object.prototype.toString.call(this.option.cellStyle) === '[object Object]') {
      this.cellStyle = this.option.cellStyle
    }
    if (Object.prototype.toString.call(this.option.rowStyle) === '[object Object]') {
      this.rowStyle = this.option.rowStyle
    }
  },
  computed: {
    limitCount() {
      let height = this.tableHeight
      return Math.floor((height - 36) / this.lineHeight)
    },
    splitData() {
      return this.data.slice(this.startIndex, this.startIndex + this.limitCount)
    }
  },
  methods: {
    scroll() {
      let scrollTop = this.$refs.scrollDom.scrollTop
      this.startIndex = Math.ceil(scrollTop / this.lineHeight)
    },
    scrollBarWheel(e) {
      let wheelSpace = -e.wheelDelta || e.deltaY
      this.$el.querySelector('.bdtable-box').scrollBy(0, wheelSpace)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sbgt-panel {
  overflow: hidden;
  position:relative;
}
</style>
