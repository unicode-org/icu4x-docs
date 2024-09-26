import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/current/[...slug]": "/15/[...slug]"
	},
	integrations: [
		starlight({
			title: 'ICU4X',
			social: {
				github: 'https://github.com/unicode-org/icu4x',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						'overview'
					],
				},
				{
					label: 'Version 1.5',
					autogenerate: { directory: '1.5'},
				},
				{
					label: 'Previous Versions',
					collapsed: true,
					items: [
						{
							label: 'Version 1.2',
							autogenerate: { directory: '1.2'},
						}
					],
				},
			],
		}),
	],
});
