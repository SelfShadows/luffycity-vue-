<template>

    <div class="Vmain">
        <h3>微科技</h3>
        <p>{{msg}}</p>
    </div>
</template>


<script>
export default {
    name:"Vmain",
    data(){
        return {
            msg: null
        }

    },
    methods:{
        initMicro(){
            var that = this
            this.$axios.request({
                url: "http://127.0.0.1:9527/api/v1/micro/",
                method:"GET",
                params:{
                    token:that.$store.state.token
                }
            }).then(function (arg){
                that.msg = arg.data
                console.log(that.msg)

            })
        }
    },
    mounted(){
        this.initMicro()
    }
}
</script>


<style scoped>

</style>