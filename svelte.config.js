import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// Generate an SPA fallback file for static hosting targets.
			fallback: '404.html',
			precompress: false
		}),
		// Optional base path for subpath deployments.
		paths: {
			base: process.env.BASE_PATH || ''
		}
	}
};

export default config;
