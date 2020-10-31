<template>
  <div class="mymsg">
    <span>更换头像：</span>
    <el-upload
      class="avatar-uploader"
      action="http://192.168.43.135:88/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="mycont">
      <el-form ref="form"  label-width="80px">
        <el-form-item label="用户昵称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="输入生日">
          <el-input v-model="date"></el-input><span>例：****-**-**</span>
        </el-form-item>
        <el-form-item label="修改性别">
          <el-radio-group v-model="resource">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      name: "",
      date: "",
      resource: "",
      imgurl:""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.imgurl = res.imgurl;
      console.log(this.imgurl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    onSubmit() {
      let formdata = {};
      formdata.username=this.name;
      formdata.sexs=this.resource;
      formdata.uid=this.$store.state.u_id;
      formdata.heads=this.imgurl;
      formdata.birthday=this.date;
      this.$axios
        .post("/updatauser",formdata)
        .then(res => {
          console.log(res);
          if (res.data.code == 1) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {},
  mouted() {}
};
</script>

<style>
.mymsg {
  background-color: white;
  width: 890px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.mycont {
  margin-left: 20px;
  text-align: left;
}
.el-date-editor.el-input {
  width: 220px !important;
  line-height: 40px !important;
}

.el-icon-plus:before {
  position: absolute;
  top: 38px;
  left: 38px;
}
.el-input {
  width: 300px !important;
  margin-right: 20px;
}
</style>