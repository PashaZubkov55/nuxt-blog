<template>
<div class="admin_layout-wrap">
  <el-container :style="{height: '100%'}">
    <el-aside width="200px">
      <app-aside width="250px"/>
        </el-aside>
    <el-main>
        <nuxt />
    </el-main>
  </el-container>
</div>
</template>

<script>
import AppAside from '@/components/admin/Aside'
export default {
  components:{
      AppAside
  }
}
</script>

<style lang="scss" scoped>

.admin_layout-wrap{
   width: 100%;
   height: 100vh

}

</style>