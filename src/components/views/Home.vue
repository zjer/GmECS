<template>
  <div class="main">
    <Header></Header>
    <el-row>
      <el-col :span="4" class="leftNav" id="leftNav">
        <leftNav></leftNav>
      </el-col>
      <el-col :span="20">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  import leftNav from '@/components/common/LeftNav'
  export default {
    name: "Home",
    components: {
      Header,
      leftNav
    }
  }
</script>

<style scoped lang="less">
  .main {}
</style>
