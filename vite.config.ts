import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { generateModifyVars } from './build/generate/generateModifyVars'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~views': resolve(__dirname, 'src/views'),
        '~styles': resolve(__dirname, 'src/styles'),
        '~comps': resolve(__dirname, 'src/components'),
        '~assets': resolve(__dirname, 'src/assets'),
        '~plugins': resolve(__dirname, 'src/plugins'),
        '~utils': resolve(__dirname, 'src/utils'),
      },
    },
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
    ],
  }
}
