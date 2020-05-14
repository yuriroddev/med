import Vue from "vue";
import App from "./App.vue";
var yury = new Vue({
  el: ".searchbox",
  render: h => h(App)
});
//export function helloWorld() { return yury; }
console.log('Running App version ' + VERSION);