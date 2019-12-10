<template>
  <div id="login">
    <cube-input
      v-model="value"
      ref="loginvalue"
    ></cube-input>
    <cube-button :light="true">点击登录</cube-button>
  </div>
</template>

<script>
import text1 from "@/components/text/text";

export default {
  extends:{
    
  },
  data() {
    return {
      value: ""
    };
  },
  name: "login",
  components: {
    text1
  },
  watch: {
    value(newV) {
      if (newV.length > 10) {
        newV = newV.slice(0, 10);
        this.$nextTick(() => {
          this.value = newV;
        });
      }
    }
  },
  created() {
    // console.log("created" + this.$refs.text);
    //   created钩子函数dom节点还没被渲染
    //使用$nextTick可以使在dom节点还没挂载还没渲染出来的时候
    // 需要操作dom节点的js可以放在nexTick里面
<<<<<<< HEAD
/*     this.$nextTick(()=>{
        console.log("created(nexttick)" + this.$refs.text.$el.innerHTML)
    }) */
=======
    this.$nextTick(() => {
      console.log("created(nexttick)" + this.$refs.text.$el.innerHTML);
    });
>>>>>>> b472026911ba4dd8aec298f7ea97f6352c4a5449
  },
  mounted() {
    // console.log("mounted" + this.$refs.text.$el.innerHTML);
  }
};
</script>

<style lang="stylus" scoped></style>