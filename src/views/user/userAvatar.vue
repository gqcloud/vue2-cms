<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>更换头像</span>
    </div>
    <div>
      <!-- 图片，用来展示用户选择的头像 -->
      <img
        class="the_img"
        src="@/assets/img/avatar.jpeg"
        alt=""
        v-if="!this.avatar"
      />
      <img class="the_img" v-else :src="this.avatar" alt="" />
      <!-- 按钮区域 -->
      <div class="btn-box">
        <input
          type="file"
          accept="image/*"
          style="display: none"
          ref="iptRef"
          @change="onFileChange"
        />
        <el-button type="primary" icon="el-icon-plus" @click="chooseImg"
          >选择图片</el-button
        >
        <el-button
          type="success"
          icon="el-icon-upload"
          :disabled="avatar === ''"
          >上传头像</el-button
        >
      </div>
    </div>
  </el-card>
</template>

<script>
import { updateUserAvatar } from "@/service/api/user"
export default {
  name: "UserAvatar",
  data() {
    return {
      avatar: ""
    }
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files
      if (files.length === 0) {
        this.avatar = ""
      } else {
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.onload = async (e) => {
          this.avatar = e.target.result
          const res = await updateUserAvatar(this.avatar)
          if (res.data.code !== 0) return this.$message.error("上传头像失败！")
          this.$message.success("上传头像成功！")
          this.$store.dispatch("initUserInfo")
        }
        // 使用URL.createObjURL()来转换文件变成图片地址(纯前端本地)
        // this.avatar = URL.createObjectURL(files[0])
      }
    },
    chooseImg() {
      this.$refs.iptRef.click()
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box {
  margin-top: 10px;
}
.preview {
  object-fit: cover;
}
.the_img {
  width: 350px;
  height: 350px;
}
</style>
