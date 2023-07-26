<script lang="ts" setup>
import { configSource } from '../../config/config'
import { nanoid } from 'nanoid'
// import { ref } from 'vue'
import type { Ref } from 'vue'
declare const window: any

let id: Ref<string | number> = ref('')
type localDeviceType = {
  audioIn: any[]
  videoIn: any[]
  audioOut: any[]
}
const localDevice = reactive<localDeviceType>({
  audioIn: [],
  videoIn: [],
  audioOut: [],
})
const formInline = reactive({
  videoId: undefined,
  audioInId: undefined,
  audioOutId: undefined,
  width: 1080,
  height: 720,
  frameRate: 24,
})
function handleError(error: any) {
  // alert("摄像头无法正常使用，请检查是否占用或缺失")
  console.error(
    'navigator.MediaDevices.getUserMedia error: ',
    error.message,
    error.name
  )
}
function initInnerLocalDevice() {
  let constraints = { video: true, audio: true }
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log('浏览器不支持获取媒体设备')
    return
  }
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      stream.getTracks().forEach(trick => {
        trick.stop()
      })

      // List cameras and microphones.
      navigator.mediaDevices
        .enumerateDevices()
        .then(function (devices) {
          devices.forEach(function (device) {
            let obj = {
              id: device.deviceId,
              kind: device.kind,
              label: device.label,
            }
            if (device.kind === 'audioinput') {
              if (
                localDevice.audioIn.filter((e: any) => e.id === device.deviceId)
                  .length === 0
              ) {
                localDevice.audioIn.push(obj)
              }
            }
            if (device.kind === 'audiooutput') {
              if (
                localDevice.audioOut.filter(
                  (e: any) => e.id === device.deviceId
                ).length === 0
              ) {
                localDevice.audioOut.push(obj)
              }
            } else if (device.kind === 'videoinput') {
              if (
                localDevice.videoIn.filter((e: any) => e.id === device.deviceId)
                  .length === 0
              ) {
                localDevice.videoIn.push(obj)
              }
            }
          })
        })
        .catch(handleError)
    })
    .then(() => {
      console.log(localDevice)
      console.log('audioIn', localDevice.audioIn)
      console.log('audioOut', localDevice.audioOut)
      console.log('videoIn', localDevice.videoIn)
    })
    .catch(handleError)
}

const onSubmit = async () => {
  let domId = 'localdemo01'
  let video: any = document.getElementById(domId)
  let stream = video.srcObject
  if (stream) {
    stream.getAudioTracks().forEach((e: any) => {
      stream.removeTrack(e)
    })
    stream.getVideoTracks().forEach((e: any) => {
      stream.removeTrack(e)
    })
  }

  let newStream = await getTargetDeviceMedia(
    formInline.videoId,
    formInline.audioInId
  )
  video.srcObject = newStream
  video.muted = true
}
/**
 * 获取设备 stream
 * @param constraints
 * @returns {Promise<MediaStream>}
 */
const getLocalUserMedia = async (constraints: any) => {
  return await navigator.mediaDevices.getUserMedia(constraints)
}

/**
 * 获取指定媒体设备id对应的媒体流
 * @author suke
 * @param videoId
 * @param audioId
 * @returns {Promise<void>}
 */
const getTargetDeviceMedia = async (videoId: any, audioId: any) => {
  const constraints = {
    audio: { deviceId: audioId ? { exact: audioId } : undefined },
    video: {
      deviceId: videoId ? { exact: videoId } : undefined,
      width: formInline.width,
      height: formInline.height,
      frameRate: { ideal: formInline.frameRate, max: 24 },
    },
  }
  if (window.stream) {
    window.stream.getTracks().forEach((track: any) => {
      track.stop()
    })
  }
  //被调用方法前面有，此处不再重复
  return await getLocalUserMedia(constraints).catch(handleError)
}
onMounted(() => {
  initInnerLocalDevice()
})
console.log(configSource)
console.log(import.meta.env)
async function createUser() {
  id.value = await nanoid()
  console.log(id.value)
}
createUser()
</script>

<template>
  <!--   <el-row class="w-100% h-100% flex justify-center items-center">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div style="font-size: 20px"> -->
  <!-- 由于SVG图标默认不携带任何属性 -->
  <!-- 你需要直接提供它们 -->
  <!--    <Edit class="w-14px h-14px mr-8px" />
      <Share class="w-14px h-14px mr-8px" />
      <Delete class="w-14px h-14px mr-8px" />
      <Search class="w-14px h-14px mr-8px" /> -->
  <!-- ep:alarm-clock  改成  ep-alarm-clock -->
  <!-- <icon-ep-alarm-clock /> -->
  <!-- logos:vue -->
  <!-- <icon-logos-vue /> -->
  <!-- </div> -->
  <!-- </el-row> -->

  <div class="w-80% h-80% p-20">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="选择摄像头">
            <el-select v-model="formInline.videoId" placeholder="摄像头">
              <el-option
                v-for="(item, index) in localDevice.videoIn"
                :key="index"
                :label="item.label"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择麦克风">
            <el-select v-model="formInline.audioInId" placeholder="麦克风">
              <el-option
                v-for="(item, index) in localDevice.audioIn"
                :key="index"
                :label="item.label"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择听筒">
            <el-select v-model="formInline.audioOutId" placeholder="听筒">
              <el-option
                v-for="(item, index) in localDevice.audioOut"
                :key="index"
                :label="item.label"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分辨率:Width">
            <el-input v-model="formInline.width"></el-input>
          </el-form-item>
          <el-form-item label="分辨率:Height">
            <el-input v-model="formInline.height"></el-input>
          </el-form-item>
          <el-form-item label="FPS">
            <el-input v-model="formInline.frameRate"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <video id="localdemo01" autoplay controls muted></video>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
#localdemo01 {
  width: 500px;
  height: 400px;
}
</style>
