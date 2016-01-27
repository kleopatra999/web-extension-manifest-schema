module.exports = {
  default: {
    files: [{
      expand: true,
      cwd: 'src',
      src: ['manifest-schema.json'],
      dest: 'dist/',
      filter: 'isFile',
    }],
  },
};
