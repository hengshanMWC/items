import simpleGit from 'simple-git'
export function clone(address: string) {
  simpleGit().clone(address)
}
