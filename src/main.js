import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  data: {
    textInput: ""
  },
  render: h => h(App)
}).$mount("#app");
