module.exports = class FilenameList {
  constructor(filename = 'filenameList.txt') {
    this.filename = filename
  }
  apply(compiler) {
    compiler.hooks.emit.tap('emitFilename', compilation => {
      const filenameList = []
      for (const filename in compilation.assets) {
        const content = `文件名：${filename} 大小：${compilation.assets[filename].size() / 1000}KB`
        filenameList.push(content)
      }
      const str = filenameList.join('\n\n')
      compilation.assets[this.filename] = {
        source() {
          return str
        },
        size() {
          return str.length
        }
      }
    })
  }
}