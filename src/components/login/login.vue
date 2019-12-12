<template>
  <div id="login">
    <cube-form
      :model="model"
      :schema="schema"
      :immediate-validate="false"
      :options="options"
    ></cube-form>
  </div>
</template>

<script>
import { type } from 'os';
export default {
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        UserValue: "",
        Password:""
      },
      schema: {
        groups: [
          {
            legend:"用户登录",
            fields: [
              {
                type: "input",
                modelKey: "UserValue",
                label: "用户名",
                props: {
                  placeholder: "请输入您的用户名"
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: "blur"
              },
              {
                type:"input",
                modelKey:"Password",
                label:"密码",
                props:{
                  placeholder:"请输入您的密码"
                },
                eye:true,
                rules:{
                  required:true,
                  password:true
                }
              }
            ]
          },
          {
            fields: [
              {
                type: "submit",
                label: "Submit"
              },
              {
                type: "reset",
                label: "Reset"
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: "standard" // classic fresh
      }
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
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.cube-form-group-legend 
    text-align center
</style>