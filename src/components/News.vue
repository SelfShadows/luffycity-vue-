<template>

    <div class="Vmain">
        <h3>深科技</h3>
        <div class="banner">
            <div class="bannerBig">
                <div v-for="item in article.article_big">
                    <div>{{item}}</div>
                    <img :src="item.head_img"" alt="11">
                </div>
            </div>
            <div class="bannerSmall">
            
            </div>
        </div>
        
        <div class="bannerLiu"></div>
    </div>
</template>


<script>
export default {
    name:"Vmain",
    data(){
        return {
            article: null
        }
    },
    methods:{
        getMsg(){
            var that = this
            this.$axios.request({
                url:"http://127.0.0.1:9527/api/v1/news/",
                methods:"GET",
                params:{
                    token:this.$store.state.token
                }
            }).then(function (arg){
                if (arg.data.code ===1000){
                    that.article = arg.data
                    console.log(that.article)
                    console.log(that.article.article_big)
                }else{
                    console.log("获取数据失败1");
                }
                
            }).catch(function () {
                console.log("获取数据失败2");
            })
        }
    },
    mounted(){
        this.getMsg()
    }
}
</script>


<style scoped>
    .banner{
        width: 1001px;
        height: 350px;
    }
    .bannerBig{
        width: 600px;
        height: 350px;
        border: 1px red solid;
        float: left;

    }
    .bannerSmall{
        width: 400px;
        height: 350px;
        border: 1px green solid;
        float: right;

    }
    .bannerLiu{
        width: 600px;
    }

</style>