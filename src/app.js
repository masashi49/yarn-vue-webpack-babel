import Vue from 'vue'
import axios from 'axios';

var app = new Vue({
  el: '#app',
  data: {
    message: 'ニューヨークタイムスAPI',
    results: []
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Mykey")
    .then(response => {this.results = response.data.results})
  }

})
