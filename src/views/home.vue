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
    <SvgIcon name="test"> </SvgIcon>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { Icon, SvgIcon } from '@/components/Icon'
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'

export default defineComponent({
  components: {
    HelloWorld,
    Icon,
    SvgIcon,
    Button
  },
  setup() {
    const hw = ref(null)
    
    const onmyclick = (): void => {
      
      hw.value.someMethods()
    }
    const myclick = (): void => {
      
    }

    // 请求 mock api
    fetch('/api/getUsers')
      .then((res) => res.json())
      .then((data) => {
        
      })

    return { hw, onmyclick, myclick }
  },
})
</script>

<style lang="less" scoped></style>
