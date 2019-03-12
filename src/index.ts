#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const gradient = require('gradient-string');
const program = require('commander');

clear();
console.log(
	gradient('green', 'orange')(
		figlet.textSync('Pokemon', { 
			font: 'Ghost', 
			horizontalLayout: 'default' 
		})
	)
);

program
	.version('1.0.0')
	.description('Get awesome Pokémon')
	.option('-a, --arceus', 'Get Arceus')
	.option('-m, --mewtwo', 'Get Mewtwo')
	.option('-r, --rayquaza', 'Get Rayquaza')
	.option('-g, --giratina', 'Get Giratina')
	.option('-d, --dialga', 'Get Dialga')
	.parse(process.argv);

if (program.arceus) console.log(chalk.red.bold('Arceus'));
if (program.mewtwo) console.log(chalk.red.bold('Mewtwo'));
if (program.rayquaza) console.log(chalk.red.bold('Rayquaza'));
if (program.giratina) console.log(chalk.red.bold('Giratina'));
if (program.dialga) console.log(chalk.red.bold('Dialga'));

if (!process.argv.slice(2).length) {
  program.outputHelp();
}