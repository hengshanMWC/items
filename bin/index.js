#!/usr/bin/env node
import { resolve } from 'path'
import { program } from 'commander'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import ora from 'ora'
import colors from 'colors'
import { createTemplate, getDirname, templateList } from '../dist/items.js'
const pkg = await fs.readJSON(resolve(getDirname(), '../package.json'))
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
    const templateName = name || answer.create
    const spinner = ora(`☕ Pulling template ${colors.bold(`[${templateName}]`)}`).start()
    await createTemplate(answer.create, name || templateName)
    spinner.stop()
  })
program.parse(process.argv)
