// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//       '@layouts': path.resolve(__dirname, 'src/layouts'),
//       '@hooks': path.resolve(__dirname, 'src/hooks'),
//       '@services': path.resolve(__dirname, 'src/services'),
//       '@store': path.resolve(__dirname, 'src/store'),
//       '@types': path.resolve(__dirname, 'src/types'),
//       '@utils': path.resolve(__dirname, 'src/utils'),
//       '@constants': path.resolve(__dirname, 'src/constants'),
//       '@routes': path.resolve(__dirname, 'src/routes')
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@routes': path.resolve(__dirname, 'src/routes')
    }
  }
})