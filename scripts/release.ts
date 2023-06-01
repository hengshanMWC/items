// import { execSync } from 'child_process'
// import colors from 'colors'
// import { versionBump } from 'bumpp'
// console.log(`${colors.cyan.bold('release: start')} 🏗`);
// (async function () {
//   execSync('npm run build', { stdio: 'inherit' })
//   await versionBump()
//   execSync('npm publish --access public', { stdio: 'inherit' })
// })()
// console.log(`${colors.cyan.bold('release: success')} 🎉🎉🎉🎉🎊`)
import { execSync } from 'child_process'
import colors from 'colors'
// import { versionBump } from 'bumpp'
import pkg from '../package.json'
console.log(`${colors.cyan.bold('release: start')} 🏗`);
(async function () {
  // execSync('npm run test', { stdio: 'inherit' })
  execSync('npm run build', { stdio: 'inherit' })
  // await versionBump()
  execSync(`git tag v${pkg.version}`, { stdio: 'inherit' })
  execSync('npm publish --access public', { stdio: 'inherit' })
  execSync('git push origin HEAD', { stdio: 'inherit' })
})()
console.log(`${colors.cyan.bold('release: success')} 🎉🎉🎉🎉🎊`)
