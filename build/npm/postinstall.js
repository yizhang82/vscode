/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const cp = require('child_process');
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const extensions = [
	'vscode-api-tests',
	'vscode-colorize-tests',
	'json',
	'configuration-editing',
	'extension-editing',
	'markdown',
	'typescript',
	'php',
	'javascript',
	'css',
	'html'
];

extensions.forEach(extension => {
	const result = cp.spawnSync(npm, ['install'], {
		cwd: `extensions/${extension}`,
		stdio: 'inherit'
	});

	if (result.error || result.status !== 0) {
		process.exit(1);
	}
});