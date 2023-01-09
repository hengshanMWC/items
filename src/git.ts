import simpleGit from 'simple-git'
import {
  clone,
  templateList,
} from '../dist/items.js'
import colors from 'colors'
import ora from 'ora'
function clone(address: string, name?: string) {
  const cmds = ['clone', address]
  if (name) cmds.push('name')
  return simpleGit().raw(cmds)
}
export async function createTemplate (choice: string, name?: string) {
  const spinner = ora('Pulling template').start();
  try {
    await clone(templateList.find(item => choice === item.name).address, name)
    console.log(colors.cyan.bold('create success'))
    console.log(`cd ${name || choice}`)
    console.log('pnpm i')
  } catch (err) {
    console.log(colors.red.bold(err.message))
  } finally {
    spinner.stop()
  }
}
