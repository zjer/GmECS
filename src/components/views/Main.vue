<template>
  <div class="main" id="main">
    <el-row>
      <el-col :span="4">
        <leftNav></leftNav>
      </el-col>
      <el-col :span="20"><div class="grid-content bg-purple-light">2</div></el-col>
    </el-row>
  </div>
</template>

<script>
  import leftNav from '@/components/common/LeftNav'
  export default {
    name: "Home",
    components: {
      leftNav
    },
    mounted: function () {
      let mainHeight = document.body.clientHeight - 60;
      console.log(mainHeight);
      document.getElementById('main').style.height = mainHeight + 'px';
      document.getElementById('leftNav').style.height = mainHeight + 'px';
    }
  }
</script>

<style scoped>
  .el-row {
    height: 100%;
  }
</style>
