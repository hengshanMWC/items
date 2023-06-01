import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

export function getFilename() {
  return fileURLToPath(import.meta.url)
}

export function getDirname() {
  return dirname(getFilename())
}

export function install(name: string) {
  execSync('npm run init', { stdio: 'inherit', cwd: resolve(process.cwd(), name) })
}
