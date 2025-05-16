import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import starlightLinksValidator from 'starlight-links-validator'


// !! UPDATE LATEST VERSION HERE !!
let latest_version = '2.0';

let latest_dir_name = latest_version.replace('.', '-');

// https://astro.build/config
export default defineConfig({
	site: 'https://icu4x.unicode.org',
	base: '',
	integrations: [
		starlight({
			title: 'ICU4X',
			social: {
				github: 'https://github.com/unicode-org/icu4x',
			},
			plugins: [
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: 'leadingNavLinks' },
					},
				}),
				starlightLinksValidator()
			],
			components: {
				Footer: './src/components/UnicodeFooter.astro',
			},
			logo: {
				alt: 'Unicode',
				src: './src/assets/unicode.svg',
			},
			credits: false,
			sidebar: [
				{
					label: 'leadingNavLinks',
					items: [
						{ label: 'Quickstart', link: '/' + latest_dir_name + '/tutorials/quickstart' },
						{ label: 'Interactive Demo', link: '/' + latest_dir_name + '/demo' },
					]
				},
				{
					label: 'Start Here',
					items: [
						'principles'
					],
				},
				{
					label: 'Version 2.0',
					badge: {
						text: 'New',
						variant: 'success',
					},
					items: [
						{
							label: 'Code examples',
							link: 'https://github.com/unicode-org/icu4x/tree/release/2.0/examples',
							badge: { text: '↗', variant: 'tip' },
							attrs: { target: '_blank' },
						},
						{
							label: 'Interactive Demo',
							slug: '2_0/demo',
						},
						{
							label: 'API documentation',
							items: [
								{
									label: 'Rust',
									link: 'https://docs.rs/icu/2.0',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },

								},
								{
									label: 'C++',
									link: '/2_0/cppdoc/',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },
								},
								{
									label: 'Dart',
									link: '/2_0/dartdoc/icu',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },
								},
								{
									label: 'TypeScript',
									link: '/2_0/tsdoc/',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },
								},
							],
						},
						{
							label: 'Tutorials',
							autogenerate: { directory: '2_0/tutorials' },
						},
					],
					collapsed: latest_dir_name != '2_0',
				},
				{
					label: 'Version 1.5',
					autogenerate: { directory: '1_5' },
					collapsed: latest_dir_name != '1_5',
				},
			],
		}),
	],
});
