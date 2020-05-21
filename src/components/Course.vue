<template>
  <div class="Course">

    <div v-for="item in CourseList">
      <div style="width: 350px;float: left">
        <router-link :to="{name:'courseDetail',params:{id:item.id}}">
        <img style="width: 300px" :src="sourceImg(item)" alt="11" />
          <h3>{{item.title}}</h3>
        </router-link>
        <p>{{item.level}}</p>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: "Course",
  data() {
    return {
      CourseList: [],
    };
  },
  mounted() {
    // vue 加载完dom对象后执行的
    this.initCourse();
  },
  methods: {
    initCourse() {
      // 通过axios 发送ajax请求
      var _this = this;
      this.$axios
        .request({
          url: "http://127.0.0.1:9527/api/v1/course/",
          methods: "GET"
        })
        .then(function(ret) {
          // 成功后获取的响应内容
          _this.CourseList = ret.data.data;
        })
        .catch(function() {
          // 失败后获取的响应内容
          alert("获取数据失败2");
        });
    },
    sourceImg(item){
        return `http://127.0.0.1:9527/${item.course_img}`
    }
  }
};
</script>


<style scoped>
</style>
