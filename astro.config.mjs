import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// !! UPDATE LATEST VERSION HERE !!
// format semver with underscores to make it look like a semver would in a URL
var latest_semver_str = '1.5';
var latest_ver_display_str = '1_5';

// https://astro.build/config
export default defineConfig({
	site: 'https://unicode-org.github.io',
	base: 'icu4x-docs',
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
				})
			],
			sidebar: [
				{
					label: "leadingNavLinks",
					items: [
						{ label: "Overview", link: "/overview" },
						{ label: "Dev Guide", link: "/" + latest_ver_display_str + "/quickstart" }
					]
				},
				{
					label: 'Start Here',
					items: [
						'overview'
					],
				},
				{
					label: 'Version ' + latest_semver_str,
					autogenerate: { directory: latest_ver_display_str},
				},
				{
					label: 'Previous Versions',
					collapsed: false,
					items: [
						{
							label: 'Version 1.2',
							autogenerate: { directory: '1_2'},
							collapsed: true,
						}
					],
				},
			],
		}),
	],
});
