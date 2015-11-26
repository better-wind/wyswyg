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
        actName:'pc_study',         //******每次新增活动页面必须要改，名字即活动名******
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
					{//示例,真实项目请按实际路径修改
						src:['<%= path.src%>/css/test.less'
						],
						dest:'<%= path.temp%>/css/test.css'
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
                            '<%= path.src%>/css/xzmm.css'
                        ],
                        dest:'<%= path.dist%>/css/xzmm.css'
                    },
                    {
                        src:[
                            '<%= path.src%>/css/font.css'
                        ],
                        dest:'<%= path.dist%>/css/font.css'
                    },
                    {
                        src:[
                            '<%= path.temp%>/css/test.css'
                        ],
                        dest:'<%= path.dist%>/css/test.css'
                    },
                    {
                        src:[
                            '<%= path.src%>/css/macair.css'
                        ],
                        dest:'<%= path.dist%>/css/macair.css'
                    },
                    {
                        src:[
                            '<%= path.src%>/css/six_z.css'
                        ],
                        dest:'<%= path.dist%>/css/six_z.css'
                    },
                    {
                        src:['<%= path.src%>/css/index.css'],
                        dest:'<%= path.dist%>/css/index.css'
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
                        src:['<%= path.src%>/js/xzmm.js'
                        ],
                        dest:'<%= path.dist%>/js/xzmm.js'
                    }
                    ,
                    {
                        src:['<%= path.src%>/js/six_z.js'
                        ],
                        dest:'<%= path.dist%>/js/six_z.js'
                    },
                    {
                        src:['<%= path.src%>/js/index.js'],
                        dest:'<%= path.dist%>/js/index.js'
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
                files:['<%= path.src%>/css/**/*.less',
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
