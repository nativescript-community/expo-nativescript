const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...React...': {
				script: `npx cowsay "Test all the Reactions!"`,
				description: ` 🔻 React`,
			},
			'demo-react': {
				clean: {
					script: 'nx run demo-react:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-react:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-react:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nativescript-community/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nativescript-community/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nativescript-community': {
			// @nativescript-community/expo-nativescript-adapter
			'expo-nativescript-adapter': {
				build: {
					script: 'nx run expo-nativescript-adapter:build.all',
					description: '@nativescript-community/expo-nativescript-adapter: Build',
				},
			},
			// @nativescript-community/expo-permissions-nativescript-plugin
			'expo-permissions-nativescript-plugin': {
				build: {
					script: 'nx run expo-permissions-nativescript-plugin:build.all',
					description: '@nativescript-community/expo-permissions-nativescript-plugin: Build',
				},
			},
			// @nativescript-community/expo-contacts-nativescript-plugin
			'expo-contacts-nativescript-plugin': {
				build: {
					script: 'nx run expo-contacts-nativescript-plugin:build.all',
					description: '@nativescript-community/expo-contacts-nativescript-plugin: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'expo-nativescript-adapter': {
				script: 'nx run expo-nativescript-adapter:focus',
				description: 'Focus on @nativescript-community/expo-nativescript-adapter',
			},
			'expo-permissions-nativescript-plugin': {
				script: 'nx run expo-permissions-nativescript-plugin:focus',
				description: 'Focus on @nativescript-community/expo-permissions-nativescript-plugin',
			},
			'expo-contacts-nativescript-plugin': {
				script: 'nx run expo-contacts-nativescript-plugin:focus',
				description: 'Focus on @nativescript-community/expo-contacts-nativescript-plugin',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
