'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const webpack = require('webpack')
const merge = require('webpack-merge')
// const config = require('../config')
const webpackConfig = require('./webpack.build.conf')

const resolve = dir => path.join(__dirname, '..', dir)

function createEntries () {
  let entries = {
    styles: `./src/styles/index.scss`,
    index: `./src/components/index.js`
  }
  let files = glob.sync(`src/components/*/index.js`)
  files.forEach(file => {
    let name = file.replace(`src/components/`, '').replace('/index.js', '')
    entries[name] = `./src/components/${name}/index.js`
  })
  return entries
}

function errorHandle (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  if (stats.hasErrors()) {
    console.log(chalk.red('打包出错了 \n'))
    process.exit(1)
  }
  console.log(chalk.cyan('打包成功 ^_^ \n'))
}

let componentConfig = merge(webpackConfig, {
  entry: createEntries()
})

const spinner = ora('开始打包')
spinner.start()

rm(path.join(resolve('../lib'), ''), err => {
  if (err) throw err
  webpack(componentConfig, errorHandle)
})
