const purgecss = require('@fullhuman/postcss-purgecss')({
  // 指定项目中所有模板文件的路径
  content: [
    './src/**/*.html',
    './src/**/*.vue', //用于Vue项目
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/*.ts',
    './public/index.html',
    // etc.
  ],
  // 包括在这个正则表达式中使用的任何特殊字符
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  },
})
module.exports = {
  plugins: [
    require('tailwindcss'),
    // require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
