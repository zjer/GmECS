<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden&&item.isLeftNav">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title">
                <i class="iconfont" :class="item.iconCls"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{ child.name }}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i class="iconfont" :class="item.iconCls"></i>
              <span>{{ item.children[0].name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'leftNav',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  .el-menu {
    border-color: #545c64;
    i.iconfont {
      font-size: 16px;
      color: #ffffff;
    }
    &.is-active {
      background-color: #414b50!important;
      color: #ffd04b;
      span, i.iconfont {
        color: #ffd04b;
      }
    }
    .el-menu-item {
      &.is-active {
        background-color: #414b50!important;
        color: #ffd04b;
        span, i.iconfont {
          color: #ffd04b;
        }
      }
    }
  }
</style>
