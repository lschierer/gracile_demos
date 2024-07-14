import { defineConfig } from '@gracile/gracile';
import { resolve } from 'path'

const root = resolve(__dirname, "src");

export default defineConfig({
	port: 4567,
	vite: {
		resolve: {
			alias: {
				"components": resolve(root, "components"),
			}
		}
	}
});
