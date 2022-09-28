#! /usr/bin/env node
import chalk from 'chalk';
import meow from 'meow';

const cli = meow(`
	Usage
	  $ quickpgp <operation>: ["encrypt", "decrypt", "generate"]

	Options
	  --save, -s <filePath> Allows you to provide a place to save the response to

	Examples
	  $ quickpgp generate -s keypair.json
	  Saved quickpgp to keypair.json
`, {
	importMeta: import.meta,
	flags: {
		save: {
			type: 'string',
			alias: 's'
		}
	}
});

