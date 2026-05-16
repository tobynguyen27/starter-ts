import { defineConfig, type UserConfig } from 'vite-plus';

const config: UserConfig = defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	staged: {
		'*': 'vp check --fix',
	},
	pack: {
		dts: true,
		clean: true,
		format: ['esm'],
		exports: true,
	},
	lint: {
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
	fmt: {
		useTabs: true,
		tabWidth: 4,
		printWidth: 100,
		endOfLine: 'lf',
		bracketSameLine: true,
		singleQuote: true,
		ignorePatterns: ['dist/**', 'node_modules/**'],
		overrides: [
			{
				files: ['*.yml', '*.yaml', '*.md'],
				options: {
					tabWidth: 2,
					useTabs: false,
				},
			},
		],
	},
});

export default config;
