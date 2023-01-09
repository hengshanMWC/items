#!/usr/bin/env node
import { program } from 'commander'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import { templateList, createTemplate } from '../dist/items.js'
import { resolve, dirname } from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = await fs.readJSON(resolve(__dirname, '../package.json'))
program
  .version(pkg.version)
  .description('Create item Template')
program
  .command('create [name]')
  .description('Create item Template')
  .action(async (name) => {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'create',
        message: 'Please select a template',
        choices: templateList.map(item => item.name),
      },
    ])
    createTemplate(answer.create, name)
  })
program.parse(process.argv)
