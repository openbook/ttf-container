yaml = require('js-yaml');
fs   = require('fs');
let doc = {}

// Get document, or throw exception on error

function load (env) {
  return loadConfig()
}

function loadConfigFile (file) {
  try {
    return yaml.load(fs.readFileSync(file, 'utf8'))
  } catch (e) {
    if (!/ENOENT:\s+no such file or directory/.test(e)) {
      console.log('Error Loading ' + file + ':', e)
      throw e
    }
  }
}

function loadConfig () {
  if (fs.existsSync('config.yml')) {
    return loadConfigFile('config.yml')
  } else {
    let templ = {}
    multiFile = true
    let files = fs.readdirSync('config')
    for (let i = 0; i < files.length; i++) {
      if (files[i].endsWith('.yml')) {
        let keyName = files[i].substring(0, files[i].length - '.yml'.length)
        templ[keyName] = loadConfigFile('config/' + files[i])
      }
    }
    return templ
  }
}

module.exports = load()