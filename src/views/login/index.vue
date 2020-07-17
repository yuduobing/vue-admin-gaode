<template>
    <!--   (>‿◠)✌ ☜(ˆ▽ˆ)
    * User: ydb/1510557673@qq.com
    * Date: 2020/7/1310:41
    * Content:
   -->
    <div>  {{a}}
<button  @click="tiao">登陆</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                   a:'高得软件'
            }
        },
        methods:{
            tiao(){
                this.$router.push({
                    path: "/home"
                });
            }
        }
    }
</script>

<style scoped>

</style>