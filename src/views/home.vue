<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Hello Vue 3 + TypeScript + Vite"
      ref="hw"
      @myclick="myclick()"
    />
    <Button type="danger">Primary</Button>
    <Icon icon="ant-design:wechat-filled" size="40" color="#07C15C" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '~comps/HelloWorld.vue'
import { Icon } from '../components/Icon'
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'

export default defineComponent({
  components: {
    HelloWorld,
    Icon,
    Button
  },
  setup() {
    const hw = ref(null)
    console.log('hw: ', hw)
    const onmyclick = (): void => {
      console.log('myclick from helloworld')
      hw.value.someMethods()
    }
    const myclick = (): void => {
      console.log('log by parent')
    }

    // 请求 mock api
    fetch('/api/getUsers')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })

    return { hw, onmyclick, myclick }
  },
})
</script>

<style lang="less" scoped></style>
