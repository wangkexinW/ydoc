module.exports = {
    "destDir": "yo-docs",
    "webSiteUrl": "http://ued.qunar.com/mobile/yo/doc/",
    "project": {
        "title": "YO Document",
        "footer": "Made By Qunar Hotel FE Mobile Team. © 2014 - 2015<br /> Style Build By <a href='http://bootcss.com'>Bootstrap</a>",
        "version": "1.1.0",
        "banner": {
            "title": "Yo 简介",
            "description": "Yo 是一款基于 Mobile First 理念而设计的 CSS Framework，当然，你使用在PC高级浏览器中也完全没有问题；其具备轻量，易用，快速且高度强大的自定义能力。"
        },
        "pages": [
            {
                "name": "index",
                "title": "起步",
                "style": "markdown",
                "content": "./README.md"
            },{
                "name": "changelog",
                "title": "历史",
                "style": "markdown",
                "content": "./changelog.md"
            },{
                "name": "api",
                "title": "起步",
                "style": "js",
                "content": ["./scripts/**/*.js", "!**/index.js"]
            }
        ]
    },
    "version": "0.0.1"
}