const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './src/theme.config.js',
	unstable_staticImage: true
});

module.exports = withNextra({
	reactStrictMode: true,
	redirects: () => {
		return [
			{
				source: '/blog/board',
				destination: '/blog/board/readme',
				statusCode: 301
			},
			{
				source: '/blog/oneindex',
				destination: '/blog/oneindex/readme',
				statusCode: 301
			},
			{
				source: '/blog/disclaimer',
				destination: '/blog/disclaimer/disclaimer',
				statusCode: 301
			},
			{
				source: '/blog',
				destination: '/blog/disclaimer/disclaimer',
				statusCode: 301
			}
		]
	}
});