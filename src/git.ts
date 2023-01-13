import simpleGit from 'simple-git'
import colors from 'colors'
import { templateList } from './list'

function clone(address: string, name: string) {
  const cmd = ['clone', address, name]
  return simpleGit().raw(cmd)
}

async function createTemplate(choice: string, name: string) {
  const item = templateList.find(item => choice === item.name) || templateList[0]
  try {
    await clone(item.address, name)
    return name
  }
  catch (err) {
    console.log(colors.red.bold(err.message))
  }
}

export {
  createTemplate,
}
