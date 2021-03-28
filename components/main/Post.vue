<template>
    <el-card 
    shadow="hover"
    :body-style="{padding: 0}" 
    class="post"
    >
    <header slot="header" class= 'post-header'>
        <h3>Post title</h3>
        <small>
            <i class="el-icon-time"></i>
            {{new Date().toLocaleString()}}
            
            
            </small>
    </header>
    <div class="post-body">
        <img 
        src="https://avatars.mds.yandex.net/get-zen_doc/3630671/pub_5f76cab7109e8f703ccd76d9_5f76cadf0d5f8951c9522d0a/scale_1200" 
        alt="post image" 
        class="post-img">

    </div>
    <footer class="post-footer">
        <el-button
        round
        @click="openPost"
        >
        открыть пост 
        </el-button>
        <span>
            <i class="el-icon-message"></i>
            12
        </span>
    </footer>
    </el-card>
</template>
<script>
export default {
    methods:{
        openPost(){
         const id = 'test-id'
          this.$router.push(`/post/${id}`)

        }
    }
    
}
</script>
<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem;
       
    }
    .post-header {
        display: flex;
        justify-content:space-between;
        align-items: center;

    }
    .post-img{
      width: 100%;
      height: auto;
    }
   

    .post-footer{
        padding: 1rem;
        display: flex;
        justify-content:space-between;
        align-items: center;

    }
</style>