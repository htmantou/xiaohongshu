<template>
  <div>
    <header>
      <img src="@/assets/img/logo.4eb47e7.svg" alt="" />
    </header>
    <nav>
      <div class="aboutlogin">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <div class="nav-login">
                <el-form-item label="用户名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >登录</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </div>
            </el-form>
          </el-tab-pane>

          <el-tab-pane label="注册" name="second" @click="pushTore">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <div class="nav-login">
                <el-form-item label="用户名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="tellphone">
                  <el-input v-model="ruleForm.tellphone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>

                <el-form-item label="性别" prop="gender">
                  <el-radio-group v-model="ruleForm.gender">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >注册</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </div>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </nav>
  </div>
</template>

<script>
// axios({
//   method: 'post',
//   url: '/user',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });
export default {
  data() {
    let validatePass = (rules, value, callBack) => {
      let reg = /^(?=.*\d+)(?=.*[A-Za-z]+)(?=.*_+).{6,16}$/i;
      if (reg.test(value)) {
        callBack();
      } else {
        callBack(new Error("密码6-16位，必须包含数字，字母，下划线"));
      }
    };
    let tellphone = (rules, value, callBack) => {
      let reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
      if (reg.test(value)) {
        callBack();
      } else {
        callBack(new Error("手机号必须是11位数字"));
      }
    };

    return {
      activeName: "second",
      ruleForm: {
        name: "",
        password: "",
        type: [],
        gender: "",
        tellphone: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
        tellphone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
          { validator: tellphone, trigger: "blur" },
        ],
        // type: [
        //   {
        //     type: "array",
        //     required: true,
        //     message: "请至少选择一个活动性质",
        //     trigger: "change",
        //   },
        // ],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);

      // console.log(this);
      // if (this.$route.fullPath == "/register") {
      //   this.$router.push("/register"); 
      // } else {
      //   this.$router.push("/login");
      // }
      this.$router.push("/login");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$message("连接后端");
          //返回到.......
          // this.$http.post('/userreg',this.ruleForm).then((res)=>{
          //   console.log(res.data)//判断后端返回数据code-0或1

          // })
          this.$router.push("/");
        } else {
          console.log("没有通过前端验证");
          return false;
        }
      });
    },
    pushTore() {
      console.log("1");
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
header {
  height: 106px;
  width: 100%;
  background-color: #ffffff;
  /* background-color: red; */
}
header img {
  margin-top: 53px;
  padding: 0px 93px;
  display: flex;
  justify-content: start;
  /* justify-items: stretch;  */
}
nav {
  height: 1000px;
  background-color: #f5f8fa;
  padding: 100px;

  /* background-color: red; */
}
.aboutlogin {
  padding: 10px 10px;
  height: 350px;
  width: 500px;
  margin: 50px auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}
.nav-login {
  width: 100%;
  height: 100%;
  margin: 0 -30px;
  /* background-color: red; */
}
</style>