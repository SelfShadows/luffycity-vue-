import Vue from "vue"
import Vuex from "vuex"
import Cookie from 'vue-cookies'
Vue.use(Vuex);

export default new Vuex.Store({
    // 组件通过 this.$store.state.username 调用
    state:{
        username: Cookie.get("username"),  // 获取Cookie值
        token: Cookie.get("token"),
    },
    mutations:{
        // 组件通过 this.$store.commit(saveToken,参数)  调用  #state 相当于self
        saveToken: function(state, userToken){
            state.username = userToken.username;
            state.token = userToken.token;
            Cookie.set("username", userToken.username, "20min")  // Cookie 持续20分钟
            Cookie.set("token", userToken.token, "20min")
        },
        clearToken: function (state){
            state.username = null,
            state.token = null,
            Cookie.remove("username")  // 删除Cookie值
            Cookie.remove("token")
        }
    }
})