module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: { //settings concat task
      options: {
        separator: '// ---- \n', //分割器 将每一个拼接文件以这个属性分割开
        banner: '/* 这里是concat添加的属性banner */ \n',
        footer: '/* 这里是concat添加的属性footer */',
        // stripBanners: true,
      },
      dist: {
        src: ['src/test.js','src/demo1.js'],
        dest: 'dist/<%= pkg.version %>/<%= pkg.name %>.js'
      }
    },
    clean: ['dist','dest'],
    uglify: {
      options: {
        //mangle: false, // 在压缩过程中不更改变量名以及函数名
        beautify: true, // 美化javascript
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
        compress: {
          drop_console: true //在压缩过程中删除console
        }
      },
      // my_target: {
      //   files: {
      //     'dest/<%= pkg.version %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
      //   }
      // }
      dist: {
        files: {
          'dest/<%= pkg.name %>-<%= pkg.version %>.min.js' : ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      options: {
        browser: true,
        globals: {
          jQuery: true
        }
      },
      files: ['src/*.js']
    }
  })

  // 加载grunt插件task
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.registerTask('default',['concat','uglify'])
}
