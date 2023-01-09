import {
  clone,
  templateList,
} from '../dist/items.js'
import colors from 'colors'
import ora from 'ora'
export async function createTemplate (choice, name) {
  const spinner = ora('Pulling template').start();
  try {
    await clone(templateList.find(item => choice === item.name).address, name)
    console.log(colors.cyan.bold('create success'))
    console.log(`cd ${name || item.name}`)
    console.log('pnpm i')
  } catch (err) {
    console.log(colors.red.bold(err.message))
  } finally {
    spinner.stop()
  }
}
