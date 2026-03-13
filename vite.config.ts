import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';

	return {
		base: '/scoot-multi-page-website',
		plugins: [
			react(),
			babel({
				presets: [reactCompilerPreset()],
			}),
		],
		build: {
			sourcemap: !isProduction,
		},
	};
});
