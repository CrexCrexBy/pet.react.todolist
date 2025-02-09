import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';


// https://vite.dev/config/
export default defineConfig({
	base: "/pet.react.todolist/",
	plugins: [
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			'@components': resolve(__dirname, './src/components'),
		}
	},
})
