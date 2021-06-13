const critical = require('critical')

critical.generate({
    inline: true,
    base:'./',
    src: '#source/index.kit',
    width: 1300,
    height: 900,
    target:{
        css:'critical.css',
        html:'index.html',
        uncritical:'uncritical.css'
    },
    minify: true,
    extract: true
});