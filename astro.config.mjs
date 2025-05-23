import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import starlightLinksValidator from 'starlight-links-validator'


// !! UPDATE LATEST VERSION HERE !!
const latest_version = '2.0';

export const latest_dir_name = latest_version.replace('.', '_');

// https://astro.build/config
export default defineConfig({
	site: 'https://icu4x.unicode.org',
	base: '',
	redirects: {
		"/1_5": "/1_5/tutorials/quickstart",
		'/1_5/tutorials': '/1_5/tutorials/quickstart',
		"/2_0": "/2_0/tutorials/quickstart",
		'/2_0/tutorials': '/2_0/tutorials/quickstart',
	},
	integrations: [
		starlight({
			title: 'ICU4X',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: "icon",
						href: "/icon_black.png",
						media: "(prefers-color-scheme: light)",
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: "icon",
						href: "/icon_white.png",
						media: "(prefers-color-scheme: dark)",
					}
				},
			],
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
					items: [
						{
							label: 'API documentation',
							items: [
								{
									label: 'Rust',
									link: 'https://docs.rs/icu/1.5',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },

								},
								{
									label: 'C++',
									link: '/1_5/cppdoc/',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },
								},
								{
									label: 'Dart',
									link: '/1_5/dartdoc/icu',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },
								},
								{
									label: 'TypeScript',
									link: '/1_5/tsdoc/',
									badge: { text: '↗', variant: 'tip' },
									attrs: { target: '_blank' },
								},
							],
						},
						{
							label: 'Tutorials',
							autogenerate: { directory: '1_5/tutorials' },
						},
					],
					collapsed: latest_dir_name != '1_5',
				},
			],
		}),
	],
});
