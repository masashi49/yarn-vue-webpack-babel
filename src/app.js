import Vue from 'vue'
import console from './component/console'

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        console: console(400)
    }
})