import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightLinksValidator from 'starlight-links-validator'


// !! UPDATE LATEST VERSION HERE !!
// format semver with underscores to make it look like a semver would in a URL
var latest_display_name = 'Version 2.0 Beta';
var latest_dir_name = '2_0_beta';

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
						leading: { useSidebarLabelled: "leadingNavLinks" },
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
					label: "leadingNavLinks",
					items: [
						{ label: "Overview", link: "/overview" },
						{ label: "Quickstart", link: "/" + latest_dir_name + "/quickstart" }
					]
				},
				{
					label: 'Start Here',
					items: [
						'overview'
					],
				},
				{
					label: latest_display_name,
					autogenerate: { directory: latest_dir_name},
				},
				{
					label: 'Previous Versions',
					collapsed: false,
					items: [
						{
							label: 'Version 1.5',
							autogenerate: { directory: '1_5'},
							collapsed: true,
						}
					],
				},
			],
		}),
	],
});
