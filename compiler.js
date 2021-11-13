import sass from 'sass'
import magicImporter from 'node-sass-magic-importer'

const compile = ({ data, filename }) => {
  const result = sass.renderSync({
    data,
    outputStyle: 'compressed',
    outFile: filename + '.css',
    importer: magicImporter({
      cwd: process.cwd(),
      packagePrefix: '~',
    }),
  })

  // only return css as vue3 compiler will scope it
  return result.css.toString('utf8')
}

global.vue = global.vue || {}
global.vue.lang = global.vue.lang || {}

global.vue.lang.scss = compile
global.vue.lang.sass = compile