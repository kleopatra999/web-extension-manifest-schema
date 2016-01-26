module.exports = {
  options: {
    sourceMap: 'inline',
    presets: ['es2015'],
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'tests/',
      src: ['*.js'],
      dest: 'dist/tests',
    },{
      expand: true,
      cwd: 'src/',
      src: ['*.js'],
      dest: 'dist/',
    }],
  },
};
