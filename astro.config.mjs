// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://kehet.github.io',
    base: '/imagick-layout-engine-docs',
	integrations: [
		starlight({
			title: 'kehet/imagick-layout-engine',
			social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Kehet/imagick-layout-engine' },
                { icon: 'github', label: 'GitHub Docs', href: 'https://github.com/Kehet/imagick-layout-engine-docs' },
            ],
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
