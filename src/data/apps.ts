export const apps: {
	name: string
	slug: string
	links: { href: string; title: string }[]
}[] = [
	{
		name: 'Vue',
		slug: 'vue',
		links: [
			{ href: 'bonneteau', title: 'Bonneteau' },
			{ href: 'minesweeper', title: 'Minesweeper' },
			{ href: 'shifumi', title: 'Shifumi' },
			{ href: 'stories', title: 'Stories' },
		],
	},
	{
		name: 'Svelte',
		slug: 'svelte',
		links: [
			{ href: 'model-viewer', title: 'Model Viewer' },
			// { href: '2048', title: '2048' },
			{ href: 'shifumi', title: 'Shifumi' },
			// { href: 'stories', title: 'Stories' },
		],
	},
	{
		name: 'Solid',
		slug: 'solid',
		links: [],
	},
]
