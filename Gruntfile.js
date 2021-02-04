module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      svg_sprite: {
        sprite: {
          expand: true,
          cwd: 'input',
          src: ['**/*.svg'],
          dest: 'output',
          options: {
            spriteWidth: 30,
            shape: {
              dimension: {
                maxWidth: 30
              }
            },
            mode: {
              css: {
                render: {
                  css: true
                },
                dimensions: true,
                layout: "vertical"
              }
            }
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-svg-sprite');
    grunt.registerTask('default', ['svg_sprite']);
};