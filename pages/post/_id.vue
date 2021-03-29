<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link  to="/">
                <i class="el-icon-back"></i>
                </nuxt-link>

            </div>
            <div class="post-info">
                <small>
            <i class="el-icon-time"></i>
            {{new Date().toLocaleString()}}
            
            </small>
            <small>
                <i class="el-icon-view"></i>
                42
            </small>
            </div>
            <div class="post-image">
                <img 
                

                src="https://avatars.mds.yandex.net/get-zen_doc/3630671/pub_5f76cab7109e8f703ccd76d9_5f76cadf0d5f8951c9522d0a/scale_1200" 
                alt="image-post"
                >
            </div>
        </header>
        <main class='post-content'>
            <p>Lorem ipsum dolor sit 
                amet consectetur, adipisicing elit. 
                Similique totam quisquam eveniet odit a 
                error repellat est labore. Maxime, sit.</p>
                <p>Lorem ipsum dolor sit 
                amet consectetur, adipisicing elit. 
                Similique totam quisquam eveniet odit a 
                error repellat est labore. Maxime, sit.</p>
                <p>Lorem ipsum dolor sit 
                amet consectetur, adipisicing elit. 
                Similique totam quisquam eveniet odit a 
                error repellat est labore. Maxime, sit.</p>
        </main>

        <footer>
         <app-comment-form 
         @created = "createCommentHandler"
         v-if="canAdComment"
         />

            <div class="comments" v-if="true">
                <app-Comment 
                v-for="comment in 4"
                :key='comment'
                :comment="comment"
                
                />

                

            </div>
            <div class="text-center" v-else>Комментариев нет</div>
        </footer>


    </article>
</template>

<script>
import AppComment from '@/components/main/Coment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
    validate({params}){
      return  Boolean( params.id)
    },
    data() {
        return{
            canAdComment: true,
        }
    },
    components:{
        AppComment,
        AppCommentForm


    },
    methods:{
        createCommentHandler(){
            this.canAdComment = false
            
        }
    }
}
</script>
<style lang="scss" scoped>
.post{
    max-width: 600px;
    margin: 0 auto;
   


}

.post-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
}
.post-header{
    margin: 1.5rem;
}
.post-content{
    margin-bottom: 2rem;
}
.post-image img{
    width: 100%;
    height: auto;

}

</style>