<template>
  <div id="login">
    <cube-input
      v-model="userName"
      :maxlength="maxlength"
    ></cube-input>
    <cube-input 
    v-model="password"
    type="password"
    eye="eye"
    ></cube-input>
    <cube-button :light="true">点击登录</cube-button>
  </div>
</template>

<script>
export default {
  extends: {},
  data() {
    return {
      userName: "",
      password: "",
      maxlength: 50,
      eye:"true"
    };
  },
  name: "login",
  components: {},
  watch: {
    userName(newV) {
      if (newV.length > 30) {
        // 将邮箱的长度限制在30
        newV = newV.slice(0, 30);
        this.$nextTick(() => {
          this.value = newV;
        });
      }
    },
    password(newV) {
      if (newV.length > 12) {
        // 把密码长度限制在12
        newV = newV.slice(0, 12);
        this.$nextTick(() => {
          this.value = newV;
        });
      }
    }
    
  },
  created() {
    /*     console.log("created" + this.$refs.text);
      created钩子函数dom节点还没被渲染
    使用$nextTick可以使在dom节点还没挂载还没渲染出来的时候
    需要操作dom节点的js可以放在nexTick里面
    this.$nextTick(()=>{
        console.log("created(nexttick)" + this.$refs.text.$el.innerHTML)
    }) */
  },
  mounted() {

  }
};
</script>

<style lang="stylus" scoped></style>