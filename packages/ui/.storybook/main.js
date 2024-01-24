/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ["../src/components/**/*.stories.tsx"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	}
};

export default config;
