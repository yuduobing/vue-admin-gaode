<template>
    <!--   (>‿◠)✌ ☜(ˆ▽ˆ)
    * User: ydb/1510557673@qq.com
    * Date: 2020/7/13 10:41
    * Content:  登陆页面
   -->
    <div>  {{a}}
<button  @click="tiao">登陆</button>
    </div>
</template>

<script>
    // import  {login2}  from "@/api/api.js"
    export default {
        name: "index",
        data(){
            return{
                   a:'高得软件'
            }
        },
        methods:{
            //登陆用
            tiao(){

            }
            // login(){
            //     login2(this.form).then( response =>{
            //
            //        if(response.data.statues===1){
            //
            //
            //        }
            //        else (){
            //
            //         }
            //     }).catch(){
            //         //messs
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>