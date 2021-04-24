<template>
  <span
    ref="elRef"
    :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"
    :style="getWrapStyle"
  >
  </span>
</template>

<script lang="ts">
import Iconify from '@purge-icons/generated'
import { isString } from '~utils/is'
import {
  defineComponent,
  ref,
  computed,
  unref,
  onMounted,
  nextTick,
  CSSProperties,
} from 'vue'

export default defineComponent({
  props: {
    // icon name
    icon: String,
    prefix: String,
    color: String,
    size: {
      type: Number,
      default: 16,
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const elRef = ref<ElRef>(null)
    console.log('elRef: ', elRef)
    const getIconRef = computed(
      () => `${props.prefix ? props.prefix + ':' : ''}${props.icon}`
    )
    console.log('getIconRef: ', getIconRef)

    const update = async () => {
      const el = unref(elRef)
      console.log('el: ', el)
      if (!el) return

      await nextTick()
      const icon = unref(getIconRef)
      console.log('icon: ', icon)
      if (!icon) return

      const svg = Iconify.renderSVG(icon, {})
      console.log('svg: ', svg)
      if (svg) {
        el.textContent = ''
        el.appendChild(svg)
        console.log('el1: ', el)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        span.dataset.icon = icon
        el.textContent = ''
        el.appendChild(span)
        console.log('el2: ', el)
      }
    }

    const getWrapStyle = computed(
      (): CSSProperties => {
        const { size, color } = props
        let fs = size
        if (isString(size)) {
          fs = parseInt(size, 10)
        }

        return {
          fontSize: `${fs}px`,
          color: color,
          display: 'inline-flex',
        }
      }
    )
    console.log('getWrapStyle: ', getWrapStyle)

    onMounted(update)
    return { elRef, getWrapStyle }
  },
})
</script>

<style lang="less">
.app-iconify {
  display: inline-block;
  vertical-align: middle;

  &-spin {
    svg {
      animation: loadingCircle 1s infinite linear;
    }
  }
}
span.iconify {
  display: block;
  min-width: 1em;
  min-height: 1em;
  background-color: @iconify-bg-color;
  border-radius: 100%;
}
</style>
