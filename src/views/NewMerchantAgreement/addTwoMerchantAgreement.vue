<script setup lang="ts" name="AddTwoMerchantAgreement">
import { reactive } from 'vue'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
const fileList = ref<UploadUserFile[]>([])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = uploadFile => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})
const radio2 = ref('1')
const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="w-100% bg-light-400">
    <div class="">
      <div class="">
        <div class="flex justify-center">
          <div class="border-b-dashed w-145 mb-2 border-light-900"></div>
          <div class="flex justify-center items-center ml-2 mr-2">
            <span
              class="bg-blue-400 color-white w-5 h-5 block text-center rounded-20 mr-2 leading-5 dotted-line relative"
            >
              1
            </span>
            <span class="">协议主体</span>
          </div>
          <div class="border-b-dashed w-145 mb-2 border-light-900"></div>
        </div>
        <div class="w-100% mt-1">
          <div class="mr-2 ml-2 bg-white p-5">
            <el-form
              :inline="true"
              :model="formInline"
              size="default"
              class="demo-form-inline"
            >
              <el-form-item label="协议客户：" class="w-145">
                <el-upload
                  v-model:file-list="fileList"
                  class="upload-demo"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :limit="1"
                  :on-exceed="handleExceed"
                >
                  <el-button class="w-50px">选择客户</el-button>
                  <!-- <template #tip>
                    <div class="el-upload__tip">
                      jpg/png files with a size less than 500KB.
                    </div>
                  </template> -->
                </el-upload>
                <span class="mb-2 ml-1">上海正野有限公司</span>
              </el-form-item>
              <el-form-item label="协议状态：" class="w-145">
                <el-select
                  v-model="formInline.region"
                  placeholder="协议状态"
                  clearable
                >
                  <el-option label="正常" value="shanghai" />
                  <el-option label="异常" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="购进指标：" class="w-145">
                <el-select
                  style="width: 60px"
                  v-model="formInline.region"
                  placeholder="购进指标"
                  clearable
                  size="default"
                >
                  <el-option label="金额" value="shanghai" />
                  <el-option label="数量" value="beijing" />
                </el-select>
                <el-input
                  class="ml-2"
                  style="width: 220px"
                  v-model="formInline.user"
                  placeholder="输入金额/数量"
                />
              </el-form-item>
              <el-form-item label="纯销指标：" class="w-145">
                <el-select
                  style="width: 60px"
                  v-model="formInline.region"
                  placeholder="纯销指标"
                  clearable
                  size="default"
                >
                  <el-option label="金额" value="shanghai" />
                  <el-option label="数量" value="beijing" />
                </el-select>
                <el-input
                  class="ml-2"
                  style="width: 220px"
                  v-model="formInline.user"
                  placeholder="输入金额/数量"
                />
              </el-form-item>
              <el-form-item label="选择区域：" class="w-145">
                <el-select
                  style="width: 60px"
                  v-model="formInline.region"
                  placeholder="选择区域"
                  clearable
                  size="default"
                >
                  <el-option label="上海" value="shanghai" />
                  <el-option label="北京" value="beijing" />
                </el-select>
                <el-radio-group v-model="radio2" class="ml-1">
                  <el-radio label="1" border>全国</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="签订时间：" class="w-145">
                <el-input
                  style="width: 288px"
                  v-model="formInline.user"
                  placeholder="输入签订时间"
                />
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-form-inline .el-input {
  --el-input-width: 285px;
}
</style>
