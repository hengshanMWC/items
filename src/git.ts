import { execSync } from 'child_process'
import { resolve } from 'path'
import simpleGit from 'simple-git'
import colors from 'colors'
import { templateList } from './list'

function clone(address: string, name: string) {
  const cmd = ['clone', address, name]
  return simpleGit().raw(cmd)
}

function install(name: string) {
  execSync('pnpm i', { stdio: 'inherit', cwd: resolve(process.cwd(), name) })
}

async function createTemplate(choice: string, name: string) {
  const item = templateList.find(item => choice === item.name) || templateList[0]
  try {
    await clone(item.address, name)
    console.log('\n')
    console.log(colors.cyan.bold('📦 The pull is complete and the dependencies are installed'))
    install(name)
    console.log(colors.cyan.bold('🍾 created'))
    console.log(colors.cyan.bold(`cd ${name}`))
  }
  catch (err) {
    console.log(colors.red.bold(err.message))
  }
}

export {
  createTemplate,
}
