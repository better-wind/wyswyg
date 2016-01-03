/**
 * Created by Remate-zuoci on 2015/7/2.
 */
/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        actName:'Citywest',         //******每次新增活动页面必须要改，名字即活动名******
        path:{
            src:'dev',//开发目录
            temp:'temp',//临时目录
            dist:'../../../build/pc/<%= actName %>',//发布目录
            pre:'../commons',//activity目录
            dist_pre:'../../../build/pc/common'

        },
        clean:{
            options:{
                force:true
            },
            temp:{
                src:['<%= path.temp%>/']
            },
//            dev:{
//                src:['<%= path.src%>/css/*',
//                     '<%= path.src%>/images/*',
//                     '<%= path.src%>/js/*']
//            }
//            ,
            dev:{
                src:['<%= path.src%>/moban/*']
            },
            js:{
                src:['<%= path.dist%>/js/']
            },
            css:{
                src:['<%= path.dist%>/css/']
            },
            common:{
                src:['<%= path.dist_pre%>/js/']
            }
        },
        copy:{
            main:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= path.src%>/images/',
                        src:'**',
                        dest:'<%= path.dist%>/images/'
                    },
                    {
                        expand:true,
                        cwd:'<%= path.src%>/moban/',
                        src:'**',
                        dest:'<%= path.page_copy%>/'
                    }
                ]
            }
        },
		less:{
			build:{
				files:[
					{
						src:['<%= path.src%>/less/fifty.less'
						],
						dest:'<%= path.temp%>/css/fifty.css'
					},
                    {
                        src:['<%= path.src%>/less/global.less'
                        ],
                        dest:'<%= path.temp%>/css/global.css'
                    },
                    {
                        src:['<%= path.src%>/less/starry_sky.less'
                        ],
                        dest:'<%= path.temp%>/css/starry_sky.css'
                    }


				]
			}
		},
        concat: {
            /*合并文件*/
            css:{
                files:[
                    {
                        src:[
                            '<%= path.src%>/css/bootstrap.css'
                        ],
                        dest:'<%= path.dist%>/css/bootstrap.css'
                    },
                    {
                        src:[
                            '<%= path.src%>/css/bootstrap-responsive.css'
                        ],
                        dest:'<%= path.dist%>/css/bootstrap-responsive.css'
                    },
                    {
                        src:[
                            '<%= path.temp%>/css/global.css'
                        ],
                        dest:'<%= path.dist%>/css/global.css'
                    },
                    {
                        src:[
                            '<%= path.temp%>/css/starry_sky.css'
                        ],
                        dest:'<%= path.dist%>/css/starry_sky.css'
                    },
                    {
                        src:[
                            '<%= path.src%>/css/nav.css'
                        ],
                        dest:'<%= path.dist%>/css/nav.css'
                    },
                    {
                        src:[
                            '<%= path.temp%>/css/fifty.css'
                        ],
                        dest:'<%= path.dist%>/css/fifty.css'
                    }

                ]
            },
            js:{
                files:[
                    //  第三方组件打包
                    {
                        src:['<%= path.pre%>/js/jquery/jquery183.js'
                        ],
                        dest:'<%= path.dist_pre%>/js/jquery/jquery183.js'
                    },
                    {
                        src:['<%= path.src%>/js/bootstrap.js'
                        ],
                        dest:'<%= path.dist%>/js/bootstrap.js'
                    },
                    {
                        src:['<%= path.src%>/js/nav.js'
                        ],
                        dest:'<%= path.dist%>/js/nav.js'
                    },
                    {
                        src:['<%= path.src%>/js/starry_sky.js'
                        ],
                        dest:'<%= path.dist%>/js/starry_sky.js'
                    }

                ]
            }
        },
        cssmin:{
            options:{
                compatibility:'ie8',
                noAdvanced:true
            },
            build:{
                expand:true,
                cwd:'<%= path.dist%>/css/',
                src:['*\*/\*.css','!*.min.css'],
                dest:'<%= path.dist%>/css/',
                ext:'.min.css'
            }
        },
        uglify: {
            build:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= path.dist%>/',
                        src:['*\*/\*.js','!*.min.js'],
                        dest:'<%= path.dist%>/',
                        ext:'.min.js'
                    }

                ]
            },
            common:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= path.dist_pre%>/js',
                        src:['*\*/\*.js','!*.min.js'],
                        dest:'<%= path.dist_pre%>/js',
                        ext:'.min.js'
                    }
                ]
            }
        },
        watch: {
            css:{
                files:['<%= path.src%>/less/**/*.less',
					'<%= path.src%>/css/**/*.css',
				],
                tasks:['clean:css','less','concat:css','cssmin']
            },
            minjs:{
                files:['<%= path.src%>/js/**/*.js'],
                tasks:['clean:js','clean:common','concat:js','uglify']
            }
        },
        "bower": {
            "install": {
                "options": {
                    "targetDir": "dev/js/lib",
                    "layout": "byComponent",
                    //"layout": "byType",
                    "install": true,
                    "verbose": false,
                    "cleanTargetDir": false
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default', ['copy','clean','less','concat','cssmin','uglify','clean:temp']);
    grunt.registerTask('bowerCopy',['bower']);
    grunt.registerTask('dev',['watch']);
};
