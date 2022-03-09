/* eslint-disable import/no-anonymous-default-export */


export default {
	projectLink: 'https://dev.azure.com/lilyknight/my-nextjs-templates/_git/nextra-simple-doc-template', // GitHub link in the navbar
	docsRepositoryBase: 'https://github.com/spencerwooo/onedrive-vercel-index-docs/tree/main/src/pages',     // base URL for the docs repository
	titleSuffix: ' – Nextra',
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null, // customizable, you can use algolia for example
	darkMode: true,
	floatTOC: true,
	defaultMenuCollapsed: true,
	footer: true,
	footerText: `Built in ${new Date().getFullYear()} © Nanami.`,
	footerEditLink: `Edit this page on GitHub`,
	logo: (
		<>
			{/* <svg>...</svg> */}
			<span>Next.js Static Site Generator</span>
		</>
	),
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Nextra: the next docs builder" />
			<meta name="og:title" content="Nextra: the next docs builder" />
		</>
	),
}