import simpleGit from 'simple-git'
import colors from 'colors'
// import ora from 'ora'
import { templateList } from './list'

function clone(address: string, name: string) {
  const cmd = ['clone', address, name]
  return simpleGit().raw(cmd)
}

async function createTemplate(choice: string, name: string) {
  // const spinner = ora('Pulling template').start()
  const item = templateList.find(item => choice === item.name) || templateList[0]
  try {
    await clone(item.address, name)
    console.log(colors.cyan.bold('create success'))
    console.log(`cd ${name || choice} && pnpm i`)
  }
  catch (err) {
    console.log(colors.red.bold(err.message))
  }
  finally {
    // spinner.stop()
  }
}

export {
  createTemplate,
}
