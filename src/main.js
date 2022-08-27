import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import demoBlock from "@/components/.components/demo-block.vue";

Vue.use(ElementUI);
Vue.component("demo-block", demoBlock);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
