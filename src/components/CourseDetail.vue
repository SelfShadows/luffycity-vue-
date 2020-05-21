<template>
  <div class="Course">
    <div>
      <p>id : {{CourseDetailList.id}}</p>
      <p>why : {{CourseDetailList.why}}</p>
      <h2>课程推荐</h2>
      <ul v-for="i in CourseDetailList.recommend">
        <!-- <li><router-link :to="{name:'courseDetail',params:{id:i.id}}">{{i.title}}</router-link></li> -->
        <li @click="getRecomment(i.id)">{{i.title}}</li>
      </ul> 
      <h2>课程章节</h2>
      <ul v-for="k in CourseDetailList.chapter_name">
        <li>{{k.name}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import $axios from "axios";

export default {
  name: "Course",
  data() {
    return {
      CourseDetailList: {
        id: null,
        why: null,
        recommend: [],
        chapter_name: []
      }
    };
  },
  mounted() {
    // vue 加载完dom对象后执行的
    console.log(this.$route.params.id); // 路由传到全局的参数
    var detailId = this.$route.params.id
    this.initCourseDetail(detailId);
  },
  methods: {
    initCourseDetail(id) {
      // 通过axios 发送ajax请求
      console.log(this.$axios);
      var _this = this;
      $axios
        .request({
          url: "http://127.0.0.1:9527/api/v1/course/" + id + "/",
          methods: "GET"
        })
        .then(function(ret) {
          // 成功后获取的响应内容
          if (ret.data.code === 1000) {
            _this.CourseDetailList = ret.data.data;
            console.log(_this.CourseDetailList);
          } else {
            alert("获取数据失败");
          }
        })
        .catch(function() {
          // 失败后获取的响应内容
          alert("获取数据失败2");
        });
    },
    getRecomment(id){
      this.initCourseDetail(id)
      this.$router.push({name:"courseDetail",params:{id:id}})  // 重定向
    }
  }
};
</script>


<style scoped>
</style>