import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss() ],
  // darkMode: 'class',
})
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 40s linear infinite',
//       },
//     },
//   },
// };

