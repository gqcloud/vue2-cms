<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <span>文章分类</span>
        <el-button type="primary" size="mini" @click="addVisible = true"
          >添加分类</el-button
        >
      </div>
      <el-table style="width: 100%" :data="cateList" border stripe>
        <el-table-column
          label="序号"
          type="index"
          width="100"
        ></el-table-column>
        <el-table-column label="分类名称" prop="cate_name"></el-table-column>
        <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" size="mini" @click="updateFn(scope.row)"
              >修改</el-button
            >
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 添加分类的对话框 -->
    <el-dialog
      title="添加文章分类"
      :visible.sync="addVisible"
      width="35%"
      @closed="onAddClosedFn"
    >
      <span>
        <!-- 添加的表单 -->
        <el-form
          :model="addForm"
          :rules="addRules"
          ref="addRef"
          label-width="80px"
        >
          <el-form-item label="分类名称" prop="cate_name">
            <el-input
              v-model="addForm.cate_name"
              minlength="1"
              maxlength="10"
            ></el-input>
          </el-form-item>
          <el-form-item label="分类别名" prop="cate_alias">
            <el-input
              v-model="addForm.cate_alias"
              minlength="1"
              maxlength="15"
            ></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancelFn">取 消</el-button>
        <el-button size="mini" type="primary" @click="addFn">添 加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getArticle, addArticle } from "@/service/api/article"
export default {
  name: "ArtCate",
  data() {
    return {
      cateList: [],
      addVisible: false,
      editId: "",
      isEdit: false,
      addForm: {
        // 添加表单的数据对象
        cate_name: "",
        cate_alias: ""
      },
      addRules: {
        // 添加表单的验证规则对象
        cate_name: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
          {
            pattern: /^\S{1,10}$/,
            message: "分类名必须是1-10位的非空字符",
            trigger: "blur"
          }
        ],
        cate_alias: [
          { required: true, message: "请输入分类别名", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9]{1,15}$/,
            message: "分类别名必须是1-15位的字母数字",
            trigger: "blur"
          }
        ]
      }
    }
  },
  created() {
    this.initArticle()
  },
  methods: {
    async initArticle() {
      const res = await getArticle()
      this.cateList = res.data.data
    },
    cancelFn() {
      this.addVisible = false
    },
    addFn() {
      this.$refs.addRef.validate(async (valid) => {
        if (valid) {
          // 调用接口传递数据给后台
          const { data: res } = await addArticle(this.addForm)
          if (res.code !== 0) return this.$message.error("添加分类失败！")
          this.$message.success("添加分类成功！")
          // 重新请求列表数据
          this.initCateListFn()
          // 关闭对话框
          this.addVisible = false
        } else {
          return false
        }
      })
      this.addVisible = false
    },
    onAddClosedFn() {
      this.$refs.addRef.resetFields()
    },
    updateFn(obj) {
      console.log(obj)
      this.editId = obj.id
      this.isEdit = true
      this.addVisible = true
      this.$nextTick(() => {
        this.addForm.cate_name = obj.cate_name
        this.addForm.cate_alias = obj.cate_alias
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
