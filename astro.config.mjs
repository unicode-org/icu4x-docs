import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import starlightLinksValidator from 'starlight-links-validator'


// !! UPDATE LATEST VERSION HERE !!
// format semver with underscores to make it look like a semver would in a URL
var latest_display_name = 'Version 2.0';
var latest_dir_name = '2_0';

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
						{ label: 'Web Demo', link: '/' + latest_dir_name + '/wasmdemo' },
					]
				},
				{
					label: 'Start Here',
					items: [
						'principles'
					],
				},
				{
					label: latest_display_name,
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
							label: 'Web demo',
							slug: '2_0/wasmdemo',
						},
						{
							label: 'API documentation',
							items: [
								{
									label: 'Rust',
									link: 'https://docs.rs/icu/2.0.0',
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
					]
				},
				{
					label: 'Version 1.5',
					autogenerate: { directory: '1_5'},
					collapsed: true,
				},
			],
		}),
	],
});
