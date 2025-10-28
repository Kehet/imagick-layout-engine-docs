// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ImagickLayoutEngine documentation for PHP',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Kehet/imagick-layout-engine' }],
			sidebar: [
				{
					label: 'Guides',
                    autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
