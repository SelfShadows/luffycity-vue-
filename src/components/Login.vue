<template>
  <div>
      <p>
          <input type="text" placeholder="请输入用户名" v-model="username">
      </p>
      <p>
          <input type="password" placeholder="请输入密码" v-model="pwd">
      </p>
      <input @click="authLogin" type="button" value="登录">
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
        username: "",
        pwd: '',
    }
  },
  methods: {
    authLogin() {
      var that = this;
      this.$axios
        .request({
          url: "http://127.0.0.1:9527/api/v1/authLogin/",
          method: "POST",
          data: {
            username: this.username,
            pwd: this.pwd
          },
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function(arg) {
          if(arg.data.code ===1000){

            that.$store.commit('saveToken',{token:arg.data.token, username: that.username})
            var url = that.$route.query.backUrl;  // 获取返回的路径
            console.log(url)
            if(url){
                that.$router.push({path: url})
            }else{
                that.$router.push({path: '/index'})
            }
          }else{
              console.log("用户名或密码错误")
          }
        })
        .catch(function() {
          console.log("数据获取失败");
        });
    }
  }
};
</script>


<style scoped>
</style>