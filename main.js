#! /usr/bin/env node
import chalk from 'chalk';
import meow from 'meow';

const cli = meow(`
	Usage
	  $ ${chalk.cyanBright(`quickpgp`)} <${chalk.greenBright("operation")}>: [${chalk.greenBright("\"encrypt\"")}, ${chalk.greenBright("\"decrypt\"")}, ${chalk.greenBright("\"generate\"")}]

	Options
    ${chalk.greenBright("--save")}, ${chalk.greenBright("-s")} <${chalk.greenBright("filePath")}> Allows you to provide a place to save the response to

	Examples
	  $ ${chalk.cyanBright(`quickpgp`)} ${chalk.greenBright("generate -s")} ${chalk.yellow("keypair.json")}
	  Saved ${chalk.cyanBright(`quickpgp`)} to ${chalk.yellow("keypair.json")}
`, {
	importMeta: import.meta,
	flags: {
		save: {
			type: 'string',
			alias: 's'
		}
	},
    description: false
});

