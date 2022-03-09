/* eslint-disable import/no-anonymous-default-export */
import Logo from './components/logo';

export default {
	github: 'https://github.com/aoikaze-unofficial/board-ng',
	projectLink: 'https://github.com/aoikaze-unofficial/board-ng', 
	docsRepositoryBase: 'https://github.com/aoikaze-unofficial/board-ng/tree/main/src/pages',     
	titleSuffix: ' – 风蓝 Galgame 群公告板',
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null, 
	darkMode: true,
	floatTOC: true,
	defaultMenuCollapsed: true,
	footer: false,
	footerText: `于 ${new Date().getFullYear()} 构建 © Nanami.`,
	footerEditLink: `在 Github 上编辑此页面`,
	logo: (<Logo />),
	head: (<>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="作为群公告的拓展使用，由 Next.js 驱动" />
		<meta name="og:title" content="风蓝 Galgame 群公告板 Preview" />
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="manifest" href="/site.webmanifest" />
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
		<meta name="msapplication-TileColor" content="#ffc40d" />
		<meta name="theme-color" content="#ffffff"></meta>
	</>),
}