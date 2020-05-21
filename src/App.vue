<template>
  <div id="App">
  <router-link to="/index">首页</router-link>
  <router-link to="/course">课程</router-link>
  <router-link to="/micro">微课程</router-link>
  <router-link to="/news">深科技</router-link>
  <div v-if="this.$store.state.token">
    <h3>{{this.$store.state.username}}</h3>
    <a @click="logout">注销</a>
  </div>
  <div v-else>
    <router-link  to="/login">登录</router-link>
  </div>
  <router-view></router-view>

  </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
export default {
    name:"App",
    data(){
        return {
            
        }

    },
    components:{
    },
    created(){

    },
    mounted(){
      
    },
    methods:{
      logout(){
        this.$store.commit("clearToken")
      }
    }
}
</script>


<style scoped>

</style>