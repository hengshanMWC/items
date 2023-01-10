import { dirname } from 'path'
import { fileURLToPath } from 'url'

export function getFilename() {
  return fileURLToPath(import.meta.url)
}

export function getDirname() {
  return dirname(getFilename())
}
