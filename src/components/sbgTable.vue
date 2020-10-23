<template>
  <div class="sbgt-panel">    
    <div class="bdtable-box" style="height:100%;overflow: auto;" ref="scrollDom" @scroll="scroll" @wheel.prevent="scrollBarWheel">
      <div :style="{height:(data.length + 1) * lineHeight + 36 + 'px'}"></div>
      <el-table :data="splitData" border :style="{position:'absolute',width: data.length < 15 ? '100%' : 'calc(100% - 16px)',top:'0px',left:'0px'}" height="100%" id="elTable"
      :row-style="{height: this.lineHeight + 'px',padding:0}"
      :cell-style="{padding:0}"
      :header-cell-style="{height: '18px',padding:0}"
      @row-click="tableRowClick">
      <el-table-column
        type="index">
      </el-table-column>
        <el-table-column prop="labelName" label="TEST1" align="center" header-align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="labelName" label="TEST2" align="center" header-align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="labelName" label="TEST3" align="center" header-align="center" :show-overflow-tooltip="true"></el-table-column>
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
      lineHeight: 25,
      startIndex: 0
    }
  },
  created() {
    if (this.option.lineHeight) {
      this.lineHeight = this.option.lineHeight
      console.log(this.data)
    }
  },
  computed: {    
    limitCount() {
      let height = 400
      return Math.floor((height - 36) / this.lineHeight)
    },
    splitData() {
      console.log(this.data.slice(this.startIndex, this.startIndex + this.limitCount))
      return this.data.slice(this.startIndex, this.startIndex + this.limitCount)
    }
  },
  methods: {
    scroll() {
      // 根据滚动的距离，估算出这个滚动位置对应的数组序列，例如滚动100px，每条40px，对应第3条
      // let scrollTop = this.$refs.scrollDom.scrollTop
      let scrollTop = this.$refs.scrollDom.scrollTop
      this.startIndex = Math.ceil(scrollTop / this.lineHeight)
      console.log(this.startIndex, this.splitData)
    },
    scrollBarWheel(e) {
      let wheelSpace = -e.wheelDelta || e.deltaY
      this.$el.querySelector('.bdtable-box').scrollBy(0, wheelSpace)
    },
    tableRowClick() {
      console.log('tableRowClick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sbgt-panel {
  overflow: hidden;
  position:relative;
  height: 400px;
}
</style>
