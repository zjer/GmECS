<template>
  <div class="header">
    <el-row>
      <el-col :span="4">{{ sysName }}</el-col>
      <el-col :span="15"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :span="5">
        <el-dropdown>
  <span class="el-dropdown-link">
    {{ userName }}<img src="../../assets/avatar.jpg" alt="">
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        sysName: 'GmECS',
        userName: 'admin'
      }
    },
    methods: {
      logOut() {
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          this.$router.push({ path: '/login' });
        }).catch(() => {});
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    height: 60px;
    line-height: 60px;
    background-color: #20a0ff;
    font-size: 14px;
    color: #ffffff;
    .el-dropdown-link {
      cursor: pointer;
      color: #ffffff;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 10px 0px 10px 10px;
        float: right;
      }
    }
  }
</style>
