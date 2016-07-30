module.exports = {
  options: {
    mangle: {
      except: ['u', 'µ']
    },
    compress: {
      //drop_console: true
    },
    preserveComments: false,
    sourceMap: true
  },
  ujs: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/u.optiscroll.js'],
    dest: 'dist/u.optiscroll.min.js'
  },
  jquery: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/jquery.optiscroll.js'],
    dest: 'dist/jquery.optiscroll.min.js'
  }
};
