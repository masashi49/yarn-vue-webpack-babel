const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'html'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'html',
        port: 4000,
        inline: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // おまじない
        }
    }
};