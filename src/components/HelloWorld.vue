<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <button @click="onclick">emit</button>
  <div>
    <button @click="$store.commit('increment')">{{$store.state.count}}</button>
  </div>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import Comp from '~comps/Comp.vue'
import { ref, defineComponent, reactive, defineEmit, useContext } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  components: { Comp },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  emits: ['myclick'],
  setup: () => {
    const count = ref(0)
    // 获取上下文
    const ctx = useContext()
    console.log('ctx: ', ctx)
    // 导出方法 （父组件调用子组件）
    ctx.expose({
      someMethods() {
        console.log('someMethods')
      },
    })
    // 定义事件 (子组件调父组件)
    // const emit = defineEmit(['myclick'])
    const onclick = () => {
      // emit('myclick')
      ctx.emit('myclick')
    }
    return { count, onclick }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
