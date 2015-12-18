module.exports = {
  options: {
    sourceMap: true,
    presets: ['es2015'],
  },
  build: {
    files: [{
      expand: true,
      cwd: 'tests/',
      src: ['*.js'],
      dest: 'build/',
    }],
  },
};
